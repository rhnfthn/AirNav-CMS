import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';

@Injectable()
export class ExperiencesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.experience.findMany({
      orderBy: { startDate: 'desc' },
    });
  }

  async findOne(id: string) {
    const exp = await this.prisma.experience.findUnique({ where: { id } });
    if (!exp) {
      throw new NotFoundException('Experience not found');
    }
    return exp;
  }

  async create(dto: CreateExperienceDto) {
    return this.prisma.experience.create({
      data: {
        company: dto.company,
        position: dto.position,
        startDate: new Date(dto.startDate),
        endDate: dto.endDate ? new Date(dto.endDate) : null,
        description: dto.description,
      },
    });
  }

  async update(id: string, dto: UpdateExperienceDto) {
    await this.findOne(id);
    return this.prisma.experience.update({
      where: { id },
      data: {
        ...dto,
        startDate: dto.startDate ? new Date(dto.startDate) : undefined,
        endDate: dto.endDate ? new Date(dto.endDate) : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.experience.delete({ where: { id } });
  }
}
