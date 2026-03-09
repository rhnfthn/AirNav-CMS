import { PartialType } from '@nestjs/mapped-types';
import { CreateSiteLogoDto } from './create-site-logo.dto';

export class UpdateSiteLogoDto extends PartialType(CreateSiteLogoDto) {}
