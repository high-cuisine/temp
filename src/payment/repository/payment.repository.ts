import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infra/prisma/prisma.service';
import { Prisma } from '@prisma/client';

type PaymentCreateInput = Prisma.PaymentCreateInput;
type PaymentUpdateInput = Prisma.PaymentUpdateInput;
type PaymentWhereInput = Prisma.PaymentWhereInput;
type PaymentOrderByWithRelationInput = Prisma.PaymentOrderByWithRelationInput;

@Injectable()
export class PaymentRepository {
	constructor(private readonly prisma: PrismaService) {
		
	}

	async create(data: PaymentCreateInput) {
		return this.prisma.payment.create({
			data,
		});
	}

	async delete(id: number) {
		return this.prisma.payment.delete({
			where: { id },
		});
	}

	async update(id: number, data: PaymentUpdateInput) {
		return this.prisma.payment.update({
			where: { id },
			data,
		});
	}

	async getById(id: number) {
		return this.prisma.payment.findUnique({
			where: { id },
		});
	}

	async getAll() {
		return this.prisma.payment.findMany();
	}

	async findMany(options?: {
		skip?: number;
		take?: number;
		where?: PaymentWhereInput;
		orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[];
	}) {
		return this.prisma.payment.findMany(options);
	}
}

