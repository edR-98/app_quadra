-- AlterTable
ALTER TABLE `favoritos` ALTER COLUMN `favoritado_em` DROP DEFAULT;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `telefone` VARCHAR(191) NULL;
