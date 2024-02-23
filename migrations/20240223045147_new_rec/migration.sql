/*
  Warnings:

  - You are about to drop the `advisory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "advisory";

-- CreateTable
CREATE TABLE "recommendation" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "recommendation" TEXT NOT NULL,

    CONSTRAINT "recommendation_pkey" PRIMARY KEY ("id")
);
