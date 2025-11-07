import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';

type DeveloperProfileCreateInput = Parameters<PrismaService['developerProfile']['create']>[0] extends { data: infer D } ? D : never;
type DeveloperProfileUpdateInput = Parameters<PrismaService['developerProfile']['update']>[0] extends { data: infer D } ? D : never;
type FindManyArgs = Parameters<PrismaService['developerProfile']['findMany']>[0];

@Injectable()
export class DeveloperProfileRespository {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: DeveloperProfileCreateInput) {
		console.log(data.userId);
		return this.prisma.developerProfile.create({
			data,
		});
	}

	async delete(id: number) {
		return this.prisma.developerProfile.delete({
			where: { id },
		});
	}

	async update(id: number, data: DeveloperProfileUpdateInput) {
		return this.prisma.developerProfile.update({
			where: { id },
			data,
		});
	}

	async getById(id: number) {
		return this.prisma.developerProfile.findUnique({
			where: { id },
		});
	}

	async getByUserId(userId: number) {
		return this.prisma.developerProfile.findUnique({
			where: { userId },
		});
	}

	async getAll() {
		return this.prisma.developerProfile.findMany();
	}

	async findMany(options?: FindManyArgs) {
		return this.prisma.developerProfile.findMany(options);
	}
}

