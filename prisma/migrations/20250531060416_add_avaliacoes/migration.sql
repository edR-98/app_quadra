-- AlterTable
ALTER TABLE `favoritos` ALTER COLUMN `favoritado_em` DROP DEFAULT;

-- CreateTable
CREATE TABLE `avaliacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nota` INTEGER NOT NULL,
    `comentario` VARCHAR(191) NOT NULL,
    `id_usuario` INTEGER NOT NULL,
    `id_quadra` INTEGER NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `avaliacoes` ADD CONSTRAINT `avaliacoes_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `avaliacoes` ADD CONSTRAINT `avaliacoes_id_quadra_fkey` FOREIGN KEY (`id_quadra`) REFERENCES `quadras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
