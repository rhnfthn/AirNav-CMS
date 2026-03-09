import { IsOptional, IsString, Matches } from 'class-validator';

const HEX_COLOR = /^#([0-9a-fA-F]{6})$/;

export class UpdateThemeDto {
  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  primaryBackgroundColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  sidebarBackgroundColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  headerBackgroundColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  primaryTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  secondaryTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  buttonColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  borderColor?: string;

  // Admin Login Page customization

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginCardBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginCardBorderColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginCardShadowColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginLogoBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginLogoBorderColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginLogoShadowColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginHeaderTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginContentTextColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginLabelTextColor?: string;

  @IsOptional()
  @IsString()
  loginButtonLabel?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginButtonBgColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginButtonBorderColor?: string;

  @IsOptional()
  @IsString()
  @Matches(HEX_COLOR)
  loginButtonShadowColor?: string;

  @IsOptional()
  @IsString()
  loginBackToWebsiteText?: string;
}
