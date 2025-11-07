import { Injectable } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On, Command } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../../../users/services/users.service';
import { TaskService } from '../../../../task/services/task.service';

// Определяем интерфейс сессии для сцены создания задачи
interface CreateTaskSceneSession {
	step: 'title' | 'description' | 'min_budget' | 'max_budget' | 'time_estimate' | 'confirm';
	title?: string;
	description?: string;
	minBudget?: number;
	maxBudget?: number;
	timeEstimate?: string;
}

@Injectable()
@Scene('create-task')
export class CreateTaskScene {
	constructor(
		private readonly usersService: UsersService,
		private readonly taskService: TaskService,
	) {}

	// Обработчик входа в сцену
	@SceneEnter()
	async onSceneEnter(@Ctx() ctx: SceneContext) {
		// Проверяем, что пользователь зарегистрирован и является работодателем
		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			await ctx.scene.leave();
			return;
		}

		const user = await this.usersService.getUserByTelegramId(telegramId);
		if (!user) {
			await ctx.reply('Вы не зарегистрированы. Используйте /register для регистрации.');
			await ctx.scene.leave();
			return;
		}

		if (user.role !== 'EMPLOYER') {
			await ctx.reply('Эта функция доступна только для работодателей.');
			await ctx.scene.leave();
			return;
		}

		// Инициализация сессии
		if (!ctx.session) {
			ctx.session = {};
		}

		if (!ctx.session['create-task']) {
			ctx.session['create-task'] = {} as CreateTaskSceneSession;
		}

		const session = ctx.session['create-task'] as CreateTaskSceneSession;
		session.step = 'title';

		const keyboard = Markup.keyboard([['❌ Отмена']])
			.resize()
			.oneTime();

		await ctx.replyWithHTML(
			'<b>➕ Создание нового задания</b>\n\n' +
			'Давайте создадим новое задание.\n' +
			'Введите название задания:',
			keyboard,
		);
	}

	// Обработчик текстовых сообщений
	@On('text')
	async onText(@Ctx() ctx: SceneContext) {
		const session = ctx.session['create-task'] as CreateTaskSceneSession;
		const text = (ctx.message as any).text;

		// Проверка на отмену
		if (text === '❌ Отмена' || text === '/cancel') {
			await ctx.reply('Создание задания отменено', Markup.removeKeyboard());
			await ctx.scene.leave();
			return;
		}

		switch (session.step) {
			case 'title':
				if (text.length < 3) {
					await ctx.reply('Название должно содержать минимум 3 символа. Попробуйте еще раз:');
					return;
				}
				session.title = text;
				session.step = 'description';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Теперь введите описание задания:',
				);
				break;

			case 'description':
				if (text.length < 10) {
					await ctx.reply('Описание должно содержать минимум 10 символов. Попробуйте еще раз:');
					return;
				}
				session.description = text;
				session.step = 'min_budget';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Введите минимальный бюджет (в долларах) или нажмите "Пропустить":\n' +
					'Например: <i>100</i> или <i>50.5</i>',
					Markup.keyboard([['⏭ Пропустить']]).resize().oneTime(),
				);
				break;

			case 'min_budget':
				if (text === '⏭ Пропустить' || text === '/skip') {
					session.minBudget = undefined;
					session.step = 'max_budget';
					await ctx.replyWithHTML(
						'<b>Отлично!</b> ✅\n\n' +
						'Введите максимальный бюджет (в долларах) или нажмите "Пропустить":\n' +
						'Например: <i>200</i> или <i>150.5</i>',
						Markup.keyboard([['⏭ Пропустить']]).resize().oneTime(),
					);
				} else {
					const minBudget = parseFloat(text.replace(',', '.'));
					if (isNaN(minBudget) || minBudget <= 0) {
						await ctx.reply('Некорректная сумма. Введите положительное число или нажмите "Пропустить":');
						return;
					}
					session.minBudget = minBudget;
					session.step = 'max_budget';
					await ctx.replyWithHTML(
						'<b>Отлично!</b> ✅\n\n' +
						'Введите максимальный бюджет (в долларах) или нажмите "Пропустить":\n' +
						'Например: <i>200</i> или <i>150.5</i>',
						Markup.keyboard([['⏭ Пропустить']]).resize().oneTime(),
					);
				}
				break;

			case 'max_budget':
				if (text === '⏭ Пропустить' || text === '/skip') {
					session.maxBudget = undefined;
				} else {
					const maxBudget = parseFloat(text.replace(',', '.'));
					if (isNaN(maxBudget) || maxBudget <= 0) {
						await ctx.reply('Некорректная сумма. Введите положительное число или нажмите "Пропустить":');
						return;
					}
					// Проверка, что максимальный бюджет больше минимального
					if (session.minBudget && maxBudget < session.minBudget) {
						await ctx.reply(`Максимальный бюджет должен быть больше или равен минимальному ($${session.minBudget}). Попробуйте еще раз:`);
						return;
					}
					session.maxBudget = maxBudget;
				}
				session.step = 'time_estimate';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Введите срок выполнения или нажмите "Пропустить":\n' +
					'Например: <i>1 неделя</i>, <i>2 месяца</i>, <i>до 30 дней</i>',
					Markup.keyboard([['⏭ Пропустить']]).resize().oneTime(),
				);
				break;

			case 'time_estimate':
				if (text === '⏭ Пропустить' || text === '/skip') {
					session.timeEstimate = undefined;
				} else {
					session.timeEstimate = text.trim();
				}
				session.step = 'confirm';
				await this.showConfirmMessage(ctx, session);
				break;
		}
	}

	// Метод для отображения подтверждения данных
	private async showConfirmMessage(ctx: SceneContext, session: CreateTaskSceneSession) {
		let message = '<b>Проверьте данные задания:</b>\n\n' +
			`📌 <b>Название:</b> ${session.title}\n` +
			`📝 <b>Описание:</b> ${session.description}\n`;

		if (session.minBudget && session.maxBudget) {
			message += `💰 <b>Бюджет:</b> $${session.minBudget} - $${session.maxBudget}\n`;
		} else if (session.minBudget) {
			message += `💰 <b>Бюджет:</b> от $${session.minBudget}\n`;
		} else if (session.maxBudget) {
			message += `💰 <b>Бюджет:</b> до $${session.maxBudget}\n`;
		} else {
			message += `💰 <b>Бюджет:</b> Не указан\n`;
		}

		if (session.timeEstimate) {
			message += `⏱ <b>Срок выполнения:</b> ${session.timeEstimate}\n`;
		} else {
			message += `⏱ <b>Срок выполнения:</b> Не указан\n`;
		}

		message += '\nВсе верно?';

		const keyboard = Markup.inlineKeyboard([
			[Markup.button.callback('✅ Подтвердить', 'confirm')],
			[Markup.button.callback('❌ Отменить', 'cancel')],
		]);

		await ctx.replyWithHTML(message, keyboard);
	}

	// Обработчик callback_query
	@On('callback_query')
	async onCallbackQuery(@Ctx() ctx: SceneContext) {
		const callbackData = (ctx.callbackQuery as any).data;
		const session = ctx.session['create-task'] as CreateTaskSceneSession;

		await ctx.answerCbQuery();

		if (callbackData === 'confirm') {
			try {
				const telegramId = ctx.from?.id;
				if (!telegramId) {
					await ctx.reply('Ошибка: не удалось получить ID пользователя.');
					await ctx.scene.leave();
					return;
				}

				const user = await this.usersService.getUserByTelegramId(telegramId);
				if (!user || user.role !== 'EMPLOYER') {
					await ctx.reply('Ошибка: доступ запрещен.');
					await ctx.scene.leave();
					return;
				}

				if (!session.title || !session.description) {
					await ctx.reply('Ошибка: не все обязательные поля заполнены. Попробуйте начать заново.');
					await ctx.scene.leave();
					return;
				}

				// Создаем задание в базе данных
				const taskData: any = {
					title: session.title,
					description: session.description,
					timeEstimate: session.timeEstimate || undefined,
					status: 'NEW',
					author: {
						connect: {
							id: user.id,
						},
					},
				};

				// Добавляем бюджет, если указан
				if (session.minBudget !== undefined) {
					taskData.minBudget = session.minBudget;
				}
				if (session.maxBudget !== undefined) {
					taskData.maxBudget = session.maxBudget;
				}

				const task = await this.taskService.createTask(taskData);

				await ctx.replyWithHTML(
					'<b>🎉 Задание успешно создано!</b>\n\n' +
					`<b>ID задания:</b> #${task.id}\n` +
					`<b>Название:</b> ${task.title}\n\n` +
					'Ваше задание опубликовано и доступно для просмотра разработчикам.',
					Markup.removeKeyboard(),
				);
			} catch (error) {
				console.error('Ошибка при создании задания:', error);
				await ctx.replyWithHTML(
					'<b>❌ Произошла ошибка при создании задания</b>\n\n' +
					'Пожалуйста, попробуйте позже или обратитесь в поддержку.',
					Markup.removeKeyboard(),
				);
			}

			// Очищаем сессию
			delete ctx.session['create-task'];

			await ctx.scene.leave();
		} else if (callbackData === 'cancel') {
			await ctx.reply(
				'Создание задания отменено',
				Markup.removeKeyboard(),
			);
			delete ctx.session['create-task'];
			await ctx.scene.leave();
		}
	}

	// Выход из сцены по команде
	@Command('cancel')
	async onCancel(@Ctx() ctx: SceneContext) {
		await ctx.reply('Создание задания отменено', Markup.removeKeyboard());
		delete ctx.session['create-task'];
		await ctx.scene.leave();
	}
}

