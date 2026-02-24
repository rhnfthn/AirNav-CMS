import { IsInt, IsOptional, IsString, IsUrl, Min } from 'class-validator';

export class CreateCertificationDto {
  @IsString()
  title: string;

  @IsString()
  issuer: string;

  @IsInt()
  @Min(1900)
  year: number;

  @IsOptional()
  @IsUrl()
  credentialUrl?: string;

  @IsOptional()
  @IsUrl()
  imageUrl?: string;
}
