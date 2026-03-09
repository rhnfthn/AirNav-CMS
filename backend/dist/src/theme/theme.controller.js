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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const roles_decorator_1 = require("../auth/roles.decorator");
const roles_guard_1 = require("../auth/roles.guard");
const update_theme_dto_1 = require("./dto/update-theme.dto");
const theme_service_1 = require("./theme.service");
let ThemeController = class ThemeController {
    themeService;
    constructor(themeService) {
        this.themeService = themeService;
    }
    getTheme() {
        return this.themeService.getTheme('public');
    }
    updateTheme(dto) {
        return this.themeService.updateTheme(dto, 'public');
    }
    getDefaults() {
        return this.themeService.getDefaultTheme('public');
    }
    getAdminTheme() {
        return this.themeService.getTheme('admin');
    }
    updateAdminTheme(dto) {
        return this.themeService.updateTheme(dto, 'admin');
    }
    getAdminDefaults() {
        return this.themeService.getDefaultTheme('admin');
    }
};
exports.ThemeController = ThemeController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "getTheme", null);
__decorate([
    (0, common_1.Put)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_theme_dto_1.UpdateThemeDto]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "updateTheme", null);
__decorate([
    (0, common_1.Get)('defaults'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "getDefaults", null);
__decorate([
    (0, common_1.Get)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "getAdminTheme", null);
__decorate([
    (0, common_1.Put)('admin'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_theme_dto_1.UpdateThemeDto]),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "updateAdminTheme", null);
__decorate([
    (0, common_1.Get)('defaults/admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ThemeController.prototype, "getAdminDefaults", null);
exports.ThemeController = ThemeController = __decorate([
    (0, common_1.Controller)('theme'),
    __metadata("design:paramtypes", [theme_service_1.ThemeService])
], ThemeController);
//# sourceMappingURL=theme.controller.js.map