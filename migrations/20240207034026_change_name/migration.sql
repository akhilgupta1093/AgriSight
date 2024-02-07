/*
  Warnings:

  - You are about to drop the `Field` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Field";

-- CreateTable
CREATE TABLE "field" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fieldId" INTEGER NOT NULL,

    CONSTRAINT "field_pkey" PRIMARY KEY ("id")
);
