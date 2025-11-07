import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Prisma } from '@prisma/client';

type TaskCreateInput = Prisma.TaskCreateInput;
type TaskUpdateInput = Prisma.TaskUpdateInput;
type TaskWhereInput = Prisma.TaskWhereInput;
type TaskOrderByWithRelationInput = Prisma.TaskOrderByWithRelationInput;

@Injectable()
export class TaskRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: TaskCreateInput) {
		return this.prisma.task.create({
			data,
		});
	}

	async delete(id: number) {
		return this.prisma.task.delete({
			where: { id },
		});
	}

	async update(id: number, data: TaskUpdateInput) {
		return this.prisma.task.update({
			where: { id },
			data,
		});
	}

	async getById(id: number) {
		return this.prisma.task.findUnique({
			where: { id },
		});
	}

	async getAll() {
		return this.prisma.task.findMany();
	}

	async findMany(options?: {
		skip?: number;
		take?: number;
		where?: TaskWhereInput;
		orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
	}) {
		return this.prisma.task.findMany(options);
	}
}

