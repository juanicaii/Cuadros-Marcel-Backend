-- CreateTable
CREATE TABLE `Products` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `width` DECIMAL(65,30) NOT NULL,
    `heigth` DECIMAL(65,30) NOT NULL,
    `length` DECIMAL(65,30) NOT NULL,
    `stock` INT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
