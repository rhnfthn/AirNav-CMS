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
exports.ToolsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ToolsService = class ToolsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.tool.findMany({
            orderBy: { category: 'asc' },
        });
    }
    async findByCategory() {
        const tools = await this.prisma.tool.findMany({
            orderBy: { category: 'asc' },
        });
        const grouped = {};
        for (const tool of tools) {
            if (!grouped[tool.category]) {
                grouped[tool.category] = [];
            }
            grouped[tool.category].push(tool);
        }
        return grouped;
    }
    async findOne(id) {
        const tool = await this.prisma.tool.findUnique({ where: { id } });
        if (!tool) {
            throw new common_1.NotFoundException('Tool not found');
        }
        return tool;
    }
    create(dto) {
        return this.prisma.tool.create({ data: dto });
    }
    async update(id, dto) {
        await this.findOne(id);
        return this.prisma.tool.update({
            where: { id },
            data: dto,
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.tool.delete({ where: { id } });
    }
};
exports.ToolsService = ToolsService;
exports.ToolsService = ToolsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ToolsService);
//# sourceMappingURL=tools.service.js.map