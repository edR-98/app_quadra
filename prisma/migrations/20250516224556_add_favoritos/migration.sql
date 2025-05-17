-- CreateTable
CREATE TABLE `favoritos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `id_quadra` INTEGER NOT NULL,
    `favoritado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `favoritos_id_usuario_id_quadra_key`(`id_usuario`, `id_quadra`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `favoritos` ADD CONSTRAINT `favoritos_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favoritos` ADD CONSTRAINT `favoritos_id_quadra_fkey` FOREIGN KEY (`id_quadra`) REFERENCES `quadras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
