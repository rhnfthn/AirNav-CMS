-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "contact_badge_bg" TEXT NOT NULL DEFAULT '#EAF4FB',
ADD COLUMN     "contact_badge_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "contact_badge_text" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "contact_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "contact_direct_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "contact_header_text" TEXT NOT NULL DEFAULT '#1A202C';
