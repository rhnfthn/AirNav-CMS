import { IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateToolDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUrl()
  iconUrl?: string;

  @IsString()
  category: string;
}
