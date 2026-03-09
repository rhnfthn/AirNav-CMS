-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "tools_badge_bg" TEXT NOT NULL DEFAULT '#EAF4FB',
ADD COLUMN     "tools_badge_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "tools_badge_text" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "tools_category_title_text" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "tools_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "tools_header_text" TEXT NOT NULL DEFAULT '#1A202C',
ADD COLUMN     "tools_item_text" TEXT NOT NULL DEFAULT '#2C3E50';
