import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { ListProjectsQueryDto } from './dto/list-projects.query.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { slugify } from './utils/slugify';

@Injectable()
export class ProjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async list(query: ListProjectsQueryDto) {
    const skip = (query.page - 1) * query.limit;
    const where =
      query.published === undefined ? undefined : { published: query.published };

    const [items, total] = await Promise.all([
      this.prisma.project.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: query.limit,
      }),
      this.prisma.project.count({ where }),
    ]);

    return {
      items,
      pagination: {
        page: query.page,
        limit: query.limit,
        total,
        totalPages: Math.ceil(total / query.limit),
      },
    };
  }

  async getPublished() {
    return this.prisma.project.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getBySlug(slug: string) {
    const project = await this.prisma.project.findFirst({
      where: { slug, published: true },
    });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async getById(id: string) {
    const project = await this.prisma.project.findUnique({ where: { id } });
    if (!project) throw new NotFoundException('Project not found');
    return project;
  }

  async create(dto: CreateProjectDto) {
    const slug = await this.generateUniqueSlug(dto.title);

    return this.prisma.project.create({
      data: {
        title: dto.title,
        slug,
        description: dto.description,
        content: dto.content,
        techStack: dto.techStack ?? [],
        githubUrl: dto.githubUrl,
        liveUrl: dto.liveUrl,
        coverImage: dto.coverImage,
        published: dto.published ?? false,
      },
    });
  }

  async update(id: string, dto: UpdateProjectDto) {
    const existing = await this.prisma.project.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Project not found');

    const slug = dto.title
      ? await this.generateUniqueSlug(dto.title, existing.id)
      : undefined;

    return this.prisma.project.update({
      where: { id },
      data: {
        title: dto.title,
        slug,
        description: dto.description,
        content: dto.content,
        techStack: dto.techStack,
        githubUrl: dto.githubUrl,
        liveUrl: dto.liveUrl,
        coverImage: dto.coverImage,
        published: dto.published,
      },
    });
  }

  async remove(id: string) {
    await this.prisma.project.delete({ where: { id } });
    return { deleted: true };
  }

  private async generateUniqueSlug(title: string, ignoreId?: string) {
    const base = slugify(title);
    let slug = base;

    for (let suffix = 2; suffix < 1000; suffix++) {
      const existing = await this.prisma.project.findUnique({
        where: { slug },
        select: { id: true },
      });

      if (!existing) return slug;
      if (ignoreId && existing.id === ignoreId) return slug;

      slug = `${base}-${suffix}`;
    }

    // Extremely unlikely
    return `${base}-${Date.now()}`;
  }
}
