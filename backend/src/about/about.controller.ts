import { Body, Controller, Get, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AboutService } from './about.service';
import { UpdateAboutDto } from './dto/update-about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  getAbout() {
    return this.aboutService.getAbout();
  }

  @Put()
  @UseGuards(JwtAuthGuard)
  updateAbout(@Body() dto: UpdateAboutDto) {
    return this.aboutService.updateAbout(dto);
  }
}
