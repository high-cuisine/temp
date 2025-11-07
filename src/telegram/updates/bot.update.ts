import { Injectable } from '@nestjs/common';
import { Ctx, Update, Start, Help, Command, On } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../users/services/users.service';
import { DeveloperService } from '../services/developer.service';
import { EmployerService } from '../services/employer.service';

@Update()
@Injectable()
export class BotUpdate {
	constructor(
		private readonly usersService: UsersService,
		private readonly developerService: DeveloperService,
		private readonly employerService: EmployerService,
	) {}
	@Start()
	async onStart(@Ctx() ctx: SceneContext) {
		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		const user = await this.usersService.getUserByTelegramId(telegramId);
		
		if (!user) {
			// Пользователь не зарегистрирован
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('📝 Регистрация', 'register')],
				[Markup.button.callback('ℹ️ Помощь', 'help')],
			]);

			await ctx.replyWithHTML(
				'<b>Добро пожаловать в бот!</b>\n\nВыберите действие:',
				keyboard,
			);
		} else if (user.role === 'EMPLOYER') {
			// Пользователь - работодатель
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('📋 Мои заказы', 'my_orders')],
				[Markup.button.callback('➕ Разместить заказ', 'create_task')],
				[Markup.button.callback('ℹ️ Помощь', 'help')],
			]);

			await ctx.replyWithHTML(
				`<b>Добро пожаловать, ${user.displayName}!</b>\n\n` +
				'Выберите действие:',
				keyboard,
			);
		} else if (user.role === 'DEVELOPER') {
			// Пользователь - разработчик
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('📋 Доступные задания', 'tasks')],
				[Markup.button.callback('💬 Мои отклики', 'my_offers')],
				[Markup.button.callback('ℹ️ Помощь', 'help')],
			]);

			await ctx.replyWithHTML(
				`<b>Добро пожаловать, ${user.displayName}!</b>\n\n` +
				'Выберите действие:',
				keyboard,
			);
		} else {
			// Пользователь - другой
			const keyboard = Markup.inlineKeyboard([
				[Markup.button.callback('ℹ️ Помощь', 'help')],
			]);

			await ctx.replyWithHTML(
				`<b>Добро пожаловать, ${user.displayName}!</b>\n\n` +
				'Выберите действие:',
				keyboard,
			);
		}
	}

	@Help()
	async onHelp(@Ctx() ctx: SceneContext) {
		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		const user = await this.usersService.getUserByTelegramId(telegramId);
		
		let message = '<b>Список доступных команд:</b>\n\n' +
			'/start - Начать работу с ботом\n' +
			'/help - Показать это сообщение\n';

		if (!user) {
			message += '/register - Начать регистрацию';
		} else if (user.role === 'EMPLOYER') {
			message += '/my_orders - Посмотреть мои заказы\n' +
				'/create_order - Разместить новый заказ';
		} else if (user.role === 'DEVELOPER') {
			message += '/tasks - Посмотреть доступные задания\n' +
				'/my_offers - Посмотреть мои отклики';
		}

		await ctx.replyWithHTML(message);
	}

	@Command('register')
	async onRegisterCommand(@Ctx() ctx: SceneContext) {
		const user = await this.usersService.getUserByTelegramId(Number(ctx.from?.id));
		if (user) {
			await ctx.reply('Вы уже зарегистрированы');
			return;
		}
		return ctx.scene.enter('register');
	}

	// Обработка всех callback
	@On('callback_query')
	async onCallbackQuery(@Ctx() ctx: SceneContext) {
		const callbackData = (ctx.callbackQuery as any).data;

		// Проверяем, если пользователь уже в сцене, не обрабатываем здесь
		if ((ctx.scene as any)?.current) {
			return;
		}

		const telegramId = ctx.from?.id;
		if (!telegramId) {
			return;
		}

		// Обработка callback для разработчиков
		if (callbackData === 'tasks' || callbackData === 'refresh_tasks') {
			await ctx.answerCbQuery();
			const user = await this.usersService.getUserByTelegramId(telegramId);
			if (user && user.role === 'DEVELOPER') {
				return this.developerService.showAvailableTasks(ctx, user.id, 0);
			}
			return;
		}

		if (callbackData === 'my_offers') {
			await ctx.answerCbQuery();
			const user = await this.usersService.getUserByTelegramId(telegramId);
			if (user && user.role === 'DEVELOPER') {
				return this.developerService.showMyOffers(ctx, user.id);
			}
			return;
		}

		if (callbackData.startsWith('tasks_page_')) {
			await ctx.answerCbQuery();
			const page = parseInt(callbackData.replace('tasks_page_', ''));
			if (!isNaN(page)) {
				const user = await this.usersService.getUserByTelegramId(telegramId);
				if (user && user.role === 'DEVELOPER') {
					return this.developerService.showAvailableTasks(ctx, user.id, page);
				}
			}
			return;
		}

		if (callbackData.startsWith('task_details_')) {
			await ctx.answerCbQuery();
			const taskId = parseInt(callbackData.replace('task_details_', ''));
			if (!isNaN(taskId)) {
				return this.developerService.showTaskDetails(ctx, taskId);
			}
			return;
		}

		if (callbackData.startsWith('offer_task_')) {
			await ctx.answerCbQuery();
			const taskId = parseInt(callbackData.replace('offer_task_', ''));
			if (!isNaN(taskId)) {
				return ctx.scene.enter('create-offer', { taskId });
			}
			return;
		}

		if (callbackData.startsWith('edit_offer_')) {
			await ctx.answerCbQuery();
			const taskId = parseInt(callbackData.replace('edit_offer_', ''));
			if (!isNaN(taskId)) {
				return ctx.scene.enter('create-offer', { taskId });
			}
			return;
		}

		// Обработка callback для работодателей
		if (callbackData === 'my_orders') {
			await ctx.answerCbQuery();
			const user = await this.usersService.getUserByTelegramId(telegramId);
			if (user && user.role === 'EMPLOYER') {
				return this.employerService.showMyOrders(ctx, user.id);
			}
			return;
		}

		if (callbackData.startsWith('close_task_')) {
			await ctx.answerCbQuery();
			const taskId = parseInt(callbackData.replace('close_task_', ''));
			if (!isNaN(taskId)) {
				return this.employerService.closeTask(ctx, taskId);
			}
			return;
		}

		if (callbackData.startsWith('payout_')) {
			await ctx.answerCbQuery();
			const [taskIdStr, offerIdStr] = callbackData.replace('payout_', '').split('_');
			const taskId = parseInt(taskIdStr);
			const offerId = parseInt(offerIdStr);
			const user = await this.usersService.getUserByTelegramId(telegramId);
			if (user && user.role === 'DEVELOPER' && !isNaN(taskId)) {
				return ctx.scene.enter('developer-payout', { taskId, offerId });
			}
			return;
		}

		if (callbackData === 'create_task') {
			await ctx.answerCbQuery();
			const user = await this.usersService.getUserByTelegramId(telegramId);
			if (user && user.role === 'EMPLOYER') {
				return ctx.scene.enter('create-task');
			}
			return;
		}

		if (callbackData.startsWith('offers_task_')) {
			await ctx.answerCbQuery();
			const taskId = parseInt(callbackData.replace('offers_task_', ''));
			if (!isNaN(taskId)) {
				// Сохраняем taskId в сессии для навигации назад
				if (!ctx.session) {
					ctx.session = {};
				}
				ctx.session['currentTaskId'] = taskId;
				return this.employerService.showTaskOffers(ctx, taskId);
			}
			return;
		}

		if (callbackData.startsWith('dev_profile_')) {
			await ctx.answerCbQuery();
			const parts = callbackData.replace('dev_profile_', '').split('_');
			const userId = parseInt(parts[0]);
			const taskId = parts[1] ? parseInt(parts[1]) : ctx.session?.['currentTaskId'] as number | undefined;
			
			if (!isNaN(userId)) {
				return this.employerService.showDeveloperProfile(ctx, userId, taskId);
			}
			return;
		}

		if (callbackData.startsWith('select_developer_')) {
			await ctx.answerCbQuery();
			const parts = callbackData.replace('select_developer_', '').split('_');
			const userId = parseInt(parts[0]);
			const taskId = parts[1] ? parseInt(parts[1]) : undefined;
			
			if (!isNaN(userId) && taskId) {
				return this.employerService.selectDeveloper(ctx, userId, taskId);
			}
			return;
		}

		// Обработка общих callback
		switch (callbackData) {
			case 'register':
				await ctx.answerCbQuery();
				return ctx.scene.enter('register');
			case 'help':
				await ctx.answerCbQuery();
				return this.onHelp(ctx);
			default:
				// Неизвестный callback - не отвечаем
				return;
		}
	}

	// Обработка обычных сообщений (только текстовые, не команды)
	@On('text')
	async onText(@Ctx() ctx: SceneContext) {
		// Если пользователь находится в сцене, не обрабатываем здесь
		if ((ctx.scene as any)?.current) {
			return;
		}

		// Проверяем, не является ли это командой
		const text = (ctx.message as any)?.text;
		if (text && text.startsWith('/')) {
			// Это команда, пропускаем её - команды обрабатываются через @Command декораторы
			return;
		}

		await ctx.reply(
			'Используйте /start для начала работы или /help для получения помощи',
		);
	}
}

