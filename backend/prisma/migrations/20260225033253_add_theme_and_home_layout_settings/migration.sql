-- CreateEnum
CREATE TYPE "hero_image_position" AS ENUM ('left', 'right', 'center');

-- CreateEnum
CREATE TYPE "hero_layout" AS ENUM ('image_text', 'text_image', 'centered');

-- CreateTable
CREATE TABLE "theme_settings" (
    "id" TEXT NOT NULL,
    "primary_background_color" TEXT NOT NULL,
    "sidebar_background_color" TEXT NOT NULL,
    "header_background_color" TEXT NOT NULL,
    "footer_background_color" TEXT NOT NULL,
    "primary_text_color" TEXT NOT NULL,
    "secondary_text_color" TEXT NOT NULL,
    "button_color" TEXT NOT NULL,
    "border_color" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "theme_settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "home_layout_settings" (
    "id" TEXT NOT NULL,
    "hero_image_position" "hero_image_position" NOT NULL DEFAULT 'left',
    "hero_layout" "hero_layout" NOT NULL DEFAULT 'image_text',
    "sections_order" JSONB NOT NULL,
    "show_featured_projects" BOOLEAN NOT NULL DEFAULT true,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "home_layout_settings_pkey" PRIMARY KEY ("id")
);
