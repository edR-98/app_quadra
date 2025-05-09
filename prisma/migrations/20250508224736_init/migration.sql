-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `nascimento` DATETIME(3) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `usuarios_email_key`(`email`),
    UNIQUE INDEX `usuarios_cpf_key`(`cpf`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `quadras` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_local` VARCHAR(191) NOT NULL,
    `tipo_quadra` VARCHAR(191) NOT NULL,
    `localizacao` VARCHAR(191) NOT NULL,
    `imagem_principal` VARCHAR(191) NOT NULL,
    `imagem_pri` VARCHAR(191) NOT NULL,
    `imagem_seg` VARCHAR(191) NOT NULL,
    `imagem_ter` VARCHAR(191) NOT NULL,
    `telefone` VARCHAR(191) NOT NULL,
    `disponibilidade` VARCHAR(191) NOT NULL,
    `preco` DOUBLE NOT NULL,
    `dimensoes` VARCHAR(191) NOT NULL,
    `iluminacao` BOOLEAN NOT NULL,
    `vestiarios` BOOLEAN NOT NULL,
    `bebedouro` BOOLEAN NOT NULL,
    `estacionamento` BOOLEAN NOT NULL,
    `arquibancada` BOOLEAN NOT NULL,
    `coberta` BOOLEAN NOT NULL,
    `acessibilidade` BOOLEAN NOT NULL,
    `wi_fi` BOOLEAN NOT NULL,
    `criado_em` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locacoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_usuario` INTEGER NOT NULL,
    `id_quadra` INTEGER NOT NULL,
    `data` INTEGER NOT NULL,
    `hora` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `locacoes` ADD CONSTRAINT `locacoes_id_usuario_fkey` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `locacoes` ADD CONSTRAINT `locacoes_id_quadra_fkey` FOREIGN KEY (`id_quadra`) REFERENCES `quadras`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
