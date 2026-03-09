import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { UpdateThemeDto } from './dto/update-theme.dto';
import { ThemeService } from './theme.service';

@Controller('theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) {}

  // Public read: the public site must be able to fetch theme.
  @Get()
  getTheme() {
    return this.themeService.getTheme('public');
  }

  // Admin-only write
  @Put()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  updateTheme(@Body() dto: UpdateThemeDto) {
    return this.themeService.updateTheme(dto, 'public');
  }

  @Get('defaults')
  getDefaults() {
    return this.themeService.getDefaultTheme('public');
  }

  // ADMIN THEME (dashboard)

  @Get('admin')
  getAdminTheme() {
    return this.themeService.getTheme('admin');
  }

  @Put('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  updateAdminTheme(@Body() dto: UpdateThemeDto) {
    return this.themeService.updateTheme(dto, 'admin');
  }

  @Get('defaults/admin')
  getAdminDefaults() {
    return this.themeService.getDefaultTheme('admin');
  }
}
