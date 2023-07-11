-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('IN', 'OUT');

-- CreateTable
CREATE TABLE "User" (
    "id" SMALLSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Business" (
    "id" SMALLSERIAL NOT NULL,
    "userOwnerId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "initialValue" MONEY NOT NULL DEFAULT 0,
    "businessId" INTEGER,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Business_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessUsersParticipation" (
    "userId" INTEGER NOT NULL,
    "businessId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "BusinessUsersParticipation_pkey" PRIMARY KEY ("userId","businessId")
);

-- CreateTable
CREATE TABLE "TransactionInOut" (
    "cod" SMALLSERIAL NOT NULL,
    "businessOwnerId" INTEGER NOT NULL,
    "userOwnerId" INTEGER NOT NULL,
    "withUserId" INTEGER NOT NULL,
    "value" MONEY NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "type" "TransactionType" NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "TransactionInOut_pkey" PRIMARY KEY ("cod")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_userOwnerId_fkey" FOREIGN KEY ("userOwnerId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Business" ADD CONSTRAINT "Business_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessUsersParticipation" ADD CONSTRAINT "BusinessUsersParticipation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BusinessUsersParticipation" ADD CONSTRAINT "BusinessUsersParticipation_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransactionInOut" ADD CONSTRAINT "TransactionInOut_userOwnerId_fkey" FOREIGN KEY ("userOwnerId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TransactionInOut" ADD CONSTRAINT "TransactionInOut_withUserId_fkey" FOREIGN KEY ("withUserId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "TransactionInOut" ADD CONSTRAINT "TransactionInOut_businessOwnerId_fkey" FOREIGN KEY ("businessOwnerId") REFERENCES "Business"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
