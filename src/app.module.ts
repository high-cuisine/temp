import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TelegramModule } from './telegram/telegram.module';
import { TonModule } from './ton/ton.module';
import { PrismaModule } from '@infra/prisma/prisma.module';
import { RedisModule } from '@infra/redis/redis.module';
import { PlankaModule } from '@infra/planka/Planka.module';

@Module({
	imports: [
		ScheduleModule.forRoot(),
		RedisModule,
		PrismaModule,
		PlankaModule,
		TelegramModule,
		TonModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
