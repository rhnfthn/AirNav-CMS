import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { UpdateHomeLayoutDto } from './dto/update-home-layout.dto';
import { HomeLayoutService } from './home-layout.service';

@Controller('home-layout')
export class HomeLayoutController {
  constructor(private readonly homeLayoutService: HomeLayoutService) {}

  // Public read: the public site must be able to fetch layout.
  @Get()
  getLayout() {
    return this.homeLayoutService.getLayout();
  }

  // Admin-only write
  @Put()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  updateLayout(@Body() dto: UpdateHomeLayoutDto) {
    return this.homeLayoutService.updateLayout(dto);
  }

  @Get('defaults')
  getDefaults() {
    return this.homeLayoutService.getDefaultLayout();
  }
}
