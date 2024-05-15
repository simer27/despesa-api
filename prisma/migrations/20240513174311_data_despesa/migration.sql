/*
  Warnings:

  - Added the required column `data` to the `despesas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "despesas" ADD COLUMN     "data" TEXT NOT NULL;
