/*
  Warnings:

  - Added the required column `userId` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Session` ADD COLUMN `userId` INTEGER NOT NULL,
    ADD COLUMN `userOut` INTEGER NULL;

-- CreateTable
CREATE TABLE `Transaction` (
    `id` VARCHAR(191) NOT NULL,
    `roomTotal` DECIMAL(12, 2) NOT NULL,
    `roomDiscount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `fnbTotal` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `companionTotal` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `subTotal` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `tax` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `service` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `grandTotal` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `note` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Payment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `method` ENUM('CASH', 'TRANSFER', 'QRIS') NOT NULL DEFAULT 'CASH',
    `status` ENUM('PENDING', 'PAID', 'CANCELLED') NOT NULL DEFAULT 'PENDING',
    `amount` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `change` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `paidAt` DATETIME(3) NULL,
    `userId` INTEGER NOT NULL,
    `note` VARCHAR(191) NULL,
    `transactionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fnb` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `category` ENUM('FOOD', 'DRINK', 'SNACK', 'OTHER') NOT NULL DEFAULT 'OTHER',
    `trackStock` BOOLEAN NOT NULL DEFAULT true,
    `stock` INTEGER NOT NULL DEFAULT 0,
    `price` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `deleted` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Fnb_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FnbTrackStock` (
    `id` VARCHAR(191) NOT NULL,
    `suplayer` VARCHAR(191) NOT NULL,
    `fnbId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `type` ENUM('IN', 'OUT') NOT NULL,
    `qty` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FnbOrder` (
    `id` VARCHAR(191) NOT NULL,
    `status` ENUM('DRAFT', 'SEND', 'CANCELLED') NOT NULL DEFAULT 'DRAFT',
    `transactionId` VARCHAR(191) NOT NULL,
    `itemId` INTEGER NOT NULL,
    `total` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `note` VARCHAR(191) NULL,
    `draftAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `sendAt` DATETIME(3) NULL,
    `cancelAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FnbItem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fnbId` INTEGER NOT NULL,
    `qty` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `category` ENUM('FOOD', 'DRINK', 'SNACK', 'OTHER') NOT NULL DEFAULT 'OTHER',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Companion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `hourlyRate` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `available` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CompanionOrder` (
    `id` VARCHAR(191) NOT NULL,
    `companionId` INTEGER NOT NULL,
    `durationMinute` INTEGER NOT NULL,
    `startTime` DATETIME(3) NOT NULL,
    `endTime` DATETIME(3) NOT NULL,
    `total` DECIMAL(12, 2) NOT NULL DEFAULT 0,
    `finisedAt` DATETIME(3) NULL,
    `canceldAt` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `transactionId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Payment` ADD CONSTRAINT `Payment_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FnbTrackStock` ADD CONSTRAINT `FnbTrackStock_fnbId_fkey` FOREIGN KEY (`fnbId`) REFERENCES `Fnb`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FnbTrackStock` ADD CONSTRAINT `FnbTrackStock_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FnbOrder` ADD CONSTRAINT `FnbOrder_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FnbOrder` ADD CONSTRAINT `FnbOrder_itemId_fkey` FOREIGN KEY (`itemId`) REFERENCES `FnbItem`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FnbItem` ADD CONSTRAINT `FnbItem_fnbId_fkey` FOREIGN KEY (`fnbId`) REFERENCES `Fnb`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompanionOrder` ADD CONSTRAINT `CompanionOrder_companionId_fkey` FOREIGN KEY (`companionId`) REFERENCES `Companion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompanionOrder` ADD CONSTRAINT `CompanionOrder_transactionId_fkey` FOREIGN KEY (`transactionId`) REFERENCES `Transaction`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
