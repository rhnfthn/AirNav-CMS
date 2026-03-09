import { defineStore } from 'pinia';

export type PhotoSize = 'small' | 'medium' | 'large';

export interface PublicSiteSettings {
  id?: string;
  headerBgColor: string;
  footerBgColor: string;
  cardBgColor: string;
  cardBorderColor: string;
  cardShadowColor: string;
  heroPhotoSize: PhotoSize;
  heroPhotoBorder: string;
  heroPhotoShadow: string;
  primaryBtnBg: string;
  primaryBtnText: string;
  primaryBtnBorder: string;
  primaryBtnShadow: string;
  secondaryBtnBg: string;
  secondaryBtnText: string;
  secondaryBtnBorder: string;
  secondaryBtnShadow: string;
  navLinkColor: string;
  navLinkHoverBg: string;
  badgeBgColor: string;
  badgeBorderColor: string;
  badgeTextColor: string;
  sectionAltBg: string;
  ctaSectionBg: string;
  // Page-specific section backgrounds
  heroSectionBg: string;
  aboutSectionBg: string;
  projectsSectionBg: string;
  certificationsSectionBg: string;
  experienceSectionBg: string;
  toolsSectionBg: string;
  contactSectionBg: string;
  // About page detailed
  aboutBadgeBg: string;
  aboutBadgeBorder: string;
  aboutBadgeText: string;
  aboutTitleBg: string;
  aboutTitleBorder: string;
  aboutTitleText: string;
  aboutTitleShadow: string;
  aboutPhotoBorder: string;
  aboutPhotoShadow: string;
  aboutTextColor: string;
  aboutInfoHeaderText: string;
  aboutInfoContentText: string;
  aboutEducationHeaderText: string;
  aboutEducationContentText: string;
  aboutCardBg: string;
  aboutCardBorder: string;
  aboutCardShadow: string;
  aboutOuterCardBg: string;
  aboutOuterCardBorder: string;
  aboutOuterCardShadow: string;
  aboutSkillsCardBg: string;
  aboutSkillsCardBorder: string;
  aboutSkillsCardShadow: string;
  aboutSkillBadgeBg: string;
  aboutSkillBadgeBorder: string;
  aboutSkillBadgeText: string;
  aboutBtnBg: string;
  aboutBtnText: string;
  aboutBtnBorder: string;
  aboutBtnShadow: string;
  // Projects page detailed
  projectBadgeBg: string;
  projectBadgeBorder: string;
  projectBadgeText: string;
  projectsHeaderText: string;
  projectsContentText: string;
  projectFilterBadgeBg: string;
  projectFilterBadgeBorder: string;
  projectFilterBadgeText: string;
  projectFilterBadgeShadow: string;
  projectCardBg: string;
  projectCardBorder: string;
  projectCardShadow: string;
  projectPhotoHeight: PhotoSize;
  projectPopupBg: string;
  projectPopupBorder: string;
  projectPopupShadow: string;
  projectBtnPrimaryBg: string;
  projectBtnPrimaryText: string;
  projectBtnPrimaryBorder: string;
  projectBtnPrimaryShadow: string;
  projectBtnSecondaryBg: string;
  projectBtnSecondaryText: string;
  projectBtnSecondaryBorder: string;
  projectBtnSecondaryShadow: string;
  // Certifications page detailed
  certBadgeBg: string;
  certBadgeBorder: string;
  certBadgeText: string;
  certYearBadgeBg: string;
  certYearBadgeBorder: string;
  certYearBadgeText: string;
  certCardBg: string;
  certCardBorder: string;
  certCardShadow: string;
  certCardHeaderText: string;
  certCardContentText: string;
  certBtnBg: string;
  certBtnText: string;
  certBtnBorder: string;
  certBtnHoverText: string;
  // Experience page detailed
  experienceSectionHeaderText: string;
  experienceSectionContentText: string;
  expBadgeBg: string;
  expBadgeBorder: string;
  expBadgeText: string;
  expCardBg: string;
  expCardBorder: string;
  expCardShadow: string;
  expCardBadgeBg: string;
  expCardBadgeBorder: string;
  expCardBadgeText: string;
  expCardHeaderText: string;
  expCardSubHeaderText: string;
  expCardContentText: string;
  expTimelineDotBg: string;
  expTimelineDotBorder: string;
  expTimelineLineBg: string;
  // Tools page detailed
  toolsBadgeBg: string;
  toolsBadgeBorder: string;
  toolsBadgeText: string;
  toolsHeaderText: string;
  toolsContentText: string;
  toolsCardBg: string;
  toolsCardBorder: string;
  toolsCardShadow: string;
  toolsCategoryTitleText: string;
  toolsItemText: string;
  toolsTextColor: string;
  toolsIconBg: string;
  toolsIconBorder: string;
  toolsCategoryDotBg: string;
  toolsCategoryDotBorder: string;
  // Contact page detailed
  contactBadgeBg: string;
  contactBadgeBorder: string;
  contactBadgeText: string;
  contactHeaderText: string;
  contactContentText: string;
  contactCardBg: string;
  contactCardBorder: string;
  contactCardShadow: string;
  contactTextColor: string;
  contactLabelColor: string;
  contactInputBg: string;
  contactInputBorder: string;
  contactInputText: string;
  contactBtnBg: string;
  contactBtnText: string;
  contactBtnBorder: string;
  contactBtnShadow: string;
  contactDirectText: string;
  contactSocialBtnBg: string;
  contactSocialBtnText: string;
  contactSocialBtnBorder: string;
  contactSocialBtnShadow: string;
  // Header section detailed
  headerTextColor: string;
  headerHoverBg: string;
  headerHoverText: string;
  headerLogoBg: string;
  headerLogoBorder: string;
  headerLogoText: string;
  headerLogoShadow: string;
  sectionDividerColor: string;
  // Home Hero section detailed
  homeHeroCardWidth: PhotoSize;
  homeHeroCardBg: string;
  homeHeroCardBorder: string;
  homeHeroCardShadow: string;
  homeHeroBadgeBg: string;
  homeHeroBadgeBorder: string;
  homeHeroBadgeText: string;
  homeHeroHeaderText: string;
  homeHeroContentText: string;
  homeHeroExpBadgeBg: string;
  homeHeroExpBadgeBorder: string;
  homeHeroExpBadgeText: string;
  homeHeroExpBadgeShadow: string;
  homeHeroBtnBg: string;
  homeHeroBtnText: string;
  homeHeroBtnBorder: string;
  homeHeroBtnShadow: string;
  // Home About section detailed
  homeAboutBadgeBg: string;
  homeAboutBadgeBorder: string;
  homeAboutBadgeText: string;
  homeAboutHeaderText: string;
  homeAboutContentText: string;
  homeAboutInfoBadgeBg: string;
  homeAboutInfoBadgeBorder: string;
  homeAboutInfoBadgeText: string;
  homeAboutStatCardBg: string;
  homeAboutStatCardBorder: string;
  homeAboutStatCardShadow: string;
  homeAboutStatNumberText: string;
  homeAboutStatLabelText: string;
  homeAboutBtnBg: string;
  homeAboutBtnText: string;
  homeAboutBtnBorder: string;
  homeAboutBtnShadow: string;
  // Home Portfolio section detailed
  homePortfolioBadgeBg: string;
  homePortfolioBadgeBorder: string;
  homePortfolioBadgeText: string;
  homePortfolioHeaderText: string;
  homePortfolioCardBg: string;
  homePortfolioCardBorder: string;
  homePortfolioCardShadow: string;
  homePortfolioCardHeaderText: string;
  homePortfolioCardContentText: string;
  homePortfolioTechBadgeBg: string;
  homePortfolioTechBadgeBorder: string;
  homePortfolioTechBadgeText: string;
  homePortfolioBtnBg: string;
  homePortfolioBtnText: string;
  homePortfolioBtnBorder: string;
  homePortfolioBtnShadow: string;
  // Home Certifications section detailed
  homeCertBadgeBg: string;
  homeCertBadgeBorder: string;
  homeCertBadgeText: string;
  homeCertHeaderText: string;
  homeCertCardBg: string;
  homeCertCardBorder: string;
  homeCertCardShadow: string;
  homeCertCardHeaderText: string;
  homeCertCardContentText: string;
  homeCertViewBtnBg: string;
  homeCertViewBtnText: string;
  homeCertViewBtnBorder: string;
  homeCertViewBtnShadow: string;
  homeCertAllBtnBg: string;
  homeCertAllBtnText: string;
  homeCertAllBtnBorder: string;
  homeCertAllBtnShadow: string;
  // Home Experience section detailed
  homeExpBadgeBg: string;
  homeExpBadgeBorder: string;
  homeExpBadgeText: string;
  homeExpHeaderText: string;
  homeExpCardBg: string;
  homeExpCardBorder: string;
  homeExpCardShadow: string;
  homeExpCardHeaderText: string;
  homeExpCardContentText: string;
  homeExpBtnBg: string;
  homeExpBtnText: string;
  homeExpBtnBorder: string;
  homeExpBtnShadow: string;
  // Home Tools section detailed
  homeToolsBadgeBg: string;
  homeToolsBadgeBorder: string;
  homeToolsBadgeText: string;
  homeToolsHeaderText: string;
  homeToolsCardBg: string;
  homeToolsCardBorder: string;
  homeToolsCardShadow: string;
  homeToolsCardHeaderText: string;
  homeToolsToolBadgeBg: string;
  homeToolsToolBadgeBorder: string;
  homeToolsToolBadgeText: string;
  homeToolsBtnBg: string;
  homeToolsBtnText: string;
  homeToolsBtnBorder: string;
  homeToolsBtnShadow: string;
  // Home CTA section detailed
  homeCtaHeaderText: string;
  homeCtaContentText: string;
  homeCtaBtnBg: string;
  homeCtaBtnText: string;
  homeCtaBtnBorder: string;
  homeCtaBtnShadow: string;
  // Footer section detailed
  footerHeaderText: string;
  footerContentText: string;
  footerCopyrightText: string;
  footerLogoBg: string;
  footerLogoBorder: string;
  footerLogoShadow: string;
  footerSocialBtnBg: string;
  footerSocialBtnBorder: string;
  footerSocialBtnText: string;
  footerSocialBtnShadow: string;
  updatedAt?: string;
}

const DEFAULT_SETTINGS: PublicSiteSettings = {
  headerBgColor: '#6FA8DC',
  footerBgColor: '#6FA8DC',
  cardBgColor: '#FFFFFF',
  cardBorderColor: '#B8C6DB',
  cardShadowColor: '#B8C6DB',
  heroPhotoSize: 'medium',
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
  projectPhotoHeight: 'medium',
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
  homeHeroCardWidth: 'medium',
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

const CHANNEL_NAME = 'airnav-public-site-settings';

export const usePublicSiteSettingsStore = defineStore('publicSiteSettings', {
  state: () => ({
    settings: { ...DEFAULT_SETTINGS } as PublicSiteSettings,
    loaded: false,
    syncReady: false,
  }),

  getters: {
    cssVars(): Record<string, string> {
      const s = this.settings;
      return {
        '--pss-header-bg': s.headerBgColor,
        '--pss-footer-bg': s.footerBgColor,
        '--pss-card-bg': s.cardBgColor,
        '--pss-card-border': s.cardBorderColor,
        '--pss-card-shadow': s.cardShadowColor,
        '--pss-hero-photo-border': s.heroPhotoBorder,
        '--pss-hero-photo-shadow': s.heroPhotoShadow,
        '--pss-primary-btn-bg': s.primaryBtnBg,
        '--pss-primary-btn-text': s.primaryBtnText,
        '--pss-primary-btn-border': s.primaryBtnBorder,
        '--pss-primary-btn-shadow': s.primaryBtnShadow,
        '--pss-secondary-btn-bg': s.secondaryBtnBg,
        '--pss-secondary-btn-text': s.secondaryBtnText,
        '--pss-secondary-btn-border': s.secondaryBtnBorder,
        '--pss-secondary-btn-shadow': s.secondaryBtnShadow,
        '--pss-nav-link-color': s.navLinkColor,
        '--pss-nav-link-hover-bg': s.navLinkHoverBg,
        '--pss-badge-bg': s.badgeBgColor,
        '--pss-badge-border': s.badgeBorderColor,
        '--pss-badge-text': s.badgeTextColor,
        '--pss-section-alt-bg': s.sectionAltBg,
        '--pss-cta-section-bg': s.ctaSectionBg,
        '--pss-hero-section-bg': s.heroSectionBg,
        '--pss-about-section-bg': s.aboutSectionBg,
        '--pss-projects-section-bg': s.projectsSectionBg,
        '--pss-certifications-section-bg': s.certificationsSectionBg,
        '--pss-experience-section-bg': s.experienceSectionBg,
        '--pss-tools-section-bg': s.toolsSectionBg,
        '--pss-contact-section-bg': s.contactSectionBg,
        // About page detailed
        '--pss-about-badge-bg': s.aboutBadgeBg,
        '--pss-about-badge-border': s.aboutBadgeBorder,
        '--pss-about-badge-text': s.aboutBadgeText,
        '--pss-about-title-bg': s.aboutTitleBg,
        '--pss-about-title-border': s.aboutTitleBorder,
        '--pss-about-title-text': s.aboutTitleText,
        '--pss-about-title-shadow': s.aboutTitleShadow,
        '--pss-about-photo-border': s.aboutPhotoBorder,
        '--pss-about-photo-shadow': s.aboutPhotoShadow,
        '--pss-about-text-color': s.aboutTextColor,
        '--pss-about-info-header-text': s.aboutInfoHeaderText,
        '--pss-about-info-content-text': s.aboutInfoContentText,
        '--pss-about-education-header-text': s.aboutEducationHeaderText,
        '--pss-about-education-content-text': s.aboutEducationContentText,
        '--pss-about-card-bg': s.aboutCardBg,
        '--pss-about-card-border': s.aboutCardBorder,
        '--pss-about-card-shadow': s.aboutCardShadow,
        '--pss-about-outer-card-bg': s.aboutOuterCardBg,
        '--pss-about-outer-card-border': s.aboutOuterCardBorder,
        '--pss-about-outer-card-shadow': s.aboutOuterCardShadow,
        '--pss-about-skills-card-bg': s.aboutSkillsCardBg,
        '--pss-about-skills-card-border': s.aboutSkillsCardBorder,
        '--pss-about-skills-card-shadow': s.aboutSkillsCardShadow,
        '--pss-about-skill-badge-bg': s.aboutSkillBadgeBg,
        '--pss-about-skill-badge-border': s.aboutSkillBadgeBorder,
        '--pss-about-skill-badge-text': s.aboutSkillBadgeText,
        '--pss-about-btn-bg': s.aboutBtnBg,
        '--pss-about-btn-text': s.aboutBtnText,
        '--pss-about-btn-border': s.aboutBtnBorder,
        '--pss-about-btn-shadow': s.aboutBtnShadow,
        // Projects page detailed
        '--pss-project-badge-bg': s.projectBadgeBg,
        '--pss-project-badge-border': s.projectBadgeBorder,
        '--pss-project-badge-text': s.projectBadgeText,
        '--pss-projects-header-text': s.projectsHeaderText,
        '--pss-projects-content-text': s.projectsContentText,
        '--pss-project-filter-badge-bg': s.projectFilterBadgeBg,
        '--pss-project-filter-badge-border': s.projectFilterBadgeBorder,
        '--pss-project-filter-badge-text': s.projectFilterBadgeText,
        '--pss-project-filter-badge-shadow': s.projectFilterBadgeShadow,
        '--pss-project-card-bg': s.projectCardBg,
        '--pss-project-card-border': s.projectCardBorder,
        '--pss-project-card-shadow': s.projectCardShadow,
        '--pss-project-popup-bg': s.projectPopupBg,
        '--pss-project-popup-border': s.projectPopupBorder,
        '--pss-project-popup-shadow': s.projectPopupShadow,
        '--pss-project-btn-primary-bg': s.projectBtnPrimaryBg,
        '--pss-project-btn-primary-text': s.projectBtnPrimaryText,
        '--pss-project-btn-primary-border': s.projectBtnPrimaryBorder,
        '--pss-project-btn-primary-shadow': s.projectBtnPrimaryShadow,
        '--pss-project-btn-secondary-bg': s.projectBtnSecondaryBg,
        '--pss-project-btn-secondary-text': s.projectBtnSecondaryText,
        '--pss-project-btn-secondary-border': s.projectBtnSecondaryBorder,
        '--pss-project-btn-secondary-shadow': s.projectBtnSecondaryShadow,
        // Certifications page detailed
        '--pss-cert-badge-bg': s.certBadgeBg,
        '--pss-cert-badge-border': s.certBadgeBorder,
        '--pss-cert-badge-text': s.certBadgeText,
        '--pss-cert-year-badge-bg': s.certYearBadgeBg,
        '--pss-cert-year-badge-border': s.certYearBadgeBorder,
        '--pss-cert-year-badge-text': s.certYearBadgeText,
        '--pss-cert-card-bg': s.certCardBg,
        '--pss-cert-card-border': s.certCardBorder,
        '--pss-cert-card-shadow': s.certCardShadow,
        '--pss-cert-card-header-text': s.certCardHeaderText,
        '--pss-cert-card-content-text': s.certCardContentText,
        '--pss-cert-btn-bg': s.certBtnBg,
        '--pss-cert-btn-text': s.certBtnText,
        '--pss-cert-btn-border': s.certBtnBorder,
        '--pss-cert-btn-hover-text': s.certBtnHoverText,
        // Experience page detailed
        '--pss-experience-section-header-text': s.experienceSectionHeaderText,
        '--pss-experience-section-content-text': s.experienceSectionContentText,
        '--pss-exp-badge-bg': s.expBadgeBg,
        '--pss-exp-badge-border': s.expBadgeBorder,
        '--pss-exp-badge-text': s.expBadgeText,
        '--pss-exp-card-bg': s.expCardBg,
        '--pss-exp-card-border': s.expCardBorder,
        '--pss-exp-card-shadow': s.expCardShadow,
        '--pss-exp-card-badge-bg': s.expCardBadgeBg,
        '--pss-exp-card-badge-border': s.expCardBadgeBorder,
        '--pss-exp-card-badge-text': s.expCardBadgeText,
        '--pss-exp-card-header-text': s.expCardHeaderText,
        '--pss-exp-card-sub-header-text': s.expCardSubHeaderText,
        '--pss-exp-card-content-text': s.expCardContentText,
        '--pss-exp-timeline-dot-bg': s.expTimelineDotBg,
        '--pss-exp-timeline-dot-border': s.expTimelineDotBorder,
        '--pss-exp-timeline-line-bg': s.expTimelineLineBg,
        // Tools page detailed
        '--pss-tools-badge-bg': s.toolsBadgeBg,
        '--pss-tools-badge-border': s.toolsBadgeBorder,
        '--pss-tools-badge-text': s.toolsBadgeText,
        '--pss-tools-header-text': s.toolsHeaderText,
        '--pss-tools-content-text': s.toolsContentText,
        '--pss-tools-card-bg': s.toolsCardBg,
        '--pss-tools-card-border': s.toolsCardBorder,
        '--pss-tools-card-shadow': s.toolsCardShadow,
        '--pss-tools-category-title-text': s.toolsCategoryTitleText,
        '--pss-tools-item-text': s.toolsItemText,
        '--pss-tools-text-color': s.toolsTextColor,
        '--pss-tools-icon-bg': s.toolsIconBg,
        '--pss-tools-icon-border': s.toolsIconBorder,
        '--pss-tools-category-dot-bg': s.toolsCategoryDotBg,
        '--pss-tools-category-dot-border': s.toolsCategoryDotBorder,
        // Contact page detailed
        '--pss-contact-badge-bg': s.contactBadgeBg,
        '--pss-contact-badge-border': s.contactBadgeBorder,
        '--pss-contact-badge-text': s.contactBadgeText,
        '--pss-contact-header-text': s.contactHeaderText,
        '--pss-contact-content-text': s.contactContentText,
        '--pss-contact-card-bg': s.contactCardBg,
        '--pss-contact-card-border': s.contactCardBorder,
        '--pss-contact-card-shadow': s.contactCardShadow,
        '--pss-contact-text-color': s.contactTextColor,
        '--pss-contact-label-color': s.contactLabelColor,
        '--pss-contact-input-bg': s.contactInputBg,
        '--pss-contact-input-border': s.contactInputBorder,
        '--pss-contact-input-text': s.contactInputText,
        '--pss-contact-btn-bg': s.contactBtnBg,
        '--pss-contact-btn-text': s.contactBtnText,
        '--pss-contact-btn-border': s.contactBtnBorder,
        '--pss-contact-btn-shadow': s.contactBtnShadow,
        '--pss-contact-direct-text': s.contactDirectText,
        '--pss-contact-social-btn-bg': s.contactSocialBtnBg,
        '--pss-contact-social-btn-text': s.contactSocialBtnText,
        '--pss-contact-social-btn-border': s.contactSocialBtnBorder,
        '--pss-contact-social-btn-shadow': s.contactSocialBtnShadow,
        // Header section detailed
        '--pss-header-text-color': s.headerTextColor,
        '--pss-header-hover-bg': s.headerHoverBg,
        '--pss-header-hover-text': s.headerHoverText,
        '--pss-header-logo-bg': s.headerLogoBg,
        '--pss-header-logo-border': s.headerLogoBorder,
        '--pss-header-logo-text': s.headerLogoText,
        '--pss-header-logo-shadow': s.headerLogoShadow,
        '--pss-section-divider-color': s.sectionDividerColor,
        // Home Hero section detailed
        '--pss-home-hero-card-bg': s.homeHeroCardBg,
        '--pss-home-hero-card-border': s.homeHeroCardBorder,
        '--pss-home-hero-card-shadow': s.homeHeroCardShadow,
        '--pss-home-hero-badge-bg': s.homeHeroBadgeBg,
        '--pss-home-hero-badge-border': s.homeHeroBadgeBorder,
        '--pss-home-hero-badge-text': s.homeHeroBadgeText,
        '--pss-home-hero-header-text': s.homeHeroHeaderText,
        '--pss-home-hero-content-text': s.homeHeroContentText,
        '--pss-home-hero-exp-badge-bg': s.homeHeroExpBadgeBg,
        '--pss-home-hero-exp-badge-border': s.homeHeroExpBadgeBorder,
        '--pss-home-hero-exp-badge-text': s.homeHeroExpBadgeText,
        '--pss-home-hero-exp-badge-shadow': s.homeHeroExpBadgeShadow,
        '--pss-home-hero-btn-bg': s.homeHeroBtnBg,
        '--pss-home-hero-btn-text': s.homeHeroBtnText,
        '--pss-home-hero-btn-border': s.homeHeroBtnBorder,
        '--pss-home-hero-btn-shadow': s.homeHeroBtnShadow,
        // Home About section detailed
        '--pss-home-about-badge-bg': s.homeAboutBadgeBg,
        '--pss-home-about-badge-border': s.homeAboutBadgeBorder,
        '--pss-home-about-badge-text': s.homeAboutBadgeText,
        '--pss-home-about-header-text': s.homeAboutHeaderText,
        '--pss-home-about-content-text': s.homeAboutContentText,
        '--pss-home-about-info-badge-bg': s.homeAboutInfoBadgeBg,
        '--pss-home-about-info-badge-border': s.homeAboutInfoBadgeBorder,
        '--pss-home-about-info-badge-text': s.homeAboutInfoBadgeText,
        '--pss-home-about-stat-card-bg': s.homeAboutStatCardBg,
        '--pss-home-about-stat-card-border': s.homeAboutStatCardBorder,
        '--pss-home-about-stat-card-shadow': s.homeAboutStatCardShadow,
        '--pss-home-about-stat-number-text': s.homeAboutStatNumberText,
        '--pss-home-about-stat-label-text': s.homeAboutStatLabelText,
        '--pss-home-about-btn-bg': s.homeAboutBtnBg,
        '--pss-home-about-btn-text': s.homeAboutBtnText,
        '--pss-home-about-btn-border': s.homeAboutBtnBorder,
        '--pss-home-about-btn-shadow': s.homeAboutBtnShadow,
        // Home Portfolio section detailed
        '--pss-home-portfolio-badge-bg': s.homePortfolioBadgeBg,
        '--pss-home-portfolio-badge-border': s.homePortfolioBadgeBorder,
        '--pss-home-portfolio-badge-text': s.homePortfolioBadgeText,
        '--pss-home-portfolio-header-text': s.homePortfolioHeaderText,
        '--pss-home-portfolio-card-bg': s.homePortfolioCardBg,
        '--pss-home-portfolio-card-border': s.homePortfolioCardBorder,
        '--pss-home-portfolio-card-shadow': s.homePortfolioCardShadow,
        '--pss-home-portfolio-card-header-text': s.homePortfolioCardHeaderText,
        '--pss-home-portfolio-card-content-text': s.homePortfolioCardContentText,
        '--pss-home-portfolio-tech-badge-bg': s.homePortfolioTechBadgeBg,
        '--pss-home-portfolio-tech-badge-border': s.homePortfolioTechBadgeBorder,
        '--pss-home-portfolio-tech-badge-text': s.homePortfolioTechBadgeText,
        '--pss-home-portfolio-btn-bg': s.homePortfolioBtnBg,
        '--pss-home-portfolio-btn-text': s.homePortfolioBtnText,
        '--pss-home-portfolio-btn-border': s.homePortfolioBtnBorder,
        '--pss-home-portfolio-btn-shadow': s.homePortfolioBtnShadow,
        // Home Certifications section detailed
        '--pss-home-cert-badge-bg': s.homeCertBadgeBg,
        '--pss-home-cert-badge-border': s.homeCertBadgeBorder,
        '--pss-home-cert-badge-text': s.homeCertBadgeText,
        '--pss-home-cert-header-text': s.homeCertHeaderText,
        '--pss-home-cert-card-bg': s.homeCertCardBg,
        '--pss-home-cert-card-border': s.homeCertCardBorder,
        '--pss-home-cert-card-shadow': s.homeCertCardShadow,
        '--pss-home-cert-card-header-text': s.homeCertCardHeaderText,
        '--pss-home-cert-card-content-text': s.homeCertCardContentText,
        '--pss-home-cert-view-btn-bg': s.homeCertViewBtnBg,
        '--pss-home-cert-view-btn-text': s.homeCertViewBtnText,
        '--pss-home-cert-view-btn-border': s.homeCertViewBtnBorder,
        '--pss-home-cert-view-btn-shadow': s.homeCertViewBtnShadow,
        '--pss-home-cert-all-btn-bg': s.homeCertAllBtnBg,
        '--pss-home-cert-all-btn-text': s.homeCertAllBtnText,
        '--pss-home-cert-all-btn-border': s.homeCertAllBtnBorder,
        '--pss-home-cert-all-btn-shadow': s.homeCertAllBtnShadow,
        // Home Experience section detailed
        '--pss-home-exp-badge-bg': s.homeExpBadgeBg,
        '--pss-home-exp-badge-border': s.homeExpBadgeBorder,
        '--pss-home-exp-badge-text': s.homeExpBadgeText,
        '--pss-home-exp-header-text': s.homeExpHeaderText,
        '--pss-home-exp-card-bg': s.homeExpCardBg,
        '--pss-home-exp-card-border': s.homeExpCardBorder,
        '--pss-home-exp-card-shadow': s.homeExpCardShadow,
        '--pss-home-exp-card-header-text': s.homeExpCardHeaderText,
        '--pss-home-exp-card-content-text': s.homeExpCardContentText,
        '--pss-home-exp-btn-bg': s.homeExpBtnBg,
        '--pss-home-exp-btn-text': s.homeExpBtnText,
        '--pss-home-exp-btn-border': s.homeExpBtnBorder,
        '--pss-home-exp-btn-shadow': s.homeExpBtnShadow,
        // Home Tools section detailed
        '--pss-home-tools-badge-bg': s.homeToolsBadgeBg,
        '--pss-home-tools-badge-border': s.homeToolsBadgeBorder,
        '--pss-home-tools-badge-text': s.homeToolsBadgeText,
        '--pss-home-tools-header-text': s.homeToolsHeaderText,
        '--pss-home-tools-card-bg': s.homeToolsCardBg,
        '--pss-home-tools-card-border': s.homeToolsCardBorder,
        '--pss-home-tools-card-shadow': s.homeToolsCardShadow,
        '--pss-home-tools-card-header-text': s.homeToolsCardHeaderText,
        '--pss-home-tools-tool-badge-bg': s.homeToolsToolBadgeBg,
        '--pss-home-tools-tool-badge-border': s.homeToolsToolBadgeBorder,
        '--pss-home-tools-tool-badge-text': s.homeToolsToolBadgeText,
        '--pss-home-tools-btn-bg': s.homeToolsBtnBg,
        '--pss-home-tools-btn-text': s.homeToolsBtnText,
        '--pss-home-tools-btn-border': s.homeToolsBtnBorder,
        '--pss-home-tools-btn-shadow': s.homeToolsBtnShadow,
        // Home CTA section detailed
        '--pss-home-cta-header-text': s.homeCtaHeaderText,
        '--pss-home-cta-content-text': s.homeCtaContentText,
        '--pss-home-cta-btn-bg': s.homeCtaBtnBg,
        '--pss-home-cta-btn-text': s.homeCtaBtnText,
        '--pss-home-cta-btn-border': s.homeCtaBtnBorder,
        '--pss-home-cta-btn-shadow': s.homeCtaBtnShadow,
        // Footer section detailed
        '--pss-footer-header-text': s.footerHeaderText,
        '--pss-footer-content-text': s.footerContentText,
        '--pss-footer-copyright-text': s.footerCopyrightText,
        '--pss-footer-logo-bg': s.footerLogoBg,
        '--pss-footer-logo-border': s.footerLogoBorder,
        '--pss-footer-logo-shadow': s.footerLogoShadow,
        '--pss-footer-social-btn-bg': s.footerSocialBtnBg,
        '--pss-footer-social-btn-border': s.footerSocialBtnBorder,
        '--pss-footer-social-btn-text': s.footerSocialBtnText,
        '--pss-footer-social-btn-shadow': s.footerSocialBtnShadow,
      };
    },

    heroPhotoSizeClass(): string {
      const size = this.settings.heroPhotoSize;
      if (size === 'small') return 'w-48 h-48 sm:w-56 sm:h-56';
      if (size === 'large') return 'w-80 h-80 sm:w-96 sm:h-96';
      return 'w-64 h-64 sm:w-72 sm:h-72'; // medium
    },

    projectPhotoHeightClass(): string {
      const size = this.settings.projectPhotoHeight;
      if (size === 'small') return 'aspect-square';
      if (size === 'large') return 'aspect-[4/3]';
      return 'aspect-video'; // medium
    },

    homeHeroCardWidthClass(): string {
      const size = this.settings.homeHeroCardWidth;
      // Template layout ratios:
      // - small  => 1:1
      // - medium => 4:3
      // - large  => (deprecated) treat as 4:3
      // Kept as 'small|medium|large' to avoid backend/schema changes.
      if (size === 'small') return 'w-56 sm:w-64 aspect-square';
      return 'w-64 sm:w-72 aspect-[4/3]'; // medium
    },
  },

  actions: {
    applyToDom() {
      // CSS vars are now applied via :style binding in default.vue layout
      // This method is kept for backward compatibility but does nothing on :root
      // to avoid affecting admin dashboard
    },

    async fetchSettings() {
      const config = useRuntimeConfig();
      try {
        const data = await $fetch<PublicSiteSettings>('/public-site-settings', {
          baseURL: config.public.apiBase as string,
          signal: AbortSignal.timeout(5000),
        });
        this.settings = { ...DEFAULT_SETTINGS, ...data };
        this.loaded = true;
        this.applyToDom();
      } catch (error) {
        console.error('Failed to fetch public site settings:', error);
        // Use defaults
        this.settings = { ...DEFAULT_SETTINGS };
        this.loaded = true;
        this.applyToDom();
      }
    },

    setSettings(settings: Partial<PublicSiteSettings>, { broadcast = false } = {}) {
      this.settings = { ...this.settings, ...settings };
      this.applyToDom();
      if (broadcast) this.broadcast();
    },

    broadcast() {
      if (!import.meta.client) return;
      const payload = JSON.parse(JSON.stringify({ type: 'public-site-settings', settings: this.settings }));

      if (typeof BroadcastChannel !== 'undefined') {
        try {
          const ch = new BroadcastChannel(CHANNEL_NAME);
          ch.postMessage(payload);
          ch.close();
          return;
        } catch (error) {
          console.error('BroadcastChannel failed:', error);
        }
      }

      localStorage.setItem(CHANNEL_NAME, JSON.stringify({ ...payload, ts: Date.now() }));
    },

    initSync() {
      if (!import.meta.client) return;
      if (this.syncReady) return;
      this.syncReady = true;

      const applyIncoming = (raw: unknown) => {
        try {
          const msg = raw as any;
          if (!msg || msg.type !== 'public-site-settings' || !msg.settings) return;
          this.setSettings(msg.settings, { broadcast: false });
        } catch (error) {
          console.error('Failed to apply incoming public site settings:', error);
        }
      };

      if (typeof BroadcastChannel !== 'undefined') {
        try {
          const ch = new BroadcastChannel(CHANNEL_NAME);
          ch.onmessage = (ev) => applyIncoming(ev.data);
        } catch (error) {
          console.error('BroadcastChannel init failed:', error);
        }
      }

      window.addEventListener('storage', (ev) => {
        if (ev.key !== CHANNEL_NAME || !ev.newValue) return;
        try {
          applyIncoming(JSON.parse(ev.newValue));
        } catch {
          // ignore
        }
      });
    },

    getDefaults() {
      return { ...DEFAULT_SETTINGS };
    },
  },
});
