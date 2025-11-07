import { Body, Controller, Post } from "@nestjs/common";
import { CreatePaymentDto } from "../dto/create-payment.dto";
import { PaymentService } from "../services/payment.service";

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymentService: PaymentService) {}

    @Post('')
    async createPayment(@Body() body: CreatePaymentDto) {
        
        return this.paymentService.setPayment(body.userId, body.address, body.amount, body.offerId);
    }
}