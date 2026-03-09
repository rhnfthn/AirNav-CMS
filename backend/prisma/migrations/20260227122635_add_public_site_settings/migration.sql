-- CreateEnum
CREATE TYPE "photo_size" AS ENUM ('small', 'medium', 'large');

-- CreateTable
CREATE TABLE "public_site_settings" (
    "id" TEXT NOT NULL,
    "header_bg_color" TEXT NOT NULL DEFAULT '#6FA8DC',
    "footer_bg_color" TEXT NOT NULL DEFAULT '#6FA8DC',
    "card_bg_color" TEXT NOT NULL DEFAULT '#FFFFFF',
    "card_border_color" TEXT NOT NULL DEFAULT '#B8C6DB',
    "card_shadow_color" TEXT NOT NULL DEFAULT '#B8C6DB',
    "hero_photo_size" "photo_size" NOT NULL DEFAULT 'medium',
    "hero_photo_border" TEXT NOT NULL DEFAULT '#B8C6DB',
    "hero_photo_shadow" TEXT NOT NULL DEFAULT '#B8C6DB',
    "primary_btn_bg" TEXT NOT NULL DEFAULT '#6FA8DC',
    "primary_btn_text" TEXT NOT NULL DEFAULT '#FFFFFF',
    "primary_btn_border" TEXT NOT NULL DEFAULT '#B8C6DB',
    "primary_btn_shadow" TEXT NOT NULL DEFAULT '#B8C6DB',
    "secondary_btn_bg" TEXT NOT NULL DEFAULT '#EAF4FB',
    "secondary_btn_text" TEXT NOT NULL DEFAULT '#2C3E50',
    "secondary_btn_border" TEXT NOT NULL DEFAULT '#B8C6DB',
    "secondary_btn_shadow" TEXT NOT NULL DEFAULT '#B8C6DB',
    "nav_link_color" TEXT NOT NULL DEFAULT '#FFFFFF',
    "nav_link_hover_bg" TEXT NOT NULL DEFAULT '#A7D3F5',
    "badge_bg_color" TEXT NOT NULL DEFAULT '#EAF4FB',
    "badge_border_color" TEXT NOT NULL DEFAULT '#B8C6DB',
    "badge_text_color" TEXT NOT NULL DEFAULT '#2C3E50',
    "section_alt_bg" TEXT NOT NULL DEFAULT '#F4F9FD',
    "cta_section_bg" TEXT NOT NULL DEFAULT '#FFFFFF',
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "public_site_settings_pkey" PRIMARY KEY ("id")
);
