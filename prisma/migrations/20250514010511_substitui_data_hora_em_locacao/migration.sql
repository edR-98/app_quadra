/*
  Warnings:

  - You are about to drop the column `data` on the `locacoes` table. All the data in the column will be lost.
  - You are about to drop the column `hora` on the `locacoes` table. All the data in the column will be lost.
  - Added the required column `data_hora` to the `locacoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `locacoes` DROP COLUMN `data`,
    DROP COLUMN `hora`,
    ADD COLUMN `data_hora` DATETIME(3) NOT NULL;
