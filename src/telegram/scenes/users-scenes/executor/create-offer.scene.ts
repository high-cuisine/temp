import { Injectable } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On, Command } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../../../users/services/users.service';
import { TaskService } from '../../../../task/services/task.service';

// Определяем интерфейс сессии для сцены создания отклика
interface CreateOfferSceneSession {
	step: 'proposed_cost' | 'proposed_time' | 'plan' | 'confirm';
	taskId?: number;
	proposedCost?: number;
	proposedTime?: string;
	plan?: string;
}

@Injectable()
@Scene('create-offer')
export class CreateOfferScene {
	constructor(
		private readonly usersService: UsersService,
		private readonly taskService: TaskService,
	) {}

	// Обработчик входа в сцену
	@SceneEnter()
	async onSceneEnter(@Ctx() ctx: SceneContext) {
		
		const taskId = (ctx.scene as any).state?.taskId || (ctx.scene as any).session?.taskId;
		
		if (!taskId) {
			await ctx.reply('Ошибка: не указан ID задания.');
			await ctx.scene.leave();
			return;
		}

		// Проверяем, что пользователь зарегистрирован и является разработчиком
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

		if (user.role !== 'DEVELOPER') {
			await ctx.reply('Эта функция доступна только для разработчиков.');
			await ctx.scene.leave();
			return;
		}

		// Проверяем, существует ли задание
		const task = await this.taskService.getTaskById(taskId);
		if (!task) {
			await ctx.reply('Задание не найдено.');
			await ctx.scene.leave();
			return;
		}

		// Инициализация сессии
		if (!ctx.session) {
			ctx.session = {};
		}

		if (!ctx.session['create-offer']) {
			ctx.session['create-offer'] = {} as CreateOfferSceneSession;
		}

		const session = ctx.session['create-offer'] as CreateOfferSceneSession;
		session.taskId = taskId;
		session.step = 'proposed_cost';
		
		// Сохраняем taskId в state сцены для доступа
		if (!(ctx.scene as any).state) {
			(ctx.scene as any).state = {};
		}
		(ctx.scene as any).state.taskId = taskId;

		// Проверяем, есть ли уже отклик
		const existingOffer = await this.taskService.getUserOffer(taskId, user.id);
		if (existingOffer) {
			// Заполняем существующие данные
			session.proposedCost = existingOffer.proposedCost ? Number(existingOffer.proposedCost) : undefined;
			session.proposedTime = existingOffer.proposedTime || undefined;
			session.plan = existingOffer.plan || undefined;
			
			await ctx.replyWithHTML(
				'<b>📝 Редактирование отклика</b>\n\n' +
				'Вы уже отправляли отклик на это задание. Вы можете обновить его данные.\n\n' +
				'<b>Текущие данные:</b>\n' +
				`💰 Предложенная стоимость: ${existingOffer.proposedCost ? `$${existingOffer.proposedCost}` : 'Не указана'}\n` +
				`⏱ Предложенный срок: ${existingOffer.proposedTime || 'Не указан'}\n` +
				`📋 План работы: ${existingOffer.plan || 'Не указан'}\n\n` +
				'Начнем с предложенной стоимости. Введите сумму в долларах (можно пропустить, отправив "пропустить"):',
			);
		} else {
			const keyboard = Markup.keyboard([['❌ Отмена']])
				.resize()
				.oneTime();

			await ctx.replyWithHTML(
				'<b>💬 Создание отклика на задание</b>\n\n' +
				`<b>Задание:</b> ${task.title}\n\n` +
				'Давайте заполним информацию об отклике.\n' +
				'Вы можете пропустить любой пункт, отправив "пропустить".\n\n' +
				'Введите предложенную стоимость (в долларах, например: 500 или 500.50):',
				keyboard,
			);
		}
	}

	// Обработчик текстовых сообщений
	@On('text')
	async onText(@Ctx() ctx: SceneContext) {
		const session = ctx.session['create-offer'] as CreateOfferSceneSession;
		const text = (ctx.message as any).text;

		// Проверка на отмену
		if (text === '❌ Отмена' || text === '/cancel') {
			await ctx.reply('Создание отклика отменено', Markup.removeKeyboard());
			await ctx.scene.leave();
			return;
		}

		switch (session.step) {
			case 'proposed_cost':
				if (text.toLowerCase() === 'пропустить' || text.toLowerCase() === 'skip') {
					session.proposedCost = undefined;
				} else {
					const cost = parseFloat(text.replace(/[^0-9.]/g, ''));
					if (isNaN(cost) || cost < 0) {
						await ctx.reply('Пожалуйста, введите корректную сумму (например: 500 или 500.50). Или отправьте "пропустить":');
						return;
					}
					session.proposedCost = cost;
				}
				session.step = 'proposed_time';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Теперь введите предложенный срок выполнения (например: "2 недели", "1 месяц"). Или отправьте "пропустить":',
				);
				break;

			case 'proposed_time':
				if (text.toLowerCase() === 'пропустить' || text.toLowerCase() === 'skip') {
					session.proposedTime = undefined;
				} else {
					if (text.length < 2) {
						await ctx.reply('Срок должен содержать минимум 2 символа. Попробуйте еще раз или отправьте "пропустить":');
						return;
					}
					session.proposedTime = text;
				}
				session.step = 'plan';
				await ctx.replyWithHTML(
					'<b>Отлично!</b> ✅\n\n' +
					'Теперь опишите ваш план работы (как вы планируете выполнить задание). Или отправьте "пропустить":',
				);
				break;

			case 'plan':
				if (text.toLowerCase() === 'пропустить' || text.toLowerCase() === 'skip') {
					session.plan = undefined;
				} else {
					if (text.length < 10) {
						await ctx.reply('План работы должен содержать минимум 10 символов. Попробуйте еще раз или отправьте "пропустить":');
						return;
					}
					session.plan = text;
				}
				session.step = 'confirm';
				await this.showConfirmMessage(ctx, session);
				break;

			case 'confirm':
				if (text.toLowerCase() === 'да' || text.toLowerCase() === 'yes' || text === '✅ Подтвердить') {
					await this.createOffer(ctx, session);
				} else if (text.toLowerCase() === 'нет' || text.toLowerCase() === 'no' || text === '❌ Отмена') {
					await ctx.reply('Создание отклика отменено', Markup.removeKeyboard());
					await ctx.scene.leave();
				} else {
					await ctx.reply('Пожалуйста, выберите: "✅ Подтвердить" или "❌ Отмена"');
				}
				break;
		}
	}

	// Показать сообщение подтверждения
	private async showConfirmMessage(ctx: SceneContext, session: CreateOfferSceneSession) {
		const task = await this.taskService.getTaskById(session.taskId!);
		
		let message = '<b>📋 Подтверждение отклика</b>\n\n';
		message += `<b>Задание:</b> ${task?.title || 'Неизвестно'}\n\n`;
		message += '<b>Ваши данные:</b>\n';
		
		if (session.proposedCost !== undefined) {
			message += `💰 <b>Предложенная стоимость:</b> $${session.proposedCost}\n`;
		} else {
			message += `💰 <b>Предложенная стоимость:</b> Не указана\n`;
		}
		
		if (session.proposedTime) {
			message += `⏱ <b>Предложенный срок:</b> ${session.proposedTime}\n`;
		} else {
			message += `⏱ <b>Предложенный срок:</b> Не указан\n`;
		}
		
		if (session.plan) {
			message += `📋 <b>План работы:</b> ${session.plan}\n`;
		} else {
			message += `📋 <b>План работы:</b> Не указан\n`;
		}

		message += '\nВсё верно?';

		const keyboard = Markup.keyboard([
			['✅ Подтвердить'],
			['❌ Отмена'],
		])
			.resize()
			.oneTime();

		await ctx.replyWithHTML(message, keyboard);
	}

	// Создать отклик
	private async createOffer(ctx: SceneContext, session: CreateOfferSceneSession) {
		const telegramId = ctx.from?.id;
		if (!telegramId || !session.taskId) {
			await ctx.reply('Ошибка: не удалось получить необходимые данные.');
			await ctx.scene.leave();
			return;
		}

		const user = await this.usersService.getUserByTelegramId(telegramId);
		if (!user || user.role !== 'DEVELOPER') {
			await ctx.reply('Ошибка: доступ запрещен.');
			await ctx.scene.leave();
			return;
		}

		try {
			await this.taskService.createOffer(session.taskId, user.id, {
				proposedCost: session.proposedCost,
				proposedTime: session.proposedTime,
				plan: session.plan,
			});

			await ctx.replyWithHTML(
				'<b>🎉 Отклик успешно отправлен!</b>\n\n' +
				'Ваш отклик отправлен заказчику и ожидает рассмотрения.\n' +
				'Вы получите уведомление, когда заказчик примет решение.',
				Markup.removeKeyboard(),
			);
		} catch (error) {
			console.error('Ошибка при создании отклика:', error);
			await ctx.reply('Произошла ошибка при создании отклика. Попробуйте позже.');
		}

		await ctx.scene.leave();
	}
}

