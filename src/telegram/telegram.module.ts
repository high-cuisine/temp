import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { cfg } from '@infra/config';
import { BotUpdate } from './updates/bot.update';
import { EmployerUpdate } from './updates/employer.update';
import { DeveloperUpdate } from './updates/developer.update';
import { RegisterScene } from './scenes/users-scenes/common/register.scene';
import { CreateTaskScene } from './scenes/users-scenes/executor/create-task.scene';
import { CreateOfferScene } from './scenes/users-scenes/executor/create-offer.scene';
import { DeveloperService } from './services/developer.service';
import { EmployerService } from './services/employer.service';
import { UsersModule } from '../users/users.module';
import { TaskModule } from '../task/task.module';
import { PaymentModule } from '../payment/payment.module';
import { FeedbackModule } from '../feedback/feedback.module';
import { TelegramService } from './services/telegram.service';
import { EmployerFeedbackScene } from './scenes/users-scenes/employer/employer-feedback.scene';
import { DeveloperPayoutScene } from './scenes/users-scenes/executor/developer-payout.scene';

const session = new LocalSession({ database: 'sessions.json' });

@Module({
	imports: [
		UsersModule,
		TaskModule,
		PaymentModule,
		FeedbackModule,
		TelegrafModule.forRoot({
			token: cfg.telegram.botToken,
			middlewares: [session.middleware()],
		}),
	],
	providers: [
		DeveloperUpdate,
		EmployerUpdate,
		BotUpdate,
		DeveloperService,
		EmployerService,
		TelegramService,
		RegisterScene,
		CreateTaskScene,
		CreateOfferScene,
		EmployerFeedbackScene,
		DeveloperPayoutScene,
	],
	exports: [TelegramService],
})
export class TelegramModule {}

