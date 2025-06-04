/*
  Warnings:

  - You are about to drop the column `wi_fi` on the `quadras` table. All the data in the column will be lost.
  - Added the required column `wifi` to the `quadras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `favoritos` ALTER COLUMN `favoritado_em` DROP DEFAULT;

-- AlterTable
ALTER TABLE `quadras` CHANGE COLUMN `wi_fi` `wifi` BOOLEAN NOT NULL;
