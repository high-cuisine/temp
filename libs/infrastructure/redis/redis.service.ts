import { Inject, Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
	constructor(@Inject('REDIS_CLIENT') private readonly redis: Redis) {}

	public async ping() {
		return await this.redis.ping();
	}

	public getClient() {
		return this.redis;
	}

	public async get<T>(key: string): Promise<T> {
		const value = await this.redis.get(key);

		try {
			return JSON.parse(<string>value);
		} catch {
			return <T>value;
		}
	}

	public async deleteByPattern(pattern: string) {
		const keys = await this.redis.keys(pattern);
		await this.redis.del(keys);
	}

	public async getValuesByPattern<T>(pattern: string): Promise<{ key: string; value: T }[]> {
		const keys = await this.redis.keys(pattern);

		const values = await Promise.all(
			keys.map(async (key) => {
				const value = await this.redis.get(key);
				try {
					return { key, value: JSON.parse(<string>value) };
				} catch (error) {
					return { key, value: value };
				}
			}),
		);

		return values;
	}

	public async set(key: string, value: any, ttl?: number) {
		if (ttl) {
			await this.redis.setex(key, ttl, JSON.stringify(value));
		} else {
			await this.redis.set(key, JSON.stringify(value));
		}
	}

	public async setEx(key: string, ttl: number) {
		await this.redis.expire(key, ttl);
	}

	public async del(key: string) {
		await this.redis.del(key);
	}

	public async sadd(key: string, value: string) {
		await this.redis.sadd(key, value);
	}

	public async srem(key: string, value: string) {
		await this.redis.srem(key, value);
	}

	public async sismember(key: string, value: string) {
		return await this.redis.sismember(key, value);
	}

	public async smembers(key: string) {
		return await this.redis.smembers(key);
	}
}
