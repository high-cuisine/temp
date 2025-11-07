import { Injectable } from "@nestjs/common";
import { PaymentStatus } from "@prisma/client";
import { PaymentRepository } from "../repository/payment.repository";
import { RedisService } from "@infra/redis/redis.service";

@Injectable()
export class PaymentService {

    constructor(
        private readonly paymentRepository: PaymentRepository,
        private readonly redisService: RedisService
    ) {

    }

    async createPayment(userId: number, amount: number, txHash?: string) {
        const payment = await this.paymentRepository.create({
            amount: amount,
            user: {
                connect: {
                    id: userId,
                },
            },
            txHash: txHash || null,
            status: PaymentStatus.PENDING,
        });
        
        return payment;
    }

    async updatePaymentStatus(paymentId: number, newStatus: PaymentStatus) {
        const payment = await this.paymentRepository.update(
            paymentId,
            {
                status: newStatus,
            }
        );
        return payment;
    }

    async getAllPaymentsByUser(userId: number) {
        const payments = await this.paymentRepository.findMany({
            where: {
                userId: userId,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        
        return payments;
    }

    async setPayment(userId: number, fromAddress: string, amount: number, offerId: number) {
        await this.redisService.set(`payment:${userId}`, {fromAddress, amount, offerId});
        this.redisService.sadd('payment_indexes', userId.toString());
    }
    
}