import { Injectable } from '@nestjs/common';
import { Ctx, Update, Command } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../users/services/users.service';
import { EmployerService } from '../services/employer.service';

@Update()
@Injectable()
export class EmployerUpdate {
	constructor(
		private readonly usersService: UsersService,
		private readonly employerService: EmployerService,
	) {}

	@Command('my_orders')
	async onMyOrders(@Ctx() ctx: SceneContext) {
		if ((ctx.scene as any)?.current) {
			return;
		}

		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		// Получаем пользователя
		const user = await this.usersService.getUserByTelegramId(telegramId);
		if (!user) {
			await ctx.reply('Вы не зарегистрированы. Используйте /register для регистрации.');
			return;
		}

		// Проверяем роль
		if (user.role !== 'EMPLOYER') {
			await ctx.reply('Эта команда доступна только для работодателей.');
			return;
		}

		// Показываем заказы
		return this.employerService.showMyOrders(ctx, user.id);
	}

	// Команда для размещения заказа
	@Command('create_order')
	async onCreateOrder(@Ctx() ctx: SceneContext) {
		// Проверяем, если пользователь находится в сцене, не обрабатываем здесь
		if ((ctx.scene as any)?.current) {
			return;
		}

		const telegramId = ctx.from?.id;
		if (!telegramId) {
			await ctx.reply('Ошибка: не удалось получить ID пользователя.');
			return;
		}

		// Получаем пользователя
		const user = await this.usersService.getUserByTelegramId(telegramId);
		if (!user) {
			await ctx.reply('Вы не зарегистрированы. Используйте /register для регистрации.');
			return;
		}

		// Проверяем роль
		if (user.role !== 'EMPLOYER') {
			await ctx.reply('Эта команда доступна только для работодателей.');
			return;
		}

		// Переходим в сцену создания заказа
		return ctx.scene.enter('create-task');
	}
}

