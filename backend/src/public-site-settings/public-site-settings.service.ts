import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePublicSiteSettingsDto } from './dto/update-public-site-settings.dto';

const DEFAULT_SETTINGS = {
  headerBgColor: '#6FA8DC',
  footerBgColor: '#6FA8DC',
  cardBgColor: '#FFFFFF',
  cardBorderColor: '#B8C6DB',
  cardShadowColor: '#B8C6DB',
  heroPhotoSize: 'medium' as const,
  heroPhotoBorder: '#B8C6DB',
  heroPhotoShadow: '#B8C6DB',
  primaryBtnBg: '#6FA8DC',
  primaryBtnText: '#FFFFFF',
  primaryBtnBorder: '#B8C6DB',
  primaryBtnShadow: '#B8C6DB',
  secondaryBtnBg: '#EAF4FB',
  secondaryBtnText: '#2C3E50',
  secondaryBtnBorder: '#B8C6DB',
  secondaryBtnShadow: '#B8C6DB',
  navLinkColor: '#FFFFFF',
  navLinkHoverBg: '#A7D3F5',
  badgeBgColor: '#EAF4FB',
  badgeBorderColor: '#B8C6DB',
  badgeTextColor: '#2C3E50',
  sectionAltBg: '#F4F9FD',
  ctaSectionBg: '#FFFFFF',
  heroSectionBg: '#FFFFFF',
  aboutSectionBg: '#FFFFFF',
  projectsSectionBg: '#F4F9FD',
  certificationsSectionBg: '#FFFFFF',
  experienceSectionBg: '#F4F9FD',
  toolsSectionBg: '#FFFFFF',
  contactSectionBg: '#F4F9FD',
  // About page detailed
  aboutBadgeBg: '#EAF4FB',
  aboutBadgeBorder: '#B8C6DB',
  aboutBadgeText: '#2C3E50',
  aboutTitleBg: '#6FA8DC',
  aboutTitleBorder: '#B8C6DB',
  aboutTitleText: '#FFFFFF',
  aboutTitleShadow: '#B8C6DB',
  aboutPhotoBorder: '#B8C6DB',
  aboutPhotoShadow: '#B8C6DB',
  aboutTextColor: '#4A5568',
  aboutInfoHeaderText: '#1A202C',
  aboutInfoContentText: '#4A5568',
  aboutEducationHeaderText: '#4A5568',
  aboutEducationContentText: '#2C3E50',
  aboutCardBg: '#FFFFFF',
  aboutCardBorder: '#B8C6DB',
  aboutCardShadow: '#B8C6DB',
  aboutOuterCardBg: '#F4F9FD',
  aboutOuterCardBorder: '#B8C6DB',
  aboutOuterCardShadow: '#B8C6DB',
  aboutSkillsCardBg: '#FFFFFF',
  aboutSkillsCardBorder: '#B8C6DB',
  aboutSkillsCardShadow: '#B8C6DB',
  aboutSkillBadgeBg: '#EAF4FB',
  aboutSkillBadgeBorder: '#B8C6DB',
  aboutSkillBadgeText: '#2C3E50',
  aboutBtnBg: '#EAF4FB',
  aboutBtnText: '#2C3E50',
  aboutBtnBorder: '#B8C6DB',
  aboutBtnShadow: '#B8C6DB',
  // Projects page detailed
  projectBadgeBg: '#EAF4FB',
  projectBadgeBorder: '#B8C6DB',
  projectBadgeText: '#2C3E50',
  projectsHeaderText: '#1A202C',
  projectsContentText: '#4A5568',
  projectFilterBadgeBg: '#FFFFFF',
  projectFilterBadgeBorder: '#B8C6DB',
  projectFilterBadgeText: '#2C3E50',
  projectFilterBadgeShadow: '#B8C6DB',
  projectCardBg: '#FFFFFF',
  projectCardBorder: '#B8C6DB',
  projectCardShadow: '#B8C6DB',
  projectPhotoHeight: 'medium' as const,
  projectPopupBg: '#FFFFFF',
  projectPopupBorder: '#B8C6DB',
  projectPopupShadow: '#B8C6DB',
  projectBtnPrimaryBg: '#6FA8DC',
  projectBtnPrimaryText: '#FFFFFF',
  projectBtnPrimaryBorder: '#B8C6DB',
  projectBtnPrimaryShadow: '#B8C6DB',
  projectBtnSecondaryBg: '#EAF4FB',
  projectBtnSecondaryText: '#2C3E50',
  projectBtnSecondaryBorder: '#B8C6DB',
  projectBtnSecondaryShadow: '#B8C6DB',
  // Certifications page detailed
  certBadgeBg: '#EAF4FB',
  certBadgeBorder: '#B8C6DB',
  certBadgeText: '#2C3E50',
  certYearBadgeBg: '#EAF4FB',
  certYearBadgeBorder: '#B8C6DB',
  certYearBadgeText: '#2C3E50',
  certCardBg: '#FFFFFF',
  certCardBorder: '#B8C6DB',
  certCardShadow: '#B8C6DB',
  certCardHeaderText: '#1A202C',
  certCardContentText: '#4A5568',
  certBtnBg: '#6FA8DC',
  certBtnText: '#2C3E50',
  certBtnBorder: '#B8C6DB',
  certBtnHoverText: '#6FA8DC',
  // Experience page detailed
  experienceSectionHeaderText: '#1A202C',
  experienceSectionContentText: '#4A5568',
  expBadgeBg: '#EAF4FB',
  expBadgeBorder: '#B8C6DB',
  expBadgeText: '#2C3E50',
  expCardBg: '#FFFFFF',
  expCardBorder: '#B8C6DB',
  expCardShadow: '#B8C6DB',
  expCardBadgeBg: '#EAF4FB',
  expCardBadgeBorder: '#B8C6DB',
  expCardBadgeText: '#2C3E50',
  expCardHeaderText: '#1A202C',
  expCardSubHeaderText: '#4A5568',
  expCardContentText: '#4A5568',
  expTimelineDotBg: '#6FA8DC',
  expTimelineDotBorder: '#B8C6DB',
  expTimelineLineBg: '#B8C6DB',
  // Tools page detailed
  toolsBadgeBg: '#EAF4FB',
  toolsBadgeBorder: '#B8C6DB',
  toolsBadgeText: '#2C3E50',
  toolsHeaderText: '#1A202C',
  toolsContentText: '#4A5568',
  toolsCardBg: '#FFFFFF',
  toolsCardBorder: '#B8C6DB',
  toolsCardShadow: '#B8C6DB',
  toolsCategoryTitleText: '#2C3E50',
  toolsItemText: '#2C3E50',
  toolsTextColor: '#2C3E50',
  toolsIconBg: '#F4F9FD',
  toolsIconBorder: '#B8C6DB',
  toolsCategoryDotBg: '#6FA8DC',
  toolsCategoryDotBorder: '#B8C6DB',
  // Contact page detailed
  contactBadgeBg: '#EAF4FB',
  contactBadgeBorder: '#B8C6DB',
  contactBadgeText: '#2C3E50',
  contactHeaderText: '#1A202C',
  contactContentText: '#4A5568',
  contactCardBg: '#FFFFFF',
  contactCardBorder: '#B8C6DB',
  contactCardShadow: '#B8C6DB',
  contactTextColor: '#4A5568',
  contactLabelColor: '#2C3E50',
  contactInputBg: '#FFFFFF',
  contactInputBorder: '#B8C6DB',
  contactInputText: '#2C3E50',
  contactBtnBg: '#6FA8DC',
  contactBtnText: '#FFFFFF',
  contactBtnBorder: '#B8C6DB',
  contactBtnShadow: '#B8C6DB',
  contactDirectText: '#4A5568',
  contactSocialBtnBg: '#EAF4FB',
  contactSocialBtnText: '#2C3E50',
  contactSocialBtnBorder: '#B8C6DB',
  contactSocialBtnShadow: '#B8C6DB',

  // Header section detailed
  headerTextColor: '#FFFFFF',
  headerHoverBg: '#A7D3F5',
  headerHoverText: '#2C3E50',
  headerLogoBg: '#6FA8DC',
  headerLogoBorder: '#B8C6DB',
  headerLogoText: '#FFFFFF',
  headerLogoShadow: '#B8C6DB',
  sectionDividerColor: '#B8C6DB',

  // Home Hero section detailed
  homeHeroCardWidth: 'medium' as const,
  homeHeroCardBg: '#FFFFFF',
  homeHeroCardBorder: '#B8C6DB',
  homeHeroCardShadow: '#B8C6DB',
  homeHeroBadgeBg: '#EAF4FB',
  homeHeroBadgeBorder: '#B8C6DB',
  homeHeroBadgeText: '#2C3E50',
  homeHeroHeaderText: '#1A202C',
  homeHeroContentText: '#4A5568',
  homeHeroExpBadgeBg: '#6FA8DC',
  homeHeroExpBadgeBorder: '#B8C6DB',
  homeHeroExpBadgeText: '#FFFFFF',
  homeHeroExpBadgeShadow: '#B8C6DB',
  homeHeroBtnBg: '#6FA8DC',
  homeHeroBtnText: '#FFFFFF',
  homeHeroBtnBorder: '#B8C6DB',
  homeHeroBtnShadow: '#B8C6DB',
  homeHeroAnotherDesignUrl: '',

  // Home About section detailed
  homeAboutBadgeBg: '#EAF4FB',
  homeAboutBadgeBorder: '#B8C6DB',
  homeAboutBadgeText: '#2C3E50',
  homeAboutHeaderText: '#1A202C',
  homeAboutContentText: '#4A5568',
  homeAboutInfoBadgeBg: '#EAF4FB',
  homeAboutInfoBadgeBorder: '#B8C6DB',
  homeAboutInfoBadgeText: '#2C3E50',
  homeAboutStatCardBg: '#FFFFFF',
  homeAboutStatCardBorder: '#B8C6DB',
  homeAboutStatCardShadow: '#B8C6DB',
  homeAboutStatNumberText: '#1A202C',
  homeAboutStatLabelText: '#4A5568',
  homeAboutBtnBg: '#EAF4FB',
  homeAboutBtnText: '#2C3E50',
  homeAboutBtnBorder: '#B8C6DB',
  homeAboutBtnShadow: '#B8C6DB',

  // Home Portfolio section detailed
  homePortfolioBadgeBg: '#EAF4FB',
  homePortfolioBadgeBorder: '#B8C6DB',
  homePortfolioBadgeText: '#2C3E50',
  homePortfolioHeaderText: '#1A202C',
  homePortfolioCardBg: '#FFFFFF',
  homePortfolioCardBorder: '#B8C6DB',
  homePortfolioCardShadow: '#B8C6DB',
  homePortfolioCardHeaderText: '#000000',
  homePortfolioCardContentText: '#FFFFFF',
  homePortfolioTechBadgeBg: '#EAF4FB',
  homePortfolioTechBadgeBorder: '#B8C6DB',
  homePortfolioTechBadgeText: '#2C3E50',
  homePortfolioBtnBg: '#EAF4FB',
  homePortfolioBtnText: '#2C3E50',
  homePortfolioBtnBorder: '#B8C6DB',
  homePortfolioBtnShadow: '#B8C6DB',

  // Home Certifications section detailed
  homeCertBadgeBg: '#EAF4FB',
  homeCertBadgeBorder: '#B8C6DB',
  homeCertBadgeText: '#2C3E50',
  homeCertHeaderText: '#1A202C',
  homeCertCardBg: '#37FF00',
  homeCertCardBorder: '#000000',
  homeCertCardShadow: '#000000',
  homeCertCardHeaderText: '#FFFFFF',
  homeCertCardContentText: '#000000',
  homeCertViewBtnBg: '#0095FF',
  homeCertViewBtnText: '#0080FF',
  homeCertViewBtnBorder: '#B8C6DB',
  homeCertViewBtnShadow: '#B8C6DB',
  homeCertAllBtnBg: '#000000',
  homeCertAllBtnText: '#000000',
  homeCertAllBtnBorder: '#000000',
  homeCertAllBtnShadow: '#000000',

  // Home Experience section detailed
  homeExpBadgeBg: '#EAF4FB',
  homeExpBadgeBorder: '#B8C6DB',
  homeExpBadgeText: '#2C3E50',
  homeExpHeaderText: '#0055FF',
  homeExpCardBg: '#FFFFFF',
  homeExpCardBorder: '#B8C6DB',
  homeExpCardShadow: '#B8C6DB',
  homeExpCardHeaderText: '#FFFFFF',
  homeExpCardContentText: '#FFFFFF',
  homeExpBtnBg: '#EAF4FB',
  homeExpBtnText: '#2C3E50',
  homeExpBtnBorder: '#B8C6DB',
  homeExpBtnShadow: '#B8C6DB',

  // Home Tools section detailed
  homeToolsBadgeBg: '#EAF4FB',
  homeToolsBadgeBorder: '#B8C6DB',
  homeToolsBadgeText: '#2C3E50',
  homeToolsHeaderText: '#000000',
  homeToolsCardBg: '#FFFFFF',
  homeToolsCardBorder: '#B8C6DB',
  homeToolsCardShadow: '#B8C6DB',
  homeToolsCardHeaderText: '#FFFFFF',
  homeToolsToolBadgeBg: '#EAF4FB',
  homeToolsToolBadgeBorder: '#B8C6DB',
  homeToolsToolBadgeText: '#2C3E50',
  homeToolsBtnBg: '#EAF4FB',
  homeToolsBtnText: '#2C3E50',
  homeToolsBtnBorder: '#B8C6DB',
  homeToolsBtnShadow: '#B8C6DB',

  // Home CTA section detailed
  homeCtaHeaderText: '#1A202C',
  homeCtaContentText: '#4A5568',
  homeCtaBtnBg: '#6FA8DC',
  homeCtaBtnText: '#FFFFFF',
  homeCtaBtnBorder: '#B8C6DB',
  homeCtaBtnShadow: '#B8C6DB',

  // Footer section detailed
  footerHeaderText: '#FFFFFF',
  footerContentText: '#E2E8F0',
  footerCopyrightText: '#CBD5E0',
  footerLogoBg: '#FFFFFF',
  footerLogoBorder: '#B8C6DB',
  footerLogoShadow: '#B8C6DB',
  footerSocialBtnBg: '#FFFFFF',
  footerSocialBtnBorder: '#B8C6DB',
  footerSocialBtnText: '#2C3E50',
  footerSocialBtnShadow: '#B8C6DB',
};

@Injectable()
export class PublicSiteSettingsService {
  constructor(private readonly prisma: PrismaService) {}

  private stripUndefined<T extends Record<string, any>>(obj: T): Partial<T> {
    const clean: Record<string, any> = {};
    for (const key of Object.keys(obj)) {
      const value = (obj as any)[key];
      if (value !== undefined) clean[key] = value;
    }
    return clean as Partial<T>;
  }

  async getSettings() {
    const existing = await this.prisma.publicSiteSettings.findFirst();
    if (existing) {
      // Backfill newly added columns for older rows.
      const patch: Record<string, any> = {};
      for (const [key, defaultValue] of Object.entries(DEFAULT_SETTINGS)) {
        const currentValue = (existing as any)[key];
        if (currentValue === null || currentValue === undefined) {
          patch[key] = defaultValue;
        }
      }

      if (Object.keys(patch).length === 0) return existing;

      return this.prisma.publicSiteSettings.update({
        where: { id: existing.id },
        data: patch,
      });
    }

    // Create default settings if none exist
    return this.prisma.publicSiteSettings.create({
      data: DEFAULT_SETTINGS,
    });
  }

  async updateSettings(dto: UpdatePublicSiteSettingsDto) {
    const existing = await this.prisma.publicSiteSettings.findFirst();

    // DTO instances can contain many enumerable class fields initialized to `undefined`.
    // Prisma (with strictUndefinedChecks) throws if `undefined` reaches the client.
    const data = this.stripUndefined({ ...(dto as any) });

    if (!existing) {
      return this.prisma.publicSiteSettings.create({
        data: { ...DEFAULT_SETTINGS, ...data },
      });
    }

    if (Object.keys(data).length === 0) return existing;

    return this.prisma.publicSiteSettings.update({
      where: { id: existing.id },
      data,
    });
  }

  getDefaults() {
    return DEFAULT_SETTINGS;
  }
}
