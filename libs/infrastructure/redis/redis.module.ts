import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import Redis from 'ioredis';
import { cfg } from '@infra/config';

@Global()
@Module({
	providers: [
		{
			provide: 'REDIS_CLIENT',
			useFactory: () => {
				return new Redis(cfg.redis);
			},
		},
		RedisService,
	],
	exports: [RedisService],
})
export class RedisModule {}
