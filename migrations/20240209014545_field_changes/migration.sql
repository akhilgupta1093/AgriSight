/*
  Warnings:

  - Added the required column `points` to the `field` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `field` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "field" ADD COLUMN     "points" JSONB NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL;
