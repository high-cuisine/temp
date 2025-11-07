import { Injectable } from '@nestjs/common';
import { Ctx, Update, Command } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes';
import { UsersService } from '../../users/services/users.service';
import { DeveloperService } from '../services/developer.service';

@Update()
@Injectable()
export class DeveloperUpdate {
	constructor(
		private readonly usersService: UsersService,
		private readonly developerService: DeveloperService,
	) {}

	@Command('tasks')
	async onTasks(@Ctx() ctx: SceneContext) {
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
		if (user.role !== 'DEVELOPER') {
			await ctx.reply('Эта команда доступна только для разработчиков.');
			return;
		}

		// Показываем доступные задания
		return this.developerService.showAvailableTasks(ctx, user.id);
	}

	@Command('my_offers')
	async onMyOffers(@Ctx() ctx: SceneContext) {
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
		if (user.role !== 'DEVELOPER') {
			await ctx.reply('Эта команда доступна только для разработчиков.');
			return;
		}

		// Показываем мои отклики
		return this.developerService.showMyOffers(ctx, user.id);
	}

}

