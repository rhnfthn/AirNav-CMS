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
exports.ThemeService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const DEFAULT_PUBLIC_THEME = {
    primaryBackgroundColor: '#EAF4FB',
    sidebarBackgroundColor: '#F4F9FD',
    headerBackgroundColor: '#6FA8DC',
    primaryTextColor: '#2C3E50',
    secondaryTextColor: '#64748B',
    buttonColor: '#6FA8DC',
    borderColor: '#B8C6DB',
    loginCardBgColor: '#EAF4FB',
    loginCardBorderColor: '#B8C6DB',
    loginCardShadowColor: '#B8C6DB',
    loginLogoBgColor: '#A7D3F5',
    loginLogoBorderColor: '#B8C6DB',
    loginLogoShadowColor: '#B8C6DB',
    loginHeaderTextColor: '#2C3E50',
    loginContentTextColor: '#64748B',
    loginLabelTextColor: '#2C3E50',
    loginButtonLabel: 'Login',
    loginButtonBgColor: '#6FA8DC',
    loginButtonBorderColor: '#B8C6DB',
    loginButtonShadowColor: '#B8C6DB',
    loginBackToWebsiteText: '← Back to website',
};
const DEFAULT_ADMIN_THEME = {
    primaryBackgroundColor: '#FFFFFF',
    sidebarBackgroundColor: '#FFFFFF',
    headerBackgroundColor: '#FFFFFF',
    primaryTextColor: '#000000',
    secondaryTextColor: '#808080',
    buttonColor: '#FFFFFF',
    borderColor: '#000000',
    loginCardBgColor: '#EAF4FB',
    loginCardBorderColor: '#B8C6DB',
    loginCardShadowColor: '#B8C6DB',
    loginLogoBgColor: '#A7D3F5',
    loginLogoBorderColor: '#B8C6DB',
    loginLogoShadowColor: '#B8C6DB',
    loginHeaderTextColor: '#2C3E50',
    loginContentTextColor: '#64748B',
    loginLabelTextColor: '#2C3E50',
    loginButtonLabel: 'Login',
    loginButtonBgColor: '#6FA8DC',
    loginButtonBorderColor: '#B8C6DB',
    loginButtonShadowColor: '#B8C6DB',
    loginBackToWebsiteText: '← Back to website',
};
const DEFAULT_THEMES = {
    public: DEFAULT_PUBLIC_THEME,
    admin: DEFAULT_ADMIN_THEME,
};
let ThemeService = class ThemeService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    resolveScope(scope) {
        return scope === 'admin' ? 'admin' : 'public';
    }
    async getTheme(scope) {
        const resolvedScope = this.resolveScope(scope);
        const prismaScope = resolvedScope === 'admin' ? 'ADMIN' : 'PUBLIC';
        const existing = await this.prisma.themeSettings.findUnique({
            where: { scope: prismaScope },
        });
        if (existing)
            return existing;
        return this.prisma.themeSettings.create({
            data: {
                scope: prismaScope,
                ...DEFAULT_THEMES[resolvedScope],
            },
        });
    }
    async updateTheme(dto, scope) {
        const resolvedScope = this.resolveScope(scope);
        const prismaScope = resolvedScope === 'admin' ? 'ADMIN' : 'PUBLIC';
        const existing = await this.prisma.themeSettings.findUnique({
            where: { scope: prismaScope },
        });
        if (!existing) {
            return this.prisma.themeSettings.create({
                data: {
                    scope: prismaScope,
                    ...DEFAULT_THEMES[resolvedScope],
                    ...dto,
                },
            });
        }
        return this.prisma.themeSettings.update({
            where: { id: existing.id },
            data: dto,
        });
    }
    getDefaultTheme(scope) {
        const resolvedScope = this.resolveScope(scope);
        return DEFAULT_THEMES[resolvedScope];
    }
};
exports.ThemeService = ThemeService;
exports.ThemeService = ThemeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ThemeService);
//# sourceMappingURL=theme.service.js.map