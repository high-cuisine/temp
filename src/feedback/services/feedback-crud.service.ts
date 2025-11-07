import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Prisma } from '@prisma/client';

type FeedbackCreateInput = Prisma.FeedbackCreateInput;
type FeedbackUpdateInput = Prisma.FeedbackUpdateInput;
type FeedbackWhereInput = Prisma.FeedbackWhereInput;
type FeedbackOrderByWithRelationInput = Prisma.FeedbackOrderByWithRelationInput;

@Injectable()
export class FeedbackCrudService {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: FeedbackCreateInput) {
		return this.prisma.feedback.create({
			data,
		});
	}

	async delete(id: number) {
		return this.prisma.feedback.delete({
			where: { id },
		});
	}

	async update(id: number, data: FeedbackUpdateInput) {
		return this.prisma.feedback.update({
			where: { id },
			data,
		});
	}

	async getById(id: number) {
		return this.prisma.feedback.findUnique({
			where: { id },
		});
	}

	async getAll() {
		return this.prisma.feedback.findMany();
	}

	async findMany(options?: {
		skip?: number;
		take?: number;
		where?: FeedbackWhereInput;
		orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[];
	}) {
		return this.prisma.feedback.findMany(options);
	}
}

