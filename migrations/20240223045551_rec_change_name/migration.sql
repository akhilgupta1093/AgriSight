/*
  Warnings:

  - You are about to drop the `recommendation` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "recommendation";

-- CreateTable
CREATE TABLE "rec" (
    "id" SERIAL NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "rec" TEXT NOT NULL,

    CONSTRAINT "rec_pkey" PRIMARY KEY ("id")
);
