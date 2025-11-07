import { Module } from '@nestjs/common';
import { PaymentRepository } from './repository/payment.repository';
import { PaymentService } from './services/payment.service';
import { PaymentController } from './controllers/payment.v1.controller';

@Module({
	providers: [PaymentRepository, PaymentService],
	controllers: [PaymentController],
	exports: [PaymentService],
})
export class PaymentModule {}

