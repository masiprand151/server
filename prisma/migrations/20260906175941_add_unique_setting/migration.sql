/*
  Warnings:

  - A unique constraint covering the columns `[isActive]` on the table `Setting` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Setting_isActive_key` ON `Setting`(`isActive`);
