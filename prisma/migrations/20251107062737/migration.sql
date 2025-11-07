-- AlterTable
ALTER TABLE "task_offer" ADD COLUMN     "paymentId" INTEGER;

-- AddForeignKey
ALTER TABLE "task_offer" ADD CONSTRAINT "task_offer_paymentId_fkey" FOREIGN KEY ("paymentId") REFERENCES "payment"("id") ON DELETE SET NULL ON UPDATE CASCADE;
