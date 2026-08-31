-- CreateTable
CREATE TABLE `Setting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `taxPercent` DECIMAL(5, 2) NOT NULL DEFAULT 10.00,
    `servicePercent` DECIMAL(5, 2) NOT NULL DEFAULT 5.00,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `capacity` INTEGER NOT NULL DEFAULT 0,
    `type` VARCHAR(191) NOT NULL DEFAULT 'medium',
    `hourlyRate` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `status` ENUM('AVAILABLE', 'OCCUPIED', 'MAINTENANCE', 'OFFLINE', 'DISABLED') NOT NULL DEFAULT 'AVAILABLE',

    UNIQUE INDEX `Room_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
