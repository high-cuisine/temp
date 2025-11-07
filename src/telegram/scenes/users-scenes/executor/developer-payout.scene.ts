import { Injectable, Logger } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On, Command } from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

import { UsersService } from '../../../../users/services/users.service';
import { TaskService } from '../../../../task/services/task.service';
import { PaymentService } from '../../../../payment/services/payment.service';
import { PaymentStatus } from '@prisma/client';

interface DeveloperPayoutSession {
	step: 'wallet' | 'confirm';
	wallet?: string;
	developerId?: number;
	taskId?: number;
	offerId?: number;
	paymentId?: number | null;
}

@Injectable()
@Scene('developer-payout')
export class DeveloperPayoutScene {
	private readonly logger = new Logger(DeveloperPayoutScene.name);

	constructor(
		private readonly usersService: UsersService,
		private readonly taskService: TaskService,
		private readonly paymentService: PaymentService,
	) {}

	@SceneEnter()
	async onSceneEnter(@Ctx() ctx: SceneContext) {
		const state = (ctx.scene as any).state || {};
		const taskId = state?.taskId as number | undefined;
		const offerId = state?.offerId as number | undefined;

		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			await ctx.scene.leave();
			return;
		}

		const developer = await this.usersService.getUserByTelegramId(telegramId);
		if (!developer || developer.role !== 'DEVELOPER') {
			await ctx.reply('Эта функция доступна только для разработчиков.');
			await ctx.scene.leave();
			return;
		}

		if (!taskId || !offerId) {
			await ctx.reply('Ошибка: нельзя запросить выплату без данных о заказе.');
			await ctx.scene.leave();
			return;
		}

		const offer = await this.taskService.getUserOffer(taskId, developer.id);
		if (!offer || offer.id !== offerId) {
			await ctx.reply('Отклик не найден или больше не доступен.');
			await ctx.scene.leave();
			return;
		}

		if (!ctx.session) {
			ctx.session = {};
		}
		ctx.session['developer-payout'] = {
			step: 'wallet',
			developerId: developer.id,
			taskId,
			offerId,
			paymentId: offer.payment?.id ?? null,
		} as DeveloperPayoutSession;

		await ctx.replyWithHTML(
			'<b>💸 Получение средств</b>\n\n' +
			'Укажите адрес кошелька, на который нужно отправить оплату.',
			Markup.keyboard([['❌ Отмена']]).oneTime().resize(),
		);
	}

	@On('text')
	async onText(@Ctx() ctx: SceneContext) {
		const session = ctx.session['developer-payout'] as DeveloperPayoutSession | undefined;
		const text = (ctx.message as any).text?.trim();

		if (!session) {
			await ctx.reply('Ошибка: сессия выплат не найдена.');
			await ctx.scene.leave();
			return;
		}

		if (text === '❌ Отмена' || text?.toLowerCase() === '/cancel') {
			await ctx.reply('Запрос на выплату отменен.', Markup.removeKeyboard());
			delete ctx.session['developer-payout'];
			await ctx.scene.leave();
			return;
		}

		switch (session.step) {
			case 'wallet': {
				if (!text || text.length < 5) {
					await ctx.reply('Похоже, это не похоже на кошелек. Попробуйте еще раз.');
					return;
				}
				session.wallet = text;
				session.step = 'confirm';
				await ctx.replyWithHTML(
					`<b>Проверим данные?</b>\n\n` +
					`Кошелек: <code>${text}</code>\n\n` +
					'Все верно?',
					Markup.inlineKeyboard([
						[Markup.button.callback('✅ Отправить', 'payout_confirm')],
						[Markup.button.callback('✏️ Изменить', 'payout_edit')],
					]),
				);
				break;
			}
		}
	}

	@On('callback_query')
	async onCallback(@Ctx() ctx: SceneContext) {
		const session = ctx.session['developer-payout'] as DeveloperPayoutSession | undefined;
		const data = (ctx.callbackQuery as any).data;
		if (!session) {
			await ctx.answerCbQuery();
			await ctx.scene.leave();
			return;
		}
		await ctx.answerCbQuery();

		if (data === 'payout_edit') {
			session.step = 'wallet';
			session.wallet = undefined;
			await ctx.reply('Введите кошелек заново:', Markup.keyboard([['❌ Отмена']]).oneTime().resize());
			return;
		}

		if (data !== 'payout_confirm') {
			return;
		}

		this.logger.log(
			`Developer payout request: developerId=${session.developerId}, taskId=${session.taskId}, offerId=${session.offerId}, wallet=${session.wallet}`,
		);

		if (session.paymentId) {
			await this.paymentService.updatePaymentStatus(session.paymentId, PaymentStatus.REALIZED);
		}

		await ctx.reply(
			'✅ Запрос на выплату принят. Мы свяжемся с вами после проверки.',
			Markup.removeKeyboard(),
		);
		delete ctx.session['developer-payout'];
		await ctx.scene.leave();
	}

	@Command('cancel')
	async onCancel(@Ctx() ctx: SceneContext) {
		await ctx.reply('Запрос на выплату отменен.', Markup.removeKeyboard());
		delete ctx.session['developer-payout'];
		await ctx.scene.leave();
	}
}

