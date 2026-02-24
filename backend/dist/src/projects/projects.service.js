"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const slugify_1 = require("./utils/slugify");
let ProjectsService = class ProjectsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(query) {
        const skip = (query.page - 1) * query.limit;
        const where = query.published === undefined ? undefined : { published: query.published };
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
    async getBySlug(slug) {
        const project = await this.prisma.project.findFirst({
            where: { slug, published: true },
        });
        if (!project)
            throw new common_1.NotFoundException('Project not found');
        return project;
    }
    async create(authorId, dto) {
        const slug = await this.generateUniqueSlug(dto.title);
        return this.prisma.project.create({
            data: {
                title: dto.title,
                slug,
                description: dto.description,
                content: dto.content,
                image: dto.image,
                published: dto.published ?? false,
                authorId,
            },
        });
    }
    async update(id, dto) {
        const existing = await this.prisma.project.findUnique({ where: { id } });
        if (!existing)
            throw new common_1.NotFoundException('Project not found');
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
                image: dto.image,
                published: dto.published,
            },
        });
    }
    async remove(id) {
        await this.prisma.project.delete({ where: { id } });
        return { deleted: true };
    }
    async generateUniqueSlug(title, ignoreId) {
        const base = (0, slugify_1.slugify)(title);
        let slug = base;
        for (let suffix = 2; suffix < 1000; suffix++) {
            const existing = await this.prisma.project.findUnique({
                where: { slug },
                select: { id: true },
            });
            if (!existing)
                return slug;
            if (ignoreId && existing.id === ignoreId)
                return slug;
            slug = `${base}-${suffix}`;
        }
        return `${base}-${Date.now()}`;
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map