import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCertificationDto } from './dto/create-certification.dto';
import { UpdateCertificationDto } from './dto/update-certification.dto';

@Injectable()
export class CertificationsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.certification.findMany({
      orderBy: { year: 'desc' },
    });
  }

  async findOne(id: string) {
    const cert = await this.prisma.certification.findUnique({ where: { id } });
    if (!cert) {
      throw new NotFoundException('Certification not found');
    }
    return cert;
  }

  create(dto: CreateCertificationDto) {
    return this.prisma.certification.create({ data: dto });
  }

  async update(id: string, dto: UpdateCertificationDto) {
    await this.findOne(id);
    return this.prisma.certification.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.certification.delete({ where: { id } });
  }
}
