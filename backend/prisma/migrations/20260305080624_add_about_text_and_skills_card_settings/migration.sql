-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "about_education_content_text" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "about_education_header_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "about_info_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "about_info_header_text" TEXT NOT NULL DEFAULT '#1A202C',
ADD COLUMN     "about_skills_card_bg" TEXT NOT NULL DEFAULT '#FFFFFF',
ADD COLUMN     "about_skills_card_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "about_skills_card_shadow" TEXT NOT NULL DEFAULT '#B8C6DB';
