-- CreateEnum
CREATE TYPE "PlankaAccountMode" AS ENUM ('CREATE_NEW', 'CONNECT_EXISTING');

-- AlterTable
ALTER TABLE "employer_profile" ADD COLUMN     "plankaEmail" VARCHAR(255),
ADD COLUMN     "plankaMode" "PlankaAccountMode",
ADD COLUMN     "plankaUserId" VARCHAR(128);
