import { IsDateString, IsOptional, IsString } from 'class-validator';

export class CreateExperienceDto {
  @IsString()
  company: string;

  @IsString()
  position: string;

  @IsDateString()
  startDate: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsString()
  description: string;
}
