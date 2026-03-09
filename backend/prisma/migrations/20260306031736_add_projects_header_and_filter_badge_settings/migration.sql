-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "project_filter_badge_bg" TEXT NOT NULL DEFAULT '#FFFFFF',
ADD COLUMN     "project_filter_badge_border" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "project_filter_badge_shadow" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "project_filter_badge_text" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "projects_content_text" TEXT NOT NULL DEFAULT '#4A5568',
ADD COLUMN     "projects_header_text" TEXT NOT NULL DEFAULT '#1A202C';
