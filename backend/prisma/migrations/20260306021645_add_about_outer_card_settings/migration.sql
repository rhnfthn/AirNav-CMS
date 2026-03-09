-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "about_outer_card_bg" TEXT NOT NULL DEFAULT '#F4F9FD',
ADD COLUMN     "about_outer_card_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "about_outer_card_shadow" TEXT NOT NULL DEFAULT '#B8C6DB';
