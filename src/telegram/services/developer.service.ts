import { Injectable } from '@nestjs/common';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../users/services/users.service';
import { TaskService } from '../../task/services/task.service';
import { PrismaService } from '@infra/prisma/prisma.service';

@Injectable()
export class DeveloperService {
	constructor(
		private readonly usersService: UsersService,
		private readonly taskService: TaskService,
		private readonly prisma: PrismaService,
	) {}

	// Показать доступные задания
	async showAvailableTasks(ctx: SceneContext, userId: number, page: number = 0) {
		const tasksPerPage = 5;
		const tasks = await this.taskService.getAvailableTasks(page * tasksPerPage, tasksPerPage);

		if (tasks.length === 0) {
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('🔄 Обновить', 'refresh_tasks')],
			]);

			await ctx.replyWithHTML(
				'<b>📋 Доступные задания</b>\n\n' +
				'Пока нет доступных заданий.',
				keyboard,
			);
			return;
		}

		// Формируем список заданий
		let message = '<b>📋 Доступные задания</b>\n\n';
		const buttons: any[] = [];

		for (const task of tasks) {
			const statusEmoji = this.getStatusEmoji(task.status);
			const budget = task.minBudget && task.maxBudget 
				? `$${task.minBudget} - $${task.maxBudget}`
				: task.minBudget 
					? `от $${task.minBudget}`
					: task.maxBudget
						? `до $${task.maxBudget}`
						: 'Не указано';

			// Проверяем, откликнулся ли уже пользователь
			const hasOffer = task.offers.some(o => o.userId === userId);
			const offerEmoji = hasOffer ? '✅' : '';

			message += `${statusEmoji} ${offerEmoji} <b>Задание #${task.id}</b>\n`;
			message += `📌 <b>${task.title}</b>\n`;
			message += `📝 ${task.description.substring(0, 100)}${task.description.length > 100 ? '...' : ''}\n`;
			message += `💰 Бюджет: ${budget}\n`;
			if (task.timeEstimate) {
				message += `⏱ Срок: ${task.timeEstimate}\n`;
			}
			const authorName = task.author.employerProfile?.companyName || task.author.displayName;
			message += `👤 Заказчик: ${authorName}${task.author.employerProfile?.verified ? ' ✅' : ''}\n`;
			message += `📅 Создано: ${new Date(task.createdAt).toLocaleDateString('ru-RU')}\n`;
			message += `📊 Откликов: ${task.offers.length}\n\n`;

			// Добавляем кнопку для просмотра деталей
			const buttonText = hasOffer 
				? `✅ Задание #${task.id} (откликнулся)`
				: `📋 Задание #${task.id}`;
			
			buttons.push([Markup.button.callback(buttonText, `task_details_${task.id}`)]);
		}

		// Добавляем навигацию
		const navButtons: any[] = [];
		if (page > 0) {
			navButtons.push(Markup.button.callback('◀️ Назад', `tasks_page_${page - 1}`));
		}
		navButtons.push(Markup.button.callback('🔄 Обновить', 'refresh_tasks'));
		if (tasks.length === tasksPerPage) {
			navButtons.push(Markup.button.callback('Вперед ▶️', `tasks_page_${page + 1}`));
		}
		buttons.push(navButtons);

		const keyboard = Markup.inlineKeyboard(buttons);

		await ctx.replyWithHTML(message, keyboard);
	}

	// Показать детали задания
	async showTaskDetails(ctx: SceneContext, taskId: number) {
		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		const user = await this.usersService.getUserByTelegramId(telegramId);
		if (!user || user.role !== 'DEVELOPER') {
			await ctx.reply('Доступ запрещен.');
			return;
		}

		const task = await this.taskService.getTaskWithDetails(taskId);
		if (!task) {
			await ctx.reply('Задание не найдено.');
			return;
		}

		// Проверяем, откликнулся ли уже пользователь
		const hasOffer = task.offers.some(o => o.userId === user.id);
		const existingOffer = hasOffer 
			? await this.prisma.taskOffer.findFirst({
					where: {
						taskId: task.id,
						userId: user.id,
					},
				})
			: null;

		// Формируем сообщение
		let message = '<b>📋 Детали задания</b>\n\n';
		message += `<b>ID:</b> #${task.id}\n`;
		message += `<b>Название:</b> ${task.title}\n\n`;
		message += `<b>Описание:</b>\n${task.description}\n\n`;
		
		// Бюджет
		const budget = task.minBudget && task.maxBudget 
			? `$${task.minBudget} - $${task.maxBudget}`
			: task.minBudget 
				? `от $${task.minBudget}`
				: task.maxBudget
					? `до $${task.maxBudget}`
					: 'Не указан';
		message += `💰 <b>Бюджет:</b> ${budget}\n`;
		
		if (task.timeEstimate) {
			message += `⏱ <b>Срок выполнения:</b> ${task.timeEstimate}\n`;
		}
		message += `📊 <b>Статус:</b> ${this.getStatusText(task.status)}\n`;
		message += `📅 <b>Создано:</b> ${new Date(task.createdAt).toLocaleDateString('ru-RU')}\n`;
		message += `👥 <b>Откликов:</b> ${task.offers.length}\n\n`;

		// Информация о заказчике
		message += '<b>👤 Информация о заказчике:</b>\n';
		const authorName = task.author.employerProfile?.companyName || task.author.displayName;
		message += `Имя: ${authorName}${task.author.employerProfile?.verified ? ' ✅' : ''}\n`;
		if (task.author.tgUsername) {
			message += `Telegram: @${task.author.tgUsername}\n`;
		}
		if (task.author.employerProfile?.companyName) {
			message += `Компания: ${task.author.employerProfile.companyName}\n`;
		}
		if (task.author.employerProfile?.description) {
			message += `О компании: ${task.author.employerProfile.description.substring(0, 200)}${task.author.employerProfile.description.length > 200 ? '...' : ''}\n`;
		}
		if (task.author.employerProfile?.website) {
			message += `Сайт: ${task.author.employerProfile.website}\n`;
		}

		// Информация об отклике
		if (hasOffer && existingOffer) {
			message += '\n<b>✅ Ваш отклик:</b>\n';
			if (existingOffer.proposedCost) {
				message += `💰 Предложенная стоимость: $${existingOffer.proposedCost}\n`;
			}
			if (existingOffer.proposedTime) {
				message += `⏱ Предложенный срок: ${existingOffer.proposedTime}\n`;
			}
			if (existingOffer.plan) {
				message += `📋 План работы: ${existingOffer.plan}\n`;
			}
			message += `📊 Статус: ${this.getOfferStatusText(existingOffer.status)}\n`;
		}

		// Формируем кнопки
		const buttons: any[] = [];
		if (!hasOffer) {
			buttons.push([Markup.button.callback('💬 Откликнуться на задание', `offer_task_${task.id}`)]);
		} else {
			buttons.push([Markup.button.callback('📝 Редактировать отклик', `edit_offer_${task.id}`)]);
		}
		buttons.push([Markup.button.callback('◀️ Назад к заданиям', 'tasks')]);

		const keyboard = Markup.inlineKeyboard(buttons);

		await ctx.replyWithHTML(message, keyboard);
	}

	// Показать мои отклики
	async showMyOffers(ctx: SceneContext, userId: number) {
		const offers = await this.taskService.getDeveloperOffers(userId);

		if (offers.length === 0) {
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('📋 Доступные задания', 'tasks')],
			]);

			await ctx.replyWithHTML(
				'<b>💬 Мои отклики</b>\n\n' +
				'У вас пока нет откликов на задания.',
				keyboard,
			);
			return;
		}

		// Формируем список откликов
		let message = '<b>💬 Мои отклики</b>\n\n';
		const buttons: any[] = [];

		for (const offer of offers) {
			const task = offer.task;
			const statusEmoji = this.getOfferStatusEmoji(offer.status);
			const budget = task.minBudget && task.maxBudget 
				? `$${task.minBudget} - $${task.maxBudget}`
				: task.minBudget 
					? `от $${task.minBudget}`
					: task.maxBudget
						? `до $${task.maxBudget}`
						: 'Не указано';

			message += `${statusEmoji} <b>Отклик #${offer.id}</b>\n`;
			message += `📋 <b>Задание:</b> ${task.title}\n`;
			message += `📝 ${task.description.substring(0, 80)}${task.description.length > 80 ? '...' : ''}\n`;
			message += `💰 Бюджет задания: ${budget}\n`;
			
			if (offer.proposedCost) {
				message += `💰 Моя цена: $${offer.proposedCost}\n`;
			}
			if (offer.proposedTime) {
				message += `⏱ Мой срок: ${offer.proposedTime}\n`;
			}
			message += `📊 Статус: ${this.getOfferStatusText(offer.status)}\n`;
			
			const authorName = task.author.employerProfile?.companyName || task.author.displayName;
			message += `👤 Заказчик: ${authorName}${task.author.employerProfile?.verified ? ' ✅' : ''}\n`;
			message += `📅 Создан: ${new Date(offer.createdAt).toLocaleDateString('ru-RU')}\n\n`;

			// Добавляем кнопку для просмотра деталей задания
			buttons.push([Markup.button.callback(`📋 Задание #${task.id}`, `task_details_${task.id}`)]);
		}

		// Добавляем навигацию
		buttons.push([
			Markup.button.callback('📋 Доступные задания', 'tasks'),
		]);

		const keyboard = Markup.inlineKeyboard(buttons);

		await ctx.replyWithHTML(message, keyboard);
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

	private getOfferStatusEmoji(status: string): string {
		const statusMap: Record<string, string> = {
			PENDING: '⏳',
			APPROVED: '✅',
			REJECTED: '❌',
		};
		return statusMap[status] || '❓';
	}
}

