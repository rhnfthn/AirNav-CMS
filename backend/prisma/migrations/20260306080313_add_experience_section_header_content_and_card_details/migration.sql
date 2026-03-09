-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "exp_card_badge_bg" TEXT NOT NULL DEFAULT '#EAF4FB',
ADD COLUMN     "exp_card_badge_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "exp_card_badge_text" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "exp_card_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "exp_card_header_text" TEXT NOT NULL DEFAULT '#1A202C',
ADD COLUMN     "exp_card_sub_header_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "experience_section_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "experience_section_header_text" TEXT NOT NULL DEFAULT '#1A202C';
