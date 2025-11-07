import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Prisma } from '@prisma/client';

type TaskOfferCreateInput = Prisma.TaskOfferCreateInput;
type TaskOfferUpdateInput = Prisma.TaskOfferUpdateInput;
type TaskOfferWhereInput = Prisma.TaskOfferWhereInput;
type TaskOfferOrderByWithRelationInput = Prisma.TaskOfferOrderByWithRelationInput;

@Injectable()
export class TaskOfferRepository {
	constructor(private readonly prisma: PrismaService) {}

	async create(data: TaskOfferCreateInput) {
		return this.prisma.taskOffer.create({
			data,
		});
	}

	async delete(id: number) {
		return this.prisma.taskOffer.delete({
			where: { id },
		});
	}

	async update(id: number, data: TaskOfferUpdateInput) {
		return this.prisma.taskOffer.update({
			where: { id },
			data,
		});
	}

	async getById(id: number) {
		return this.prisma.taskOffer.findUnique({
			where: { id },
		});
	}

	async getAll() {
		return this.prisma.taskOffer.findMany();
	}

	async findMany(options?: {
		skip?: number;
		take?: number;
		where?: TaskOfferWhereInput;
		orderBy?: TaskOfferOrderByWithRelationInput | TaskOfferOrderByWithRelationInput[];
	}) {
		return this.prisma.taskOffer.findMany(options);
	}
}

