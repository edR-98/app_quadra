/*
  Warnings:

  - A unique constraint covering the columns `[id_usuario,id_quadra]` on the table `avaliacoes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `favoritos` ALTER COLUMN `favoritado_em` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `avaliacoes_id_usuario_id_quadra_key` ON `avaliacoes`(`id_usuario`, `id_quadra`);
