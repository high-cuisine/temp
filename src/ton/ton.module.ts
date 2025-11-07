import { Module } from "@nestjs/common";
import { TonService } from "./services/ton.service";
import { PaymentCheckService } from "./services/payment.service";
import { PaymentModule } from "src/payment/payment.module";
import { TaskModule } from "src/task/task.module";
import { UsersModule } from "src/users/users.module";
import { TelegramModule } from "src/telegram/telegram.module";

@Module({
    imports: [PaymentModule, TaskModule, UsersModule, TelegramModule],
    controllers: [],
    providers: [TonService, PaymentCheckService],
    exports: [TonService, PaymentCheckService],
})
export class TonModule {}