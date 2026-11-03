import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  company: string;

  @IsOptional()
  @IsString()
  companyId?: string;

  @IsString()
  position: string;

  @IsOptional()
  @IsString()
  positionId?: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  descriptionId?: string;
}
