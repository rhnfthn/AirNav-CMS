/*
  Warnings:

  - You are about to drop the column `footer_background_color` on the `theme_settings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "theme_settings" DROP COLUMN "footer_background_color",
ADD COLUMN     "login_back_to_website_text" TEXT NOT NULL DEFAULT '← Back to website',
ADD COLUMN     "login_button_bg_color" TEXT NOT NULL DEFAULT '#6FA8DC',
ADD COLUMN     "login_button_border_color" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "login_button_label" TEXT NOT NULL DEFAULT 'Login',
ADD COLUMN     "login_button_shadow_color" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "login_card_bg_color" TEXT NOT NULL DEFAULT '#EAF4FB',
ADD COLUMN     "login_card_border_color" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "login_card_shadow_color" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "login_content_text_color" TEXT NOT NULL DEFAULT '#64748B',
ADD COLUMN     "login_header_text_color" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "login_label_text_color" TEXT NOT NULL DEFAULT '#2C3E50',
ADD COLUMN     "login_logo_bg_color" TEXT NOT NULL DEFAULT '#A7D3F5',
ADD COLUMN     "login_logo_border_color" TEXT NOT NULL DEFAULT '#B8C6DB',
ADD COLUMN     "login_logo_shadow_color" TEXT NOT NULL DEFAULT '#B8C6DB';
