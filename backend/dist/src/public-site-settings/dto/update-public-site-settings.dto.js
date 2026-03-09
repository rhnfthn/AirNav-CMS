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
exports.UpdatePublicSiteSettingsDto = void 0;
const class_validator_1 = require("class-validator");
class UpdatePublicSiteSettingsDto {
    headerBgColor;
    footerBgColor;
    cardBgColor;
    cardBorderColor;
    cardShadowColor;
    heroPhotoSize;
    heroPhotoBorder;
    heroPhotoShadow;
    primaryBtnBg;
    primaryBtnText;
    primaryBtnBorder;
    primaryBtnShadow;
    secondaryBtnBg;
    secondaryBtnText;
    secondaryBtnBorder;
    secondaryBtnShadow;
    navLinkColor;
    navLinkHoverBg;
    badgeBgColor;
    badgeBorderColor;
    badgeTextColor;
    sectionAltBg;
    ctaSectionBg;
    heroSectionBg;
    aboutSectionBg;
    projectsSectionBg;
    certificationsSectionBg;
    experienceSectionBg;
    toolsSectionBg;
    contactSectionBg;
    aboutBadgeBg;
    aboutBadgeBorder;
    aboutBadgeText;
    aboutTitleBg;
    aboutTitleBorder;
    aboutTitleText;
    aboutTitleShadow;
    aboutPhotoBorder;
    aboutPhotoShadow;
    aboutTextColor;
    aboutInfoHeaderText;
    aboutInfoContentText;
    aboutEducationHeaderText;
    aboutEducationContentText;
    aboutCardBg;
    aboutCardBorder;
    aboutCardShadow;
    aboutOuterCardBg;
    aboutOuterCardBorder;
    aboutOuterCardShadow;
    aboutSkillsCardBg;
    aboutSkillsCardBorder;
    aboutSkillsCardShadow;
    aboutSkillBadgeBg;
    aboutSkillBadgeBorder;
    aboutSkillBadgeText;
    aboutBtnBg;
    aboutBtnText;
    aboutBtnBorder;
    aboutBtnShadow;
    projectBadgeBg;
    projectBadgeBorder;
    projectBadgeText;
    projectsHeaderText;
    projectsContentText;
    projectFilterBadgeBg;
    projectFilterBadgeBorder;
    projectFilterBadgeText;
    projectFilterBadgeShadow;
    projectCardBg;
    projectCardBorder;
    projectCardShadow;
    projectPhotoHeight;
    projectPopupBg;
    projectPopupBorder;
    projectPopupShadow;
    projectBtnPrimaryBg;
    projectBtnPrimaryText;
    projectBtnPrimaryBorder;
    projectBtnPrimaryShadow;
    projectBtnSecondaryBg;
    projectBtnSecondaryText;
    projectBtnSecondaryBorder;
    projectBtnSecondaryShadow;
    certBadgeBg;
    certBadgeBorder;
    certBadgeText;
    certYearBadgeBg;
    certYearBadgeBorder;
    certYearBadgeText;
    certCardBg;
    certCardBorder;
    certCardShadow;
    certCardHeaderText;
    certCardContentText;
    certBtnBg;
    certBtnText;
    certBtnHoverText;
    certBtnBorder;
    experienceSectionHeaderText;
    experienceSectionContentText;
    expBadgeBg;
    expBadgeBorder;
    expBadgeText;
    expCardBg;
    expCardBorder;
    expCardShadow;
    expCardBadgeBg;
    expCardBadgeBorder;
    expCardBadgeText;
    expCardHeaderText;
    expCardSubHeaderText;
    expCardContentText;
    expTimelineDotBg;
    expTimelineDotBorder;
    expTimelineLineBg;
    toolsBadgeBg;
    toolsBadgeBorder;
    toolsBadgeText;
    toolsHeaderText;
    toolsContentText;
    toolsCardBg;
    toolsCardBorder;
    toolsCardShadow;
    toolsCategoryTitleText;
    toolsItemText;
    toolsTextColor;
    toolsIconBg;
    toolsIconBorder;
    toolsCategoryDotBg;
    toolsCategoryDotBorder;
    contactBadgeBg;
    contactBadgeBorder;
    contactBadgeText;
    contactHeaderText;
    contactContentText;
    contactCardBg;
    contactCardBorder;
    contactCardShadow;
    contactTextColor;
    contactLabelColor;
    contactInputBg;
    contactInputBorder;
    contactInputText;
    contactBtnBg;
    contactBtnText;
    contactBtnBorder;
    contactBtnShadow;
    contactDirectText;
    contactSocialBtnBg;
    contactSocialBtnText;
    contactSocialBtnBorder;
    contactSocialBtnShadow;
    headerTextColor;
    headerHoverBg;
    headerHoverText;
    headerLogoBg;
    headerLogoBorder;
    headerLogoText;
    headerLogoShadow;
    sectionDividerColor;
    homeHeroCardWidth;
    homeHeroCardBg;
    homeHeroCardBorder;
    homeHeroCardShadow;
    homeHeroBadgeBg;
    homeHeroBadgeBorder;
    homeHeroBadgeText;
    homeHeroHeaderText;
    homeHeroContentText;
    homeHeroExpBadgeBg;
    homeHeroExpBadgeBorder;
    homeHeroExpBadgeText;
    homeHeroExpBadgeShadow;
    homeHeroBtnBg;
    homeHeroBtnText;
    homeHeroBtnBorder;
    homeHeroBtnShadow;
    homeAboutBadgeBg;
    homeAboutBadgeBorder;
    homeAboutBadgeText;
    homeAboutHeaderText;
    homeAboutContentText;
    homeAboutInfoBadgeBg;
    homeAboutInfoBadgeBorder;
    homeAboutInfoBadgeText;
    homeAboutStatCardBg;
    homeAboutStatCardBorder;
    homeAboutStatCardShadow;
    homeAboutStatNumberText;
    homeAboutStatLabelText;
    homeAboutBtnBg;
    homeAboutBtnText;
    homeAboutBtnBorder;
    homeAboutBtnShadow;
    homePortfolioBadgeBg;
    homePortfolioBadgeBorder;
    homePortfolioBadgeText;
    homePortfolioHeaderText;
    homePortfolioCardBg;
    homePortfolioCardBorder;
    homePortfolioCardShadow;
    homePortfolioCardHeaderText;
    homePortfolioCardContentText;
    homePortfolioTechBadgeBg;
    homePortfolioTechBadgeBorder;
    homePortfolioTechBadgeText;
    homePortfolioBtnBg;
    homePortfolioBtnText;
    homePortfolioBtnBorder;
    homePortfolioBtnShadow;
    homeCertBadgeBg;
    homeCertBadgeBorder;
    homeCertBadgeText;
    homeCertHeaderText;
    homeCertCardBg;
    homeCertCardBorder;
    homeCertCardShadow;
    homeCertCardHeaderText;
    homeCertCardContentText;
    homeCertViewBtnBg;
    homeCertViewBtnText;
    homeCertViewBtnBorder;
    homeCertViewBtnShadow;
    homeCertAllBtnBg;
    homeCertAllBtnText;
    homeCertAllBtnBorder;
    homeCertAllBtnShadow;
    homeExpBadgeBg;
    homeExpBadgeBorder;
    homeExpBadgeText;
    homeExpHeaderText;
    homeExpCardBg;
    homeExpCardBorder;
    homeExpCardShadow;
    homeExpCardHeaderText;
    homeExpCardContentText;
    homeExpBtnBg;
    homeExpBtnText;
    homeExpBtnBorder;
    homeExpBtnShadow;
    homeToolsBadgeBg;
    homeToolsBadgeBorder;
    homeToolsBadgeText;
    homeToolsHeaderText;
    homeToolsCardBg;
    homeToolsCardBorder;
    homeToolsCardShadow;
    homeToolsCardHeaderText;
    homeToolsToolBadgeBg;
    homeToolsToolBadgeBorder;
    homeToolsToolBadgeText;
    homeToolsBtnBg;
    homeToolsBtnText;
    homeToolsBtnBorder;
    homeToolsBtnShadow;
    homeCtaHeaderText;
    homeCtaContentText;
    homeCtaBtnBg;
    homeCtaBtnText;
    homeCtaBtnBorder;
    homeCtaBtnShadow;
    footerHeaderText;
    footerContentText;
    footerCopyrightText;
    footerLogoBg;
    footerLogoBorder;
    footerLogoShadow;
    footerSocialBtnBg;
    footerSocialBtnBorder;
    footerSocialBtnText;
    footerSocialBtnShadow;
}
exports.UpdatePublicSiteSettingsDto = UpdatePublicSiteSettingsDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerBgColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerBgColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'cardBgColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "cardBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'cardBorderColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "cardBorderColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'cardShadowColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "cardShadowColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['small', 'medium', 'large']),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "heroPhotoSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'heroPhotoBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "heroPhotoBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'heroPhotoShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "heroPhotoShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'primaryBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "primaryBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'primaryBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "primaryBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'primaryBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "primaryBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'primaryBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "primaryBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'secondaryBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "secondaryBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'secondaryBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "secondaryBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'secondaryBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "secondaryBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'secondaryBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "secondaryBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'navLinkColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "navLinkColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'navLinkHoverBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "navLinkHoverBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'badgeBgColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "badgeBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'badgeBorderColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "badgeBorderColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'badgeTextColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "badgeTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'sectionAltBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "sectionAltBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'ctaSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "ctaSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'heroSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "heroSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectsSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectsSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certificationsSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certificationsSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'experienceSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "experienceSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactSectionBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactSectionBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutTitleBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutTitleBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutTitleBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutTitleBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutTitleText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutTitleText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutTitleShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutTitleShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutPhotoBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutPhotoBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutPhotoShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutPhotoShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutTextColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutInfoHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutInfoHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutInfoContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutInfoContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutEducationHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutEducationHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutEducationContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutEducationContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutOuterCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutOuterCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutOuterCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutOuterCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutOuterCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutOuterCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSkillsCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSkillsCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSkillsCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSkillsCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSkillsCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSkillsCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSkillBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSkillBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSkillBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSkillBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutSkillBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutSkillBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'aboutBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "aboutBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectsHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectsHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectsContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectsContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectFilterBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectFilterBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectFilterBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectFilterBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectFilterBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectFilterBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectFilterBadgeShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectFilterBadgeShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['small', 'medium', 'large']),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectPhotoHeight", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectPopupBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectPopupBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectPopupBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectPopupBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectPopupShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectPopupShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnPrimaryBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnPrimaryBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnPrimaryText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnPrimaryText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnPrimaryBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnPrimaryBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnPrimaryShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnPrimaryShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnSecondaryBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnSecondaryBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnSecondaryText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnSecondaryText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnSecondaryBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnSecondaryBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'projectBtnSecondaryShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "projectBtnSecondaryShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certYearBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certYearBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certYearBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certYearBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certYearBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certYearBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certCardHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certCardHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certCardContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certCardContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBtnHoverText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBtnHoverText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'certBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "certBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'experienceSectionHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "experienceSectionHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'experienceSectionContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "experienceSectionContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardSubHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardSubHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expCardContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expCardContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expTimelineDotBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expTimelineDotBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expTimelineDotBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expTimelineDotBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'expTimelineLineBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "expTimelineLineBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsCategoryTitleText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsCategoryTitleText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsItemText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsItemText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsTextColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsIconBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsIconBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsIconBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsIconBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsCategoryDotBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsCategoryDotBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'toolsCategoryDotBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "toolsCategoryDotBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactTextColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactLabelColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactLabelColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactInputBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactInputBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactInputBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactInputBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactInputText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactInputText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactDirectText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactDirectText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactSocialBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactSocialBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactSocialBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactSocialBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactSocialBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactSocialBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'contactSocialBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "contactSocialBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerTextColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerHoverBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerHoverBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerHoverText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerHoverText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerLogoBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerLogoBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerLogoBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerLogoBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerLogoText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerLogoText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'headerLogoShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "headerLogoShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'sectionDividerColor must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "sectionDividerColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['small', 'medium', 'large']),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroCardWidth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroExpBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroExpBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroExpBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroExpBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroExpBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroExpBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroExpBadgeShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroExpBadgeShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeHeroBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeHeroBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutInfoBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutInfoBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutInfoBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutInfoBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutInfoBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutInfoBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutStatCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutStatCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutStatCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutStatCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutStatCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutStatCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutStatNumberText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutStatNumberText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutStatLabelText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutStatLabelText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeAboutBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeAboutBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioCardHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioCardHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioCardContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioCardContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioTechBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioTechBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioTechBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioTechBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioTechBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioTechBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homePortfolioBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homePortfolioBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertCardHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertCardHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertCardContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertCardContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertViewBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertViewBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertViewBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertViewBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertViewBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertViewBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertViewBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertViewBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertAllBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertAllBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertAllBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertAllBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertAllBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertAllBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCertAllBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCertAllBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpCardHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpCardHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpCardContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpCardContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeExpBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeExpBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsCardBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsCardBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsCardBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsCardBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsCardShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsCardShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsCardHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsCardHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsToolBadgeBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsToolBadgeBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsToolBadgeBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsToolBadgeBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsToolBadgeText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsToolBadgeText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeToolsBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeToolsBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCtaHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCtaHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCtaContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCtaContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCtaBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCtaBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCtaBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCtaBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCtaBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCtaBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'homeCtaBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "homeCtaBtnShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerHeaderText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerHeaderText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerContentText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerContentText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerCopyrightText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerCopyrightText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerLogoBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerLogoBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerLogoBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerLogoBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerLogoShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerLogoShadow", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerSocialBtnBg must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerSocialBtnBg", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerSocialBtnBorder must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerSocialBtnBorder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerSocialBtnText must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerSocialBtnText", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(/^#[0-9A-Fa-f]{6}$/, {
        message: 'footerSocialBtnShadow must be a valid hex color',
    }),
    __metadata("design:type", String)
], UpdatePublicSiteSettingsDto.prototype, "footerSocialBtnShadow", void 0);
//# sourceMappingURL=update-public-site-settings.dto.js.map