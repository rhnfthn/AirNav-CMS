import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateAboutDto } from './dto/update-about.dto';

@Injectable()
export class AboutService {
  constructor(private readonly prisma: PrismaService) {}

  async getAbout() {
    const about = await this.prisma.about.findFirst();
    if (!about) {
      // Create default if not exists
      return this.prisma.about.create({
        data: {
          title: 'Full Stack Developer',
          description: 'Update your about section',
        },
      });
    }
    return about;
  }

  async updateAbout(dto: UpdateAboutDto) {
    const existing = await this.prisma.about.findFirst();
    if (!existing) {
      return this.prisma.about.create({
        data: {
          title: dto.title ?? 'Full Stack Developer',
          description: dto.description ?? '',
          photoUrl: dto.photoUrl,
          university: dto.university,
          major: dto.major,
          gpa: dto.gpa,
        },
      });
    }

    return this.prisma.about.update({
      where: { id: existing.id },
      data: dto,
    });
  }
}
