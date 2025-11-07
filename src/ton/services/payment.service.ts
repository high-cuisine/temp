import { RedisService } from '@infra/redis/redis.service';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TonService } from './ton.service';
import { PaymentService } from 'src/payment/services/payment.service';
import { TaskService } from 'src/task/services/task.service';
import { UsersService } from 'src/users/services/users.service';
import { TelegramService } from 'src/telegram/services/telegram.service';
import { TaskOfferService } from 'src/task/services/task-offer.service';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class PaymentCheckService {
	private readonly logger = new Logger(PaymentCheckService.name);

	constructor(
		private readonly redisService: RedisService,
		private readonly tonService: TonService,
		private readonly paymentService: PaymentService,
		private readonly taskService: TaskService,
		private readonly usersService: UsersService,
		private readonly telegramService: TelegramService,
		private readonly taskOfferService: TaskOfferService,
	) {
		this.checkPendingPayments();
	}

	@Cron(CronExpression.EVERY_10_MINUTES)
	async checkPendingPayments() {
		try {
			this.logger.log('Checking pending payments...');

			const paymentIndexes = await this.redisService.smembers('payment_indexes');

			if (!paymentIndexes || paymentIndexes.length === 0) {
				return;
			}

			// Проверяем каждый платеж
			for (const userIdStr of paymentIndexes) {
				const userId = parseInt(userIdStr, 10);
				if (isNaN(userId)) continue;

				try {
					const paymentData = await this.redisService.get<{ fromAddress: string; amount: number; offerId: number }>(`payment:${userId}`);

					if (!paymentData || !paymentData.fromAddress || !paymentData.amount) {
						await this.redisService.del(`payment:${userId}`);
						await this.redisService.srem('payment_indexes', userIdStr);
						continue;
					}

					const transaction = await this.tonService.getIncomingPayments(paymentData.fromAddress);

					const filteredTransactions = transaction.filter(
						(el) => el.amount === paymentData.amount.toString() && el.from === paymentData.fromAddress,
					);

					const userPayments = await this.paymentService.getAllPaymentsByUser(userId);

					const remainingTransactions = [...filteredTransactions];
					userPayments.forEach((existingPayment) => {
						if (!existingPayment.txHash) return;
						const index = remainingTransactions.findIndex((tx) => tx.txHash === existingPayment.txHash);
						if (index !== -1) {
							remainingTransactions.splice(index, 1);
						}
					});

					if (remainingTransactions.length === 0) {
						continue;
					}

					const customer = await this.usersService.getUserById(userId);
					if (!customer) {
						this.logger.warn(`Customer with id ${userId} not found while processing payment`);
						continue;
					}

					const offer = await this.taskOfferService.getOfferById(paymentData.offerId);
					const task = await this.taskService.getTaskById(offer.taskId);
					if (!task) {
						this.logger.warn(`Task ${offer.taskId} not found while processing payment`);
						continue;
					}

					const developerProfile = await this.taskService.getDeveloperProfileByUserId(offer.userId);
					const developer = await this.usersService.getUserById(offer.userId);

					let processed = false;

					for (const tx of remainingTransactions) {
						if (!tx?.txHash) {
							continue;
						}

						try {
							const payment = await this.paymentService.createPayment(userId, paymentData.amount, tx.txHash);
							await this.paymentService.updatePaymentStatus(payment.id, PaymentStatus.IN_WORK);

							await this.taskService.updatePaymentId(paymentData.offerId, payment.id);

							if (developerProfile) {
								await this.taskService.updateTask(offer.taskId, {
									developer: { connect: { id: developerProfile.id } },
									status:
										task.status === 'COMPLETED' || task.status === 'CLOSED'
											? task.status
											: 'IN_PROGRESS',
								});
							} else {
								await this.taskService.updateTask(offer.taskId, {
									status:
										task.status === 'COMPLETED' || task.status === 'CLOSED'
											? task.status
											: 'IN_PROGRESS',
								});
								this.logger.warn(
									`Developer profile for user ${offer.userId} not found while assigning task ${offer.taskId}`,
								);
							}

							await this.taskService.rejectPendingOffers(offer.taskId, offer.id);

							await this.redisService.del(`payment:${userId}`);
							await this.redisService.srem('payment_indexes', userIdStr);

							if (customer.telegramId) {
								await this.telegramService.sendUserMessageByTelegramId(
									Number(customer.telegramId),
									`💸 Платеж за заказ #${offer.taskId} успешно обработан`,
								);
							}

							if (developer?.telegramId) {
								await this.telegramService.sendUserMessageByTelegramId(
									Number(developer.telegramId),
									`✅ Заказчик @${customer.tgUsername || customer.displayName} внес оплату по заказу #${offer.taskId}`,
								);
							}

							processed = true;
							break;
						} catch (error) {
							this.logger.error(`Failed to finalize payment for userId ${userId}`, error as Error);
						}
					}

					if (!processed) {
						continue;
					}
				} catch (error) {
					this.logger.error(`Error checking payment for userId ${userId}:`, error);
				}
			}
		} catch (error) {
			this.logger.error('Error in checkPendingPayments cron:', error);
		}
	}
}