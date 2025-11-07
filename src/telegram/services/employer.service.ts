import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../users/services/users.service';
import { TaskService } from '../../task/services/task.service';
import { PrismaService } from '@infra/prisma/prisma.service';
import { cfg } from '@infra/config';
import { TelegramService } from '../services/telegram.service';

@Injectable()
export class EmployerService {
	constructor(
		private readonly usersService: UsersService,
		private readonly taskService: TaskService,
		private readonly prisma: PrismaService,
		private readonly telegramService: TelegramService,
	) {}

	// Показать заказы работодателя
	async showMyOrders(ctx: SceneContext, userId: number) {
		const tasks = await this.taskService.getTasksByAuthorId(userId);

		if (tasks.length === 0) {
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('➕ Разместить заказ', 'create_task')],
			]);

			await ctx.replyWithHTML(
				'<b>📋 Мои заказы</b>\n\n' +
				'У вас пока нет размещенных заказов.\n\n' +
				'Хотите разместить новый заказ?',
				keyboard,
			);
			return;
		}

		// Формируем список заказов с кнопками для просмотра откликов
		let message = '<b>📋 Мои заказы</b>\n\n';
		const buttons: any[] = [];
		
		for (const task of tasks) {
			const statusEmoji = this.getStatusEmoji(task.status);
			const budget =
				task.minBudget && task.maxBudget
				? `$${task.minBudget} - $${task.maxBudget}`
				: task.minBudget 
					? `от $${task.minBudget}`
					: task.maxBudget
						? `до $${task.maxBudget}`
						: 'Не указано';

			message += `${statusEmoji} <b>Заказ #${task.id}</b>\n`;
			message += `📌 Название: ${task.title}\n`;
			message += `📝 Описание: ${task.description.substring(0, 100)}${task.description.length > 100 ? '...' : ''}\n`;
			message += `💰 Бюджет: ${budget}\n`;
			if (task.timeEstimate) {
				message += `⏱ Срок: ${task.timeEstimate}\n`;
			}
			message += `📊 Статус: ${this.getStatusText(task.status)}\n`;
			message += `📅 Создан: ${new Date(task.createdAt).toLocaleDateString('ru-RU')}\n`;
			
			// Добавляем кнопку для просмотра откликов
			buttons.push([Markup.button.callback(`👥 Посмотреть отклики (Заказ #${task.id})`, `offers_task_${task.id}`)]);
			if (task.status === 'IN_PROGRESS' || task.status === 'SUBMITTED') {
				buttons.push([Markup.button.callback(`✅ Завершить заказ #${task.id}`, `close_task_${task.id}`)]);
			}
			message += '\n';
		}

		buttons.push([Markup.button.callback('➕ Разместить новый заказ', 'create_task')]);

		const keyboard = Markup.inlineKeyboard(buttons);

		await ctx.replyWithHTML(message, keyboard);
	}

	// Показать отклики на задание
	async showTaskOffers(ctx: SceneContext, taskId: number) {
		const task = await this.taskService.getTaskById(taskId);
		if (!task) {
			await ctx.reply('Задание не найдено.');
			return;
		}

		const offers = await this.taskService.getTaskOffersWithUsers(taskId);

		if (offers.length === 0) {
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('◀️ Назад к заказам', 'my_orders')],
			]);

			await ctx.replyWithHTML(
				`<b>👥 Отклики на задание #${taskId}</b>\n\n` +
				`<b>${task.title}</b>\n\n` +
				'Пока нет откликов на это задание.',
				keyboard,
			);
			return;
		}

		// Формируем карусель исполнителей
		const buttons: any[] = [];

		offers.forEach((offer, index) => {
			const userName = offer.user.displayName;
			const statusEmoji = offer.status === 'APPROVED' ? '✅' : offer.status === 'REJECTED' ? '❌' : '⏳';
			
			// Формируем текст кнопки
			let buttonText = `${statusEmoji} ${index + 1}. ${userName}`;
			
			// Добавляем информацию об отклике, если есть
			const offerInfo: string[] = [];
			if (offer.proposedCost) {
				offerInfo.push(`$${offer.proposedCost}`);
			}
			if (offer.proposedTime) {
				offerInfo.push(offer.proposedTime);
			}
			if (offerInfo.length > 0) {
				buttonText += ` (${offerInfo.join(', ')})`;
			}
			
			// Ограничиваем длину текста кнопки (макс 64 символа для Telegram)
			if (buttonText.length > 60) {
				buttonText = buttonText.substring(0, 57) + '...';
			}
			
			// Передаем taskId в callback для возможности показать информацию об отклике
			buttons.push([
				Markup.button.callback(
					buttonText,
					`dev_profile_${offer.user.id}_${taskId}`,
				),
			]);
		});

		// Добавляем кнопку назад
		buttons.push([Markup.button.callback('◀️ Назад к заказам', 'my_orders')]);

		const keyboard = Markup.inlineKeyboard(buttons);

		await ctx.replyWithHTML(
			`<b>👥 Отклики на задание #${taskId}</b>\n\n` +
			`<b>${task.title}</b>\n\n` +
			`Найдено откликов: <b>${offers.length}</b>\n\n` +
			'Выберите исполнителя для просмотра профиля:',
			keyboard,
		);
	}

	// Показать профиль разработчика
	async showDeveloperProfile(ctx: SceneContext, userId: number, taskId?: number) {
		// Получаем пользователя с профилем разработчика
		const user = await this.prisma.user.findUnique({
			where: { id: userId },
			include: {
				developerProfile: true,
			},
		});
		
		if (!user || !user.developerProfile) {
			await ctx.reply('Профиль разработчика не найден.');
			return;
		}

		const profile = user.developerProfile;
		const feedbacks = await this.taskService.getDeveloperFeedbacks(user.id);
		
		// Получаем информацию об отклике, если указан taskId
		let offerInfo: Awaited<ReturnType<typeof this.taskService.getTaskOffersWithUsers>>[0] | undefined = undefined;
		if (taskId) {
			const offers = await this.taskService.getTaskOffersWithUsers(taskId);
			offerInfo = offers.find(o => o.userId === userId);
		}

		// Формируем сообщение с профилем
		let message = '<b>👨‍💻 Профиль разработчика</b>\n\n';
		message += `👤 <b>Имя:</b> ${user.displayName}\n`;
		if (user.tgUsername) {
			message += `📱 <b>Username:</b> @${user.tgUsername}\n`;
		}
		if (user.email) {
			message += `📧 <b>Email:</b> ${user.email}\n`;
		}

		// Добавляем информацию об отклике, если есть
		if (offerInfo) {
			message += '\n<b>📨 Предложение по заданию:</b>\n';
			if (offerInfo.proposedCost) {
				message += `💰 <b>Предложенная стоимость:</b> $${offerInfo.proposedCost}\n`;
			}
			if (offerInfo.proposedTime) {
				message += `⏱ <b>Предложенный срок:</b> ${offerInfo.proposedTime}\n`;
			}
			if (offerInfo.plan) {
				message += `📋 <b>План работы:</b> ${offerInfo.plan}\n`;
			}
			message += `📊 <b>Статус отклика:</b> ${this.getOfferStatusText(offerInfo.status)}\n`;
		}

		message += '\n<b>📊 Профессиональная информация:</b>\n';
		if (profile.hourlyRate) {
			message += `💰 <b>Почасовая ставка:</b> $${profile.hourlyRate}\n`;
		}
		if (profile.rating !== null && profile.rating !== undefined) {
			message += `⭐ <b>Рейтинг:</b> ${profile.rating.toFixed(1)}/5.0\n`;
		}
		if (profile.skills) {
			const skills = Array.isArray(profile.skills) ? profile.skills : [];
			if (skills.length > 0) {
				message += `💻 <b>Навыки:</b> ${skills.join(', ')}\n`;
			}
		}
		if (profile.bio) {
			message += `📝 <b>О себе:</b> ${profile.bio}\n`;
		}
		if (profile.walletAddress) {
			message += `💳 <b>Кошелек:</b> ${profile.walletAddress}\n`;
		}

		// Добавляем отзывы
		if (feedbacks.length > 0) {
			message += '\n<b>📝 Отзывы:</b>\n\n';
			feedbacks.slice(0, 5).forEach((feedback, index) => {
				const stars = '⭐'.repeat(feedback.rating);
				message += `${index + 1}. ${stars} <b>${feedback.rating}/5</b>\n`;
				if (feedback.comment) {
					message += `   "${feedback.comment}"\n`;
				}
				message += `   От: ${feedback.author.displayName}\n`;
				message += `   Задание: ${feedback.task.title}\n`;
				message += `   Дата: ${new Date(feedback.createdAt).toLocaleDateString('ru-RU')}\n\n`;
			});
			if (feedbacks.length > 5) {
				message += `... и еще ${feedbacks.length - 5} отзывов\n`;
			}
		} else {
			message += '\n<b>📝 Отзывы:</b> Пока нет отзывов\n';
		}

		// Используем переданный taskId или сохраненный из сессии
		const currentTaskId = taskId || (ctx.session?.['currentTaskId'] as number | undefined);
		
		const buttons: any[] = [];
		
		// Добавляем кнопку "Выбрать исполнителя", если есть информация об отклике
		if (offerInfo && currentTaskId) {
			// Проверяем, что отклик еще не отклонен
			if (offerInfo.status !== 'REJECTED') {
				buttons.push([Markup.button.callback('✅ Выбрать исполнителя', `select_developer_${userId}_${currentTaskId}`)]);
			}
		}
		
		if (currentTaskId) {
			buttons.push([Markup.button.callback('◀️ Назад к откликам', `offers_task_${currentTaskId}`)]);
		}
		buttons.push([Markup.button.callback('◀️ Назад к заказам', 'my_orders')]);

		const keyboard = Markup.inlineKeyboard(buttons);

		await ctx.replyWithHTML(message, keyboard);
	}

	// Выбрать исполнителя для задания
	async selectDeveloper(ctx: SceneContext, userId: number, taskId: number) {
		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		const user = await this.usersService.getUserByTelegramId(telegramId);
		if (!user || user.role !== 'EMPLOYER') {
			await ctx.reply('Доступ запрещен.');
			return;
		}

		// Проверяем, что задание принадлежит работодателю
		const task = await this.taskService.getTaskById(taskId);
		if (!task || task.authorId !== user.id) {
			await ctx.reply('Задание не найдено или у вас нет доступа к нему.');
			return;
		}

		// Проверяем, что отклик существует
		const offer = await this.taskService.getUserOffer(taskId, userId);
		if (!offer) {
			await ctx.reply('Отклик не найден.');
			return;
		}

		// Проверяем, что задание еще не закрыто
		if (task.status === 'CLOSED' || task.status === 'COMPLETED') {
			await ctx.reply('Это задание уже закрыто или завершено.');
			return;
		}

		// Получаем информацию о разработчике
		const developer = await this.prisma.user.findUnique({
			where: { id: userId },
			include: {
				developerProfile: true,
			},
		});

		if (!developer || !developer.developerProfile) {
			await ctx.reply('Профиль разработчика не найден.');
			return;
		}

		// Обновляем задание: назначаем исполнителя
		await this.taskService.updateTask(taskId, {
			developer: {
				connect: { id: developer.developerProfile.id },
			},
			status: 'IN_PROGRESS',
		});

		// Обновляем статус отклика
		await this.prisma.taskOffer.update({
			where: { id: offer.id },
			data: { status: 'APPROVED' },
		});

		// Отклоняем остальные отклики
		await this.prisma.taskOffer.updateMany({
			where: {
				taskId,
				userId: { not: userId },
				status: 'PENDING',
			},
			data: { status: 'REJECTED' },
		});

		// TODO: Генерация ссылки на оплату
		const paymentAmount = offer.proposedCost ? offer.proposedCost.toString() : '0';
		const paymentLink = `${cfg.app.paymentLink}?amount=${paymentAmount}&offerId=${taskId}&userId=${userId}`;

		const message = 
			'<b>✅ Исполнитель выбран!</b>\n\n' +
			`<b>Задание:</b> ${task.title}\n` +
			`<b>Исполнитель:</b> ${developer.displayName}\n\n` +
			'Теперь вы можете перейти к оплате:\n\n' +
			`<a href="${paymentLink}">💳 Перейти к оплат : ${paymentLink}</a>\n\n` +
			'<i>Ссылка на оплату будет сгенерирована позже.</i>';

		const keyboard = Markup.inlineKeyboard([

			[Markup.button.callback('◀️ Назад к откликам', `offers_task_${taskId}`)],
			[Markup.button.callback('◀️ Назад к заказам', 'my_orders')],
		]);

		await ctx.replyWithHTML(message, keyboard);
	}

	async closeTask(ctx: SceneContext, taskId: number) {
		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		const employer = await this.usersService.getUserByTelegramId(telegramId);
		if (!employer || employer.role !== 'EMPLOYER') {
			await ctx.reply('Доступ запрещен.');
			return;
		}

		const task = await this.taskService.getTaskById(taskId);
		if (!task || task.authorId !== employer.id) {
			await ctx.reply('Задание не найдено или у вас нет доступа к нему.');
			return;
		}

		if (task.status === 'COMPLETED' || task.status === 'CLOSED') {
			await ctx.reply('Этот заказ уже закрыт.');
			return;
		}

		await this.taskService.updateTask(taskId, {
			status: 'COMPLETED',
		});

		const approvedOffer = await this.prisma.taskOffer.findFirst({
			where: {
				taskId,
				status: 'APPROVED',
			},
			include: {
				payment: true,
			},
		});

		if (approvedOffer?.userId) {
			const developer = await this.usersService.getUserById(approvedOffer.userId);
			if (developer?.telegramId) {
				await this.telegramService.sendUserMessageByTelegramId(
					Number(developer.telegramId),
					`💼 Заказ #${taskId} закрыт заказчиком. Отправьте адрес кошелька, чтобы получить оплату.`,
					{
						reply_markup: Markup.inlineKeyboard([
							Markup.button.callback('💸 Получить средства', `payout_${taskId}_${approvedOffer.id}`),
						]).reply_markup,
					},
				);
			}
		}

		await ctx.replyWithHTML(`✅ Заказ #${taskId} завершен. Спасибо за сотрудничество!`);
		await this.showMyOrders(ctx, employer.id);
		if (approvedOffer?.userId) {
			await ctx.scene.enter('employer-feedback', {
				taskId,
				developerId: approvedOffer.userId,
				employerId: employer.id,
			});
		}
		return;
	}

	// Вспомогательные методы
	private getStatusEmoji(status: string): string {
		const statusMap: Record<string, string> = {
			NEW: '🆕',
			IN_PROGRESS: '🔄',
			SUBMITTED: '📤',
			COMPLETED: '✅',
			CLOSED: '🔒',
		};
		return statusMap[status] || '❓';
	}

	private getStatusText(status: string): string {
		const statusMap: Record<string, string> = {
			NEW: 'Новый',
			IN_PROGRESS: 'В работе',
			SUBMITTED: 'На проверке',
			COMPLETED: 'Завершен',
			CLOSED: 'Закрыт',
		};
		return statusMap[status] || status;
	}

	private getOfferStatusText(status: string): string {
		const statusMap: Record<string, string> = {
			PENDING: 'Ожидает рассмотрения',
			APPROVED: 'Одобрен',
			REJECTED: 'Отклонен',
		};
		return statusMap[status] || status;
	}
}

