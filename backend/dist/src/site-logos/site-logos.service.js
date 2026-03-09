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
exports.SiteLogosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SiteLogosService = class SiteLogosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.siteLogo.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }
    async findActive(position) {
        const where = { isActive: true };
        if (position) {
            where.OR = [{ position }, { position: 'both' }];
        }
        return this.prisma.siteLogo.findMany({
            where,
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const logo = await this.prisma.siteLogo.findUnique({ where: { id } });
        if (!logo) {
            throw new common_1.NotFoundException(`Site logo with ID ${id} not found`);
        }
        return logo;
    }
    async create(dto) {
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
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.siteLogo.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.siteLogo.delete({ where: { id } });
    }
};
exports.SiteLogosService = SiteLogosService;
exports.SiteLogosService = SiteLogosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SiteLogosService);
//# sourceMappingURL=site-logos.service.js.map