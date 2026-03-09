import {
  ArrayUnique,
  IsArray,
  IsBoolean,
  IsIn,
  IsOptional,
} from 'class-validator';

export const HOME_SECTIONS = [
  'hero',
  'about',
  'projects',
  'certifications',
  'experience',
  'tools',
  'contact',
] as const;

export type HomeSectionKey = (typeof HOME_SECTIONS)[number];

export class UpdateHomeLayoutDto {
  @IsOptional()
  @IsIn(['left', 'right', 'center'])
  heroImagePosition?: 'left' | 'right' | 'center';

  @IsOptional()
  @IsIn(['image-text', 'text-image', 'centered'])
  heroLayout?: 'image-text' | 'text-image' | 'centered';

  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsIn(HOME_SECTIONS, { each: true })
  sectionsOrder?: HomeSectionKey[];

  @IsOptional()
  @IsBoolean()
  showFeaturedProjects?: boolean;
}
