import { Injectable, Logger } from '@nestjs/common';
import { InjectBot } from 'nestjs-telegraf';
import { Telegraf } from 'telegraf';
import { ExtraReplyMessage } from 'telegraf/typings/telegram-types';

@Injectable()
export class TelegramService {
	private readonly logger = new Logger(TelegramService.name);

	constructor(@InjectBot() private readonly bot: Telegraf) {}

	async sendUserMessageByTelegramId(
		telegramId: number,
		message: string = 'У вас новое уведомление',
		extra?: ExtraReplyMessage,
	): Promise<void> {
		if (!telegramId) {
			this.logger.warn('Attempt to send message without telegramId');
			return;
		}

		try {
			await this.bot.telegram.sendMessage(telegramId, message, extra);
		} catch (error) {
			this.logger.error(`Failed to send message to telegramId=${telegramId}`, error as Error);
		}
	}
}