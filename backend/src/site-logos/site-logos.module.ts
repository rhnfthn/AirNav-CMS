import { Module } from '@nestjs/common';
import { SiteLogosController } from './site-logos.controller';
import { SiteLogosService } from './site-logos.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SiteLogosController],
  providers: [SiteLogosService],
  exports: [SiteLogosService],
})
export class SiteLogosModule {}
