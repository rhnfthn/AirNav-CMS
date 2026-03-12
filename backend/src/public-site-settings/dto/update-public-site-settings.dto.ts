import { IsString, IsOptional, Matches, IsIn } from 'class-validator';

export class UpdatePublicSiteSettingsDto {
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerBgColor must be a valid hex color',
  })
  headerBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerBgColor must be a valid hex color',
  })
  footerBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'cardBgColor must be a valid hex color',
  })
  cardBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'cardBorderColor must be a valid hex color',
  })
  cardBorderColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'cardShadowColor must be a valid hex color',
  })
  cardShadowColor?: string;

  @IsOptional()
  @IsIn(['small', 'medium', 'large'])
  heroPhotoSize?: 'small' | 'medium' | 'large';

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'heroPhotoBorder must be a valid hex color',
  })
  heroPhotoBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'heroPhotoShadow must be a valid hex color',
  })
  heroPhotoShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'primaryBtnBg must be a valid hex color',
  })
  primaryBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'primaryBtnText must be a valid hex color',
  })
  primaryBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'primaryBtnBorder must be a valid hex color',
  })
  primaryBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'primaryBtnShadow must be a valid hex color',
  })
  primaryBtnShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'secondaryBtnBg must be a valid hex color',
  })
  secondaryBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'secondaryBtnText must be a valid hex color',
  })
  secondaryBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'secondaryBtnBorder must be a valid hex color',
  })
  secondaryBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'secondaryBtnShadow must be a valid hex color',
  })
  secondaryBtnShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'navLinkColor must be a valid hex color',
  })
  navLinkColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'navLinkHoverBg must be a valid hex color',
  })
  navLinkHoverBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'badgeBgColor must be a valid hex color',
  })
  badgeBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'badgeBorderColor must be a valid hex color',
  })
  badgeBorderColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'badgeTextColor must be a valid hex color',
  })
  badgeTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'sectionAltBg must be a valid hex color',
  })
  sectionAltBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'ctaSectionBg must be a valid hex color',
  })
  ctaSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'heroSectionBg must be a valid hex color',
  })
  heroSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSectionBg must be a valid hex color',
  })
  aboutSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectsSectionBg must be a valid hex color',
  })
  projectsSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certificationsSectionBg must be a valid hex color',
  })
  certificationsSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'experienceSectionBg must be a valid hex color',
  })
  experienceSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsSectionBg must be a valid hex color',
  })
  toolsSectionBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactSectionBg must be a valid hex color',
  })
  contactSectionBg?: string;

  // ============== ABOUT PAGE DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBadgeBg must be a valid hex color',
  })
  aboutBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBadgeBorder must be a valid hex color',
  })
  aboutBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBadgeText must be a valid hex color',
  })
  aboutBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutTitleBg must be a valid hex color',
  })
  aboutTitleBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutTitleBorder must be a valid hex color',
  })
  aboutTitleBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutTitleText must be a valid hex color',
  })
  aboutTitleText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutTitleShadow must be a valid hex color',
  })
  aboutTitleShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutPhotoBorder must be a valid hex color',
  })
  aboutPhotoBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutPhotoShadow must be a valid hex color',
  })
  aboutPhotoShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutTextColor must be a valid hex color',
  })
  aboutTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutInfoHeaderText must be a valid hex color',
  })
  aboutInfoHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutInfoContentText must be a valid hex color',
  })
  aboutInfoContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutEducationHeaderText must be a valid hex color',
  })
  aboutEducationHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutEducationContentText must be a valid hex color',
  })
  aboutEducationContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutCardBg must be a valid hex color',
  })
  aboutCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutCardBorder must be a valid hex color',
  })
  aboutCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutCardShadow must be a valid hex color',
  })
  aboutCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutOuterCardBg must be a valid hex color',
  })
  aboutOuterCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutOuterCardBorder must be a valid hex color',
  })
  aboutOuterCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutOuterCardShadow must be a valid hex color',
  })
  aboutOuterCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSkillsCardBg must be a valid hex color',
  })
  aboutSkillsCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSkillsCardBorder must be a valid hex color',
  })
  aboutSkillsCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSkillsCardShadow must be a valid hex color',
  })
  aboutSkillsCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSkillBadgeBg must be a valid hex color',
  })
  aboutSkillBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSkillBadgeBorder must be a valid hex color',
  })
  aboutSkillBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutSkillBadgeText must be a valid hex color',
  })
  aboutSkillBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBtnBg must be a valid hex color',
  })
  aboutBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBtnText must be a valid hex color',
  })
  aboutBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBtnBorder must be a valid hex color',
  })
  aboutBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'aboutBtnShadow must be a valid hex color',
  })
  aboutBtnShadow?: string;

  // ============== PROJECTS PAGE DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBadgeBg must be a valid hex color',
  })
  projectBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBadgeBorder must be a valid hex color',
  })
  projectBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBadgeText must be a valid hex color',
  })
  projectBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectsHeaderText must be a valid hex color',
  })
  projectsHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectsContentText must be a valid hex color',
  })
  projectsContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectFilterBadgeBg must be a valid hex color',
  })
  projectFilterBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectFilterBadgeBorder must be a valid hex color',
  })
  projectFilterBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectFilterBadgeText must be a valid hex color',
  })
  projectFilterBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectFilterBadgeShadow must be a valid hex color',
  })
  projectFilterBadgeShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectCardBg must be a valid hex color',
  })
  projectCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectCardBorder must be a valid hex color',
  })
  projectCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectCardShadow must be a valid hex color',
  })
  projectCardShadow?: string;

  @IsOptional()
  @IsIn(['small', 'medium', 'large'])
  projectPhotoHeight?: 'small' | 'medium' | 'large';

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectPopupBg must be a valid hex color',
  })
  projectPopupBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectPopupBorder must be a valid hex color',
  })
  projectPopupBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectPopupShadow must be a valid hex color',
  })
  projectPopupShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnPrimaryBg must be a valid hex color',
  })
  projectBtnPrimaryBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnPrimaryText must be a valid hex color',
  })
  projectBtnPrimaryText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnPrimaryBorder must be a valid hex color',
  })
  projectBtnPrimaryBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnPrimaryShadow must be a valid hex color',
  })
  projectBtnPrimaryShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnSecondaryBg must be a valid hex color',
  })
  projectBtnSecondaryBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnSecondaryText must be a valid hex color',
  })
  projectBtnSecondaryText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnSecondaryBorder must be a valid hex color',
  })
  projectBtnSecondaryBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'projectBtnSecondaryShadow must be a valid hex color',
  })
  projectBtnSecondaryShadow?: string;

  // ============== CERTIFICATIONS PAGE DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBadgeBg must be a valid hex color',
  })
  certBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBadgeBorder must be a valid hex color',
  })
  certBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBadgeText must be a valid hex color',
  })
  certBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certYearBadgeBg must be a valid hex color',
  })
  certYearBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certYearBadgeBorder must be a valid hex color',
  })
  certYearBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certYearBadgeText must be a valid hex color',
  })
  certYearBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certCardBg must be a valid hex color',
  })
  certCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certCardBorder must be a valid hex color',
  })
  certCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certCardShadow must be a valid hex color',
  })
  certCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certCardHeaderText must be a valid hex color',
  })
  certCardHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certCardContentText must be a valid hex color',
  })
  certCardContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBtnBg must be a valid hex color',
  })
  certBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBtnText must be a valid hex color',
  })
  certBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBtnHoverText must be a valid hex color',
  })
  certBtnHoverText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'certBtnBorder must be a valid hex color',
  })
  certBtnBorder?: string;

  // ============== EXPERIENCE PAGE DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'experienceSectionHeaderText must be a valid hex color',
  })
  experienceSectionHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'experienceSectionContentText must be a valid hex color',
  })
  experienceSectionContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expBadgeBg must be a valid hex color',
  })
  expBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expBadgeBorder must be a valid hex color',
  })
  expBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expBadgeText must be a valid hex color',
  })
  expBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardBg must be a valid hex color',
  })
  expCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardBorder must be a valid hex color',
  })
  expCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardShadow must be a valid hex color',
  })
  expCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardBadgeBg must be a valid hex color',
  })
  expCardBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardBadgeBorder must be a valid hex color',
  })
  expCardBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardBadgeText must be a valid hex color',
  })
  expCardBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardHeaderText must be a valid hex color',
  })
  expCardHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardSubHeaderText must be a valid hex color',
  })
  expCardSubHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expCardContentText must be a valid hex color',
  })
  expCardContentText?: string;

  @IsOptional()

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expTimelineDotBg must be a valid hex color',
  })
  expTimelineDotBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expTimelineDotBorder must be a valid hex color',
  })
  expTimelineDotBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'expTimelineLineBg must be a valid hex color',
  })
  expTimelineLineBg?: string;

  // ============== TOOLS PAGE DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsBadgeBg must be a valid hex color',
  })
  toolsBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsBadgeBorder must be a valid hex color',
  })
  toolsBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsBadgeText must be a valid hex color',
  })
  toolsBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsHeaderText must be a valid hex color',
  })
  toolsHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsContentText must be a valid hex color',
  })
  toolsContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsCardBg must be a valid hex color',
  })
  toolsCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsCardBorder must be a valid hex color',
  })
  toolsCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsCardShadow must be a valid hex color',
  })
  toolsCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsCategoryTitleText must be a valid hex color',
  })
  toolsCategoryTitleText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsItemText must be a valid hex color',
  })
  toolsItemText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsTextColor must be a valid hex color',
  })
  toolsTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsIconBg must be a valid hex color',
  })
  toolsIconBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsIconBorder must be a valid hex color',
  })
  toolsIconBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsCategoryDotBg must be a valid hex color',
  })
  toolsCategoryDotBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'toolsCategoryDotBorder must be a valid hex color',
  })
  toolsCategoryDotBorder?: string;

  // ============== CONTACT PAGE DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBadgeBg must be a valid hex color',
  })
  contactBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBadgeBorder must be a valid hex color',
  })
  contactBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBadgeText must be a valid hex color',
  })
  contactBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactHeaderText must be a valid hex color',
  })
  contactHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactContentText must be a valid hex color',
  })
  contactContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactCardBg must be a valid hex color',
  })
  contactCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactCardBorder must be a valid hex color',
  })
  contactCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactCardShadow must be a valid hex color',
  })
  contactCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactTextColor must be a valid hex color',
  })
  contactTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactLabelColor must be a valid hex color',
  })
  contactLabelColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactInputBg must be a valid hex color',
  })
  contactInputBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactInputBorder must be a valid hex color',
  })
  contactInputBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactInputText must be a valid hex color',
  })
  contactInputText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBtnBg must be a valid hex color',
  })
  contactBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBtnText must be a valid hex color',
  })
  contactBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBtnBorder must be a valid hex color',
  })
  contactBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactBtnShadow must be a valid hex color',
  })
  contactBtnShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactDirectText must be a valid hex color',
  })
  contactDirectText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactSocialBtnBg must be a valid hex color',
  })
  contactSocialBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactSocialBtnText must be a valid hex color',
  })
  contactSocialBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactSocialBtnBorder must be a valid hex color',
  })
  contactSocialBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'contactSocialBtnShadow must be a valid hex color',
  })
  contactSocialBtnShadow?: string;

  // ============== HEADER SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerTextColor must be a valid hex color',
  })
  headerTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerHoverBg must be a valid hex color',
  })
  headerHoverBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerHoverText must be a valid hex color',
  })
  headerHoverText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerLogoBg must be a valid hex color',
  })
  headerLogoBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerLogoBorder must be a valid hex color',
  })
  headerLogoBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerLogoText must be a valid hex color',
  })
  headerLogoText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'headerLogoShadow must be a valid hex color',
  })
  headerLogoShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'sectionDividerColor must be a valid hex color',
  })
  sectionDividerColor?: string;

  // ============== HOME HERO SECTION DETAILED ==============
  @IsOptional()
  @IsIn(['small', 'medium', 'large'])
  homeHeroCardWidth?: 'small' | 'medium' | 'large';

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroCardBg must be a valid hex color',
  })
  homeHeroCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroCardBorder must be a valid hex color',
  })
  homeHeroCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroCardShadow must be a valid hex color',
  })
  homeHeroCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBadgeBg must be a valid hex color',
  })
  homeHeroBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBadgeBorder must be a valid hex color',
  })
  homeHeroBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBadgeText must be a valid hex color',
  })
  homeHeroBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroHeaderText must be a valid hex color',
  })
  homeHeroHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroContentText must be a valid hex color',
  })
  homeHeroContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroExpBadgeBg must be a valid hex color',
  })
  homeHeroExpBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroExpBadgeBorder must be a valid hex color',
  })
  homeHeroExpBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroExpBadgeText must be a valid hex color',
  })
  homeHeroExpBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroExpBadgeShadow must be a valid hex color',
  })
  homeHeroExpBadgeShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBtnBg must be a valid hex color',
  })
  homeHeroBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBtnText must be a valid hex color',
  })
  homeHeroBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBtnBorder must be a valid hex color',
  })
  homeHeroBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeHeroBtnShadow must be a valid hex color',
  })
  homeHeroBtnShadow?: string;

  @IsOptional()
  @IsString()
  homeHeroAnotherDesignUrl?: string;

  // ============== HOME ABOUT SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBadgeBg must be a valid hex color',
  })
  homeAboutBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBadgeBorder must be a valid hex color',
  })
  homeAboutBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBadgeText must be a valid hex color',
  })
  homeAboutBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutHeaderText must be a valid hex color',
  })
  homeAboutHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutContentText must be a valid hex color',
  })
  homeAboutContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutInfoBadgeBg must be a valid hex color',
  })
  homeAboutInfoBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutInfoBadgeBorder must be a valid hex color',
  })
  homeAboutInfoBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutInfoBadgeText must be a valid hex color',
  })
  homeAboutInfoBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutStatCardBg must be a valid hex color',
  })
  homeAboutStatCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutStatCardBorder must be a valid hex color',
  })
  homeAboutStatCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutStatCardShadow must be a valid hex color',
  })
  homeAboutStatCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutStatNumberText must be a valid hex color',
  })
  homeAboutStatNumberText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutStatLabelText must be a valid hex color',
  })
  homeAboutStatLabelText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBtnBg must be a valid hex color',
  })
  homeAboutBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBtnText must be a valid hex color',
  })
  homeAboutBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBtnBorder must be a valid hex color',
  })
  homeAboutBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeAboutBtnShadow must be a valid hex color',
  })
  homeAboutBtnShadow?: string;

  // ============== HOME PORTFOLIO SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBadgeBg must be a valid hex color',
  })
  homePortfolioBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBadgeBorder must be a valid hex color',
  })
  homePortfolioBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBadgeText must be a valid hex color',
  })
  homePortfolioBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioHeaderText must be a valid hex color',
  })
  homePortfolioHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioCardBg must be a valid hex color',
  })
  homePortfolioCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioCardBorder must be a valid hex color',
  })
  homePortfolioCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioCardShadow must be a valid hex color',
  })
  homePortfolioCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioCardHeaderText must be a valid hex color',
  })
  homePortfolioCardHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioCardContentText must be a valid hex color',
  })
  homePortfolioCardContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioTechBadgeBg must be a valid hex color',
  })
  homePortfolioTechBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioTechBadgeBorder must be a valid hex color',
  })
  homePortfolioTechBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioTechBadgeText must be a valid hex color',
  })
  homePortfolioTechBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBtnBg must be a valid hex color',
  })
  homePortfolioBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBtnText must be a valid hex color',
  })
  homePortfolioBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBtnBorder must be a valid hex color',
  })
  homePortfolioBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homePortfolioBtnShadow must be a valid hex color',
  })
  homePortfolioBtnShadow?: string;

  // ============== HOME CERTIFICATIONS SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertBadgeBg must be a valid hex color',
  })
  homeCertBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertBadgeBorder must be a valid hex color',
  })
  homeCertBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertBadgeText must be a valid hex color',
  })
  homeCertBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertHeaderText must be a valid hex color',
  })
  homeCertHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertCardBg must be a valid hex color',
  })
  homeCertCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertCardBorder must be a valid hex color',
  })
  homeCertCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertCardShadow must be a valid hex color',
  })
  homeCertCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertCardHeaderText must be a valid hex color',
  })
  homeCertCardHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertCardContentText must be a valid hex color',
  })
  homeCertCardContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertViewBtnBg must be a valid hex color',
  })
  homeCertViewBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertViewBtnText must be a valid hex color',
  })
  homeCertViewBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertViewBtnBorder must be a valid hex color',
  })
  homeCertViewBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertViewBtnShadow must be a valid hex color',
  })
  homeCertViewBtnShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertAllBtnBg must be a valid hex color',
  })
  homeCertAllBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertAllBtnText must be a valid hex color',
  })
  homeCertAllBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertAllBtnBorder must be a valid hex color',
  })
  homeCertAllBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCertAllBtnShadow must be a valid hex color',
  })
  homeCertAllBtnShadow?: string;

  // ============== HOME EXPERIENCE SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBadgeBg must be a valid hex color',
  })
  homeExpBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBadgeBorder must be a valid hex color',
  })
  homeExpBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBadgeText must be a valid hex color',
  })
  homeExpBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpHeaderText must be a valid hex color',
  })
  homeExpHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpCardBg must be a valid hex color',
  })
  homeExpCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpCardBorder must be a valid hex color',
  })
  homeExpCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpCardShadow must be a valid hex color',
  })
  homeExpCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpCardHeaderText must be a valid hex color',
  })
  homeExpCardHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpCardContentText must be a valid hex color',
  })
  homeExpCardContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBtnBg must be a valid hex color',
  })
  homeExpBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBtnText must be a valid hex color',
  })
  homeExpBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBtnBorder must be a valid hex color',
  })
  homeExpBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeExpBtnShadow must be a valid hex color',
  })
  homeExpBtnShadow?: string;

  // ============== HOME TOOLS SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBadgeBg must be a valid hex color',
  })
  homeToolsBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBadgeBorder must be a valid hex color',
  })
  homeToolsBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBadgeText must be a valid hex color',
  })
  homeToolsBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsHeaderText must be a valid hex color',
  })
  homeToolsHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsCardBg must be a valid hex color',
  })
  homeToolsCardBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsCardBorder must be a valid hex color',
  })
  homeToolsCardBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsCardShadow must be a valid hex color',
  })
  homeToolsCardShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsCardHeaderText must be a valid hex color',
  })
  homeToolsCardHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsToolBadgeBg must be a valid hex color',
  })
  homeToolsToolBadgeBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsToolBadgeBorder must be a valid hex color',
  })
  homeToolsToolBadgeBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsToolBadgeText must be a valid hex color',
  })
  homeToolsToolBadgeText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBtnBg must be a valid hex color',
  })
  homeToolsBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBtnText must be a valid hex color',
  })
  homeToolsBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBtnBorder must be a valid hex color',
  })
  homeToolsBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeToolsBtnShadow must be a valid hex color',
  })
  homeToolsBtnShadow?: string;

  // ============== HOME CTA SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCtaHeaderText must be a valid hex color',
  })
  homeCtaHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCtaContentText must be a valid hex color',
  })
  homeCtaContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCtaBtnBg must be a valid hex color',
  })
  homeCtaBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCtaBtnText must be a valid hex color',
  })
  homeCtaBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCtaBtnBorder must be a valid hex color',
  })
  homeCtaBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'homeCtaBtnShadow must be a valid hex color',
  })
  homeCtaBtnShadow?: string;

  // ============== FOOTER SECTION DETAILED ==============
  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerHeaderText must be a valid hex color',
  })
  footerHeaderText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerContentText must be a valid hex color',
  })
  footerContentText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerCopyrightText must be a valid hex color',
  })
  footerCopyrightText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerLogoBg must be a valid hex color',
  })
  footerLogoBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerLogoBorder must be a valid hex color',
  })
  footerLogoBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerLogoShadow must be a valid hex color',
  })
  footerLogoShadow?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerSocialBtnBg must be a valid hex color',
  })
  footerSocialBtnBg?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerSocialBtnBorder must be a valid hex color',
  })
  footerSocialBtnBorder?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerSocialBtnText must be a valid hex color',
  })
  footerSocialBtnText?: string;

  @IsOptional()
  @IsString()
  @Matches(/^#[0-9A-Fa-f]{6}$/, {
    message: 'footerSocialBtnShadow must be a valid hex color',
  })
  footerSocialBtnShadow?: string;
}
