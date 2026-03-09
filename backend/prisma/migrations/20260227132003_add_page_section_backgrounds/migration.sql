-- AlterTable
ALTER TABLE "public_site_settings" ADD COLUMN     "about_section_bg" TEXT NOT NULL DEFAULT '#FFFFFF',
ADD COLUMN     "certifications_section_bg" TEXT NOT NULL DEFAULT '#FFFFFF',
ADD COLUMN     "contact_section_bg" TEXT NOT NULL DEFAULT '#F4F9FD',
ADD COLUMN     "experience_section_bg" TEXT NOT NULL DEFAULT '#F4F9FD',
ADD COLUMN     "hero_section_bg" TEXT NOT NULL DEFAULT '#FFFFFF',
ADD COLUMN     "projects_section_bg" TEXT NOT NULL DEFAULT '#F4F9FD',
ADD COLUMN     "tools_section_bg" TEXT NOT NULL DEFAULT '#FFFFFF';
