import { Controller, Get, Put, Body, UseGuards, Header } from '@nestjs/common';
import { PublicSiteSettingsService } from './public-site-settings.service';
import { UpdatePublicSiteSettingsDto } from './dto/update-public-site-settings.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('public-site-settings')
export class PublicSiteSettingsController {
  constructor(private readonly service: PublicSiteSettingsService) {}

  @Get()
  @Header('Cache-Control', 'no-store')
  async getSettings() {
    return this.service.getSettings();
  }

  @Put()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async updateSettings(@Body() dto: UpdatePublicSiteSettingsDto) {
    return this.service.updateSettings(dto);
  }

  @Get('defaults')
  @Header('Cache-Control', 'no-store')
  getDefaults() {
    return this.service.getDefaults();
  }
}
