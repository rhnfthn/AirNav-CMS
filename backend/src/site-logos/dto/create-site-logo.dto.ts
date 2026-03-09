import { IsString, IsOptional, IsBoolean, IsIn } from 'class-validator';

export class CreateSiteLogoDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  altText?: string;

  @IsOptional()
  @IsString()
  linkUrl?: string;

  @IsOptional()
  @IsIn(['header', 'footer', 'both'])
  position?: 'header' | 'footer' | 'both';

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
