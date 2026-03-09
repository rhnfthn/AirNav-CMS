-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "cert_btn_hover_text" TEXT NOT NULL DEFAULT '#6FA8DC',
ADD COLUMN     "cert_card_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "cert_card_header_text" TEXT NOT NULL DEFAULT '#1A202C',
ADD COLUMN     "cert_year_badge_bg" TEXT NOT NULL DEFAULT '#EAF4FB',
ADD COLUMN     "cert_year_badge_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "cert_year_badge_text" TEXT NOT NULL DEFAULT '#2C3E50';
