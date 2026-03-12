"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicSiteSettingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const DEFAULT_SETTINGS = {
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
    headerTextColor: '#FFFFFF',
    headerHoverBg: '#A7D3F5',
    headerHoverText: '#2C3E50',
    headerLogoBg: '#6FA8DC',
    headerLogoBorder: '#B8C6DB',
    headerLogoText: '#FFFFFF',
    headerLogoShadow: '#B8C6DB',
    sectionDividerColor: '#B8C6DB',
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
    homeHeroAnotherDesignUrl: '',
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
    homeCtaHeaderText: '#1A202C',
    homeCtaContentText: '#4A5568',
    homeCtaBtnBg: '#6FA8DC',
    homeCtaBtnText: '#FFFFFF',
    homeCtaBtnBorder: '#B8C6DB',
    homeCtaBtnShadow: '#B8C6DB',
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
let PublicSiteSettingsService = class PublicSiteSettingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    stripUndefined(obj) {
        const clean = {};
        for (const key of Object.keys(obj)) {
            const value = obj[key];
            if (value !== undefined)
                clean[key] = value;
        }
        return clean;
    }
    async getSettings() {
        const existing = await this.prisma.publicSiteSettings.findFirst();
        if (existing) {
            const patch = {};
            for (const [key, defaultValue] of Object.entries(DEFAULT_SETTINGS)) {
                const currentValue = existing[key];
                if (currentValue === null || currentValue === undefined) {
                    patch[key] = defaultValue;
                }
            }
            if (Object.keys(patch).length === 0)
                return existing;
            return this.prisma.publicSiteSettings.update({
                where: { id: existing.id },
                data: patch,
            });
        }
        return this.prisma.publicSiteSettings.create({
            data: DEFAULT_SETTINGS,
        });
    }
    async updateSettings(dto) {
        const existing = await this.prisma.publicSiteSettings.findFirst();
        const data = this.stripUndefined({ ...dto });
        if (!existing) {
            return this.prisma.publicSiteSettings.create({
                data: { ...DEFAULT_SETTINGS, ...data },
            });
        }
        if (Object.keys(data).length === 0)
            return existing;
        return this.prisma.publicSiteSettings.update({
            where: { id: existing.id },
            data,
        });
    }
    getDefaults() {
        return DEFAULT_SETTINGS;
    }
};
exports.PublicSiteSettingsService = PublicSiteSettingsService;
exports.PublicSiteSettingsService = PublicSiteSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PublicSiteSettingsService);
//# sourceMappingURL=public-site-settings.service.js.map