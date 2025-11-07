import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { User } from '@prisma/client';

type UserUpdateInput = Parameters<PrismaService['user']['update']>[0] extends { data: infer D } ? D : never;
type UserFindManyArgs = Parameters<PrismaService['user']['findMany']>[0];

@Injectable()
export class UsersRespository {
	constructor(private readonly prisma: PrismaService) {
		
	}

	async create(args: { data: { telegramId: bigint, displayName: string, email: string, role: 'DEVELOPER' | 'EMPLOYER' } }): Promise<User> {
		return this.prisma.user.create(args);
	}

	async delete(id: number): Promise<User> {
		return this.prisma.user.delete({
			where: { id },
		});
	}

	async update(id: number, data: UserUpdateInput): Promise<User> {
		return this.prisma.user.update({
			where: { id },
			data,
		});
	}

	async getById(id: number): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: { id },
		});
	}

	async getByTelegramId(telegramId: bigint | number): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: { telegramId: BigInt(telegramId) },
		});
	}

	async getAll(): Promise<User[]> {
		return this.prisma.user.findMany();
	}

	async findMany(options?: UserFindManyArgs): Promise<User[]> {
		return this.prisma.user.findMany(options);
	}
}
