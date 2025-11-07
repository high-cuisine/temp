import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';

type EmployerProfileCreateInput = Parameters<PrismaService['employerProfile']['create']>[0] extends { data: infer D } ? D : never;
type EmployerProfileUpdateInput = Parameters<PrismaService['employerProfile']['update']>[0] extends { data: infer D } ? D : never;
type FindManyArgs = Parameters<PrismaService['employerProfile']['findMany']>[0];

@Injectable()
export class EmployerProfileRespository {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: EmployerProfileCreateInput) {
		return this.prisma.employerProfile.create({
			data,
		});
	}

	async delete(id: number) {
		return this.prisma.employerProfile.delete({
			where: { id },
		});
	}

	async update(id: number, data: EmployerProfileUpdateInput) {
		return this.prisma.employerProfile.update({
			where: { id },
			data,
		});
	}

	async getById(id: number) {
		return this.prisma.employerProfile.findUnique({
			where: { id },
		});
	}

	async getByUserId(userId: number) {
		return this.prisma.employerProfile.findUnique({
			where: { userId },
		});
	}

	async getAll() {
		return this.prisma.employerProfile.findMany();
	}

	async findMany(options?: FindManyArgs) {
		return this.prisma.employerProfile.findMany(options);
	}
}

