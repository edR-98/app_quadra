/*
  Warnings:

  - You are about to drop the column `vestiarios` on the `quadras` table. All the data in the column will be lost.
  - Added the required column `vestiario` to the `quadras` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `favoritos` ALTER COLUMN `favoritado_em` DROP DEFAULT;

-- AlterTable
ALTER TABLE `quadras` DROP COLUMN `vestiarios`,
    ADD COLUMN `vestiario` BOOLEAN NOT NULL;
