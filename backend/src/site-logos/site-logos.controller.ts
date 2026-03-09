import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { SiteLogosService } from './site-logos.service';
import { CreateSiteLogoDto } from './dto/create-site-logo.dto';
import { UpdateSiteLogoDto } from './dto/update-site-logo.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('site-logos')
export class SiteLogosController {
  constructor(private readonly siteLogosService: SiteLogosService) {}

  // Public: Get active logos
  @Get('active')
  findActive(@Query('position') position?: 'header' | 'footer' | 'both') {
    return this.siteLogosService.findActive(position);
  }

  // Admin: Get all logos
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.siteLogosService.findAll();
  }

  // Admin: Get single logo
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.siteLogosService.findOne(id);
  }

  // Admin: Create logo
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateSiteLogoDto) {
    return this.siteLogosService.create(dto);
  }

  // Admin: Update logo
  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSiteLogoDto) {
    return this.siteLogosService.update(id, dto);
  }

  // Admin: Delete logo
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.siteLogosService.remove(id);
  }
}
