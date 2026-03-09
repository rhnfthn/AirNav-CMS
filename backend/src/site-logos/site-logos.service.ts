import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSiteLogoDto } from './dto/create-site-logo.dto';
import { UpdateSiteLogoDto } from './dto/update-site-logo.dto';

@Injectable()
export class SiteLogosService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.siteLogo.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findActive(position?: 'header' | 'footer' | 'both') {
    const where: any = { isActive: true };
    if (position) {
      where.OR = [{ position }, { position: 'both' }];
    }
    return this.prisma.siteLogo.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const logo = await this.prisma.siteLogo.findUnique({ where: { id } });
    if (!logo) {
      throw new NotFoundException(`Site logo with ID ${id} not found`);
    }
    return logo;
  }

  async create(dto: CreateSiteLogoDto) {
    return this.prisma.siteLogo.create({
      data: {
        name: dto.name,
        imageUrl: dto.imageUrl,
        altText: dto.altText || 'Logo',
        linkUrl: dto.linkUrl || '/',
        position: dto.position || 'header',
        isActive: dto.isActive ?? true,
      },
    });
  }

  async update(id: string, dto: UpdateSiteLogoDto) {
    await this.findOne(id);
    return this.prisma.siteLogo.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.siteLogo.delete({ where: { id } });
  }
}
