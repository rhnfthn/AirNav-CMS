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
exports.HomeLayoutService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const update_home_layout_dto_1 = require("./dto/update-home-layout.dto");
const DEFAULT_LAYOUT = {
    heroImagePosition: client_1.HeroImagePosition.left,
    heroLayout: client_1.HeroLayout.image_text,
    sectionsOrder: [...update_home_layout_dto_1.HOME_SECTIONS],
    showFeaturedProjects: true,
};
const OLD_DEFAULT_SECTIONS = [
    'hero',
    'about',
    'projects',
    'experience',
    'contact',
];
const arraysEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
const normalizeEnabledSections = (raw) => {
    const current = Array.isArray(raw) ? raw : [];
    const filtered = current.filter((k) => update_home_layout_dto_1.HOME_SECTIONS.includes(String(k)));
    if (arraysEqual(filtered, OLD_DEFAULT_SECTIONS)) {
        return [...update_home_layout_dto_1.HOME_SECTIONS];
    }
    const enabled = [...filtered];
    const set = new Set(enabled);
    for (const key of update_home_layout_dto_1.HOME_SECTIONS) {
        if (!set.has(key))
            enabled.push(key);
    }
    return enabled;
};
const toPrismaHeroLayout = (layout) => {
    if (!layout)
        return undefined;
    switch (layout) {
        case 'image-text':
            return client_1.HeroLayout.image_text;
        case 'text-image':
            return client_1.HeroLayout.text_image;
        case 'centered':
            return client_1.HeroLayout.centered;
    }
};
const fromPrismaHeroLayout = (layout) => {
    switch (layout) {
        case client_1.HeroLayout.image_text:
            return 'image-text';
        case client_1.HeroLayout.text_image:
            return 'text-image';
        case client_1.HeroLayout.centered:
            return 'centered';
    }
};
let HomeLayoutService = class HomeLayoutService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOrCreate() {
        const existing = await this.prisma.homeLayoutSettings.findFirst();
        if (existing) {
            const normalizedSectionsOrder = normalizeEnabledSections(existing.sectionsOrder);
            if (!arraysEqual((existing.sectionsOrder ?? []), normalizedSectionsOrder)) {
                return this.prisma.homeLayoutSettings.update({
                    where: { id: existing.id },
                    data: {
                        sectionsOrder: normalizedSectionsOrder,
                        showFeaturedProjects: normalizedSectionsOrder.includes('projects'),
                    },
                });
            }
            return existing;
        }
        return this.prisma.homeLayoutSettings.create({
            data: DEFAULT_LAYOUT,
        });
    }
    async getLayout() {
        const layout = await this.getOrCreate();
        return {
            ...layout,
            heroLayout: fromPrismaHeroLayout(layout.heroLayout),
        };
    }
    async updateLayout(dto) {
        const existing = await this.getOrCreate();
        const data = { ...dto };
        if (dto.heroLayout) {
            data.heroLayout = toPrismaHeroLayout(dto.heroLayout);
        }
        if (dto.sectionsOrder) {
            data.sectionsOrder = dto.sectionsOrder;
            data.showFeaturedProjects = dto.sectionsOrder.includes('projects');
        }
        const updated = await this.prisma.homeLayoutSettings.update({
            where: { id: existing.id },
            data,
        });
        return {
            ...updated,
            heroLayout: fromPrismaHeroLayout(updated.heroLayout),
        };
    }
    getDefaultLayout() {
        return {
            ...DEFAULT_LAYOUT,
            heroLayout: fromPrismaHeroLayout(DEFAULT_LAYOUT.heroLayout),
            heroImagePosition: DEFAULT_LAYOUT.heroImagePosition,
        };
    }
};
exports.HomeLayoutService = HomeLayoutService;
exports.HomeLayoutService = HomeLayoutService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HomeLayoutService);
//# sourceMappingURL=home-layout.service.js.map