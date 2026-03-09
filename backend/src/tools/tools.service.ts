import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateToolDto } from './dto/create-tool.dto';
import { UpdateToolDto } from './dto/update-tool.dto';

@Injectable()
export class ToolsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.tool.findMany({
      orderBy: { category: 'asc' },
    });
  }

  async findByCategory() {
    const tools = await this.prisma.tool.findMany({
      orderBy: { category: 'asc' },
    });

    // Group by category
    const grouped: Record<string, typeof tools> = {};
    for (const tool of tools) {
      if (!grouped[tool.category]) {
        grouped[tool.category] = [];
      }
      grouped[tool.category].push(tool);
    }

    return grouped;
  }

  async findOne(id: string) {
    const tool = await this.prisma.tool.findUnique({ where: { id } });
    if (!tool) {
      throw new NotFoundException('Tool not found');
    }
    return tool;
  }

  create(dto: CreateToolDto) {
    return this.prisma.tool.create({ data: dto });
  }

  async update(id: string, dto: UpdateToolDto) {
    await this.findOne(id);
    return this.prisma.tool.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.tool.delete({ where: { id } });
  }
}
