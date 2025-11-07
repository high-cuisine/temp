import { Injectable, Logger } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On, Command } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

import { FeedbackCrudService } from '../../../../feedback/services/feedback-crud.service';
import { UsersService } from '../../../../users/services/users.service';
import { TaskService } from '../../../../task/services/task.service';
import { TelegramService } from '../../../services/telegram.service';

interface EmployerFeedbackSession {
	step: 'rating' | 'comment' | 'confirm';
	rating?: number;
	comment?: string | null;
	taskId?: number;
	employerId?: number;
	developerId?: number;
}

@Injectable()
@Scene('employer-feedback')
export class EmployerFeedbackScene {
	private readonly logger = new Logger(EmployerFeedbackScene.name);

	constructor(
		private readonly feedbackService: FeedbackCrudService,
		private readonly usersService: UsersService,
		private readonly taskService: TaskService,
		private readonly telegramService: TelegramService,
	) {}

	@SceneEnter()
	async onSceneEnter(@Ctx() ctx: SceneContext) {
		const state = (ctx.scene as any).state || {};
		const taskId = state?.taskId as number | undefined;
		const employerId = state?.employerId as number | undefined;
		const developerId = state?.developerId as number | undefined;

		if (!taskId || !employerId || !developerId) {
			await ctx.reply('Ошибка: недостаточно данных для отправки отзыва.');
			await ctx.scene.leave();
			return;
		}

		const employer = await this.usersService.getUserById(employerId);
		if (!employer) {
			await ctx.reply('Ошибка: не удалось определить заказчика.');
			await ctx.scene.leave();
			return;
		}

		if (!ctx.session) {
			ctx.session = {};
		}
		ctx.session['employer-feedback'] = {
			step: 'rating',
			taskId,
			employerId,
			developerId,
		} as EmployerFeedbackSession;

		await ctx.replyWithHTML(
			'<b>🙏 Оставьте отзыв об исполнителе</b>\n\n' +
			'Пожалуйста, оцените работу исполнителя по пятибалльной шкале (от 1 до 5).',
			Markup.keyboard([['❌ Отмена']]).oneTime().resize(),
		);
	}

	@On('text')
	async onText(@Ctx() ctx: SceneContext) {
		const session = ctx.session['employer-feedback'] as EmployerFeedbackSession | undefined;
		const text = (ctx.message as any).text?.trim();

		if (!session) {
			await ctx.reply('Ошибка: сессия отзыва не найдена.');
			await ctx.scene.leave();
			return;
		}

		if (text === '❌ Отмена' || text?.toLowerCase() === '/cancel') {
			await ctx.reply('Оставление отзыва отменено.', Markup.removeKeyboard());
			delete ctx.session['employer-feedback'];
			await ctx.scene.leave();
			return;
		}

		switch (session.step) {
			case 'rating': {
				const rating = Number(text);
				if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
					await ctx.reply('Введите целое число от 1 до 5.');
					return;
				}
				session.rating = rating;
				session.step = 'comment';
				await ctx.replyWithHTML(
					'<b>Спасибо!</b> ✍️\n\n' +
					'Теперь оставьте короткий комментарий о работе (минимум 3 символа).\n' +
					'Если хотите пропустить этот шаг, отправьте «Пропустить».',
				);
				break;
			}
			case 'comment': {
				if (!text || text.toLowerCase() === 'пропустить') {
					session.comment = null;
				} else if (text.length < 3) {
					await ctx.reply('Комментарий слишком короткий. Попробуйте еще раз или отправьте «Пропустить».');
					return;
				} else {
					session.comment = text;
				}
				session.step = 'confirm';
				await ctx.replyWithHTML(
					`<b>Подтвердите отправку отзыва</b>\n\n` +
					`Оценка: ${session.rating}/5\n` +
					`Комментарий: ${session.comment ?? 'Не указан'}\n\n` +
					'Отправить отзыв?',
					Markup.inlineKeyboard([
						[Markup.button.callback('✅ Отправить', 'feedback_confirm')],
						[Markup.button.callback('❌ Отмена', 'feedback_cancel')],
					]),
				);
				break;
			}
		}
	}

	@On('callback_query')
	async onCallback(@Ctx() ctx: SceneContext) {
		const data = (ctx.callbackQuery as any).data;
		const session = ctx.session['employer-feedback'] as EmployerFeedbackSession | undefined;
		if (!session) {
			await ctx.answerCbQuery();
			await ctx.scene.leave();
			return;
		}
		await ctx.answerCbQuery();
		if (data === 'feedback_cancel') {
			await ctx.reply('Отзыв не был отправлен.', Markup.removeKeyboard());
			delete ctx.session['employer-feedback'];
			await ctx.scene.leave();
			return;
		}
		if (data !== 'feedback_confirm') {
			return;
		}

		try {
			await this.feedbackService.create({
				rating: session.rating!,
				comment: session.comment ?? null,
				task: { connect: { id: session.taskId! } },
				author: { connect: { id: session.employerId! } },
				target: { connect: { id: session.developerId! } },
			});
			await ctx.replyWithHTML('Спасибо! Ваш отзыв отправлен исполнителю ✅', Markup.removeKeyboard());
			const developer = await this.usersService.getUserById(session.developerId!);
			if (developer?.telegramId) {
				await this.telegramService.sendUserMessageByTelegramId(
					Number(developer.telegramId),
					'💬 Вы получили новый отзыв от заказчика!',
				);
			}
		} catch (error) {
			this.logger.error('Failed to create feedback', error as Error);
			await ctx.reply('Не удалось сохранить отзыв. Попробуйте позже.', Markup.removeKeyboard());
		}

		delete ctx.session['employer-feedback'];
		await ctx.scene.leave();
	}

	@Command('cancel')
	async onCancel(@Ctx() ctx: SceneContext) {
		await ctx.reply('Оставление отзыва отменено.', Markup.removeKeyboard());
		delete ctx.session['employer-feedback'];
		await ctx.scene.leave();
	}
}

