import { Module } from '@nestjs/common';
import { PublicSiteSettingsController } from './public-site-settings.controller';
import { PublicSiteSettingsService } from './public-site-settings.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PublicSiteSettingsController],
  providers: [PublicSiteSettingsService],
  exports: [PublicSiteSettingsService],
})
export class PublicSiteSettingsModule {}
