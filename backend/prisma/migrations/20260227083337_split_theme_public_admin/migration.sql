/*
  Warnings:

  - A unique constraint covering the columns `[scope]` on the table `theme_settings` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "theme_scope" AS ENUM ('PUBLIC', 'ADMIN');

-- AlterTable
ALTER TABLE "theme_settings" ADD COLUMN     "scope" "theme_scope" NOT NULL DEFAULT 'PUBLIC';

-- CreateIndex
CREATE UNIQUE INDEX "theme_settings_scope_key" ON "theme_settings"("scope");
