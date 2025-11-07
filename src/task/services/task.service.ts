import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { TaskOfferRepository } from '../repositories/task-offer.repository';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TaskService {
	constructor(
		private readonly taskRepository: TaskRepository,
		private readonly taskOfferRepository: TaskOfferRepository,
		private readonly prisma: PrismaService,
	) {}

	async createTask(task: Prisma.TaskCreateInput) {
		return this.taskRepository.create(task);
	}

	async updateTask(id: number, data: Prisma.TaskUpdateInput) {
		return this.taskRepository.update(id, data);
	}

	async getTasksByAuthorId(authorId: number) {
		return this.taskRepository.findMany({
			where: {
				authorId,
			},
		});
	}

	async getTaskById(id: number) {
		return this.taskRepository.getById(id);
	}

	async getTaskOffersByTaskId(taskId: number) {
		return this.taskOfferRepository.findMany({
			where: {
				taskId,
			},
		});
	}

	// Получить отклики с информацией о пользователях и их профилях
	async getTaskOffersWithUsers(taskId: number) {
		return this.prisma.taskOffer.findMany({
			where: {
				taskId,
			},
			include: {
				user: {
					include: {
						developerProfile: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	// Получить отзывы о разработчике
	async getDeveloperFeedbacks(userId: number) {
		return this.prisma.feedback.findMany({
			where: {
				targetId: userId,
			},
			include: {
				author: {
					select: {
						id: true,
						displayName: true,
						tgUsername: true,
					},
				},
				task: {
					select: {
						id: true,
						title: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	// Получить доступные задания для разработчиков (новые, в работе, на проверке)
	async getAvailableTasks(skip: number = 0, take: number = 10) {
		return this.prisma.task.findMany({
			where: {
				status: {
					in: ['NEW', 'IN_PROGRESS', 'SUBMITTED'],
				},
			},
			include: {
				author: {
					select: {
						id: true,
						displayName: true,
						tgUsername: true,
						employerProfile: {
							select: {
								companyName: true,
								verified: true,
							},
						},
					},
				},
				offers: {
					select: {
						id: true,
						userId: true,
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
			skip,
			take,
		});
	}

	// Получить задание с полной информацией
	async getTaskWithDetails(taskId: number) {
		return this.prisma.task.findUnique({
			where: { id: taskId },
			include: {
				author: {
					select: {
						id: true,
						displayName: true,
						tgUsername: true,
						email: true,
						employerProfile: {
							select: {
								companyName: true,
								description: true,
								website: true,
								contactEmail: true,
								verified: true,
							},
						},
					},
				},
				offers: {
					select: {
						id: true,
						userId: true,
					},
				},
			},
		});
	}

	// Создать отклик на задание
	async createOffer(taskId: number, userId: number, data: {
		proposedCost?: number | null;
		proposedTime?: string | null;
		plan?: string | null;
	}) {
		const task = await this.taskRepository.getById(taskId);
		if (!task) {
			throw new NotFoundException('Задание не найдено');
		}

		const existingOffer = await this.prisma.taskOffer.findFirst({
			where: {
				taskId,
				userId,
			},
		});

		if (task.status !== 'NEW' && !existingOffer) {
			throw new BadRequestException('На этот заказ больше нельзя откликаться');
		}

		if (existingOffer) {
			// Обновляем существующий отклик
			return this.taskOfferRepository.update(existingOffer.id, {
				proposedCost: data.proposedCost !== undefined ? data.proposedCost : undefined,
				proposedTime: data.proposedTime !== undefined ? data.proposedTime : undefined,
				plan: data.plan !== undefined ? data.plan : undefined,
				status: 'PENDING',
			});
		}

		// Создаем новый отклик
		return this.taskOfferRepository.create({
			task: {
				connect: { id: taskId },
			},
			user: {
				connect: { id: userId },
			},
			proposedCost: data.proposedCost || undefined,
			proposedTime: data.proposedTime || undefined,
			plan: data.plan || undefined,
			status: 'PENDING',
		});
	}

	// Получить отклик пользователя на задание
	async getUserOffer(taskId: number, userId: number) {
		return this.prisma.taskOffer.findFirst({
			where: {
				taskId,
				userId,
			},
			include: {
				payment: true,
			},
		});
	}

	// Получить все отклики разработчика с информацией о заданиях
	async getDeveloperOffers(userId: number) {
		return this.prisma.taskOffer.findMany({
			where: {
				userId,
			},
			include: {
				task: {
					include: {
						author: {
							select: {
								id: true,
								displayName: true,
								tgUsername: true,
								employerProfile: {
									select: {
										companyName: true,
										verified: true,
									},
								},
							},
						},
					},
				},
			},
			orderBy: {
				createdAt: 'desc',
			},
		});
	}

	async updatePaymentId(offerId: number, paymentId: number) {
		return this.prisma.taskOffer.update({
			where: { id: offerId },
			data: {
				payment: { connect: { id: paymentId } },
				status: 'APPROVED',
			},
		});
	}

	async getDeveloperProfileByUserId(userId: number) {
		return this.prisma.developerProfile.findUnique({
			where: { userId },
		});
	}

	async rejectPendingOffers(taskId: number, excludeOfferId: number) {
		await this.prisma.taskOffer.updateMany({
			where: {
				taskId,
				id: { not: excludeOfferId },
				status: 'PENDING',
			},
			data: {
				status: 'REJECTED',
			},
		});
	}
}
