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
exports.SiteLogosController = void 0;
const common_1 = require("@nestjs/common");
const site_logos_service_1 = require("./site-logos.service");
const create_site_logo_dto_1 = require("./dto/create-site-logo.dto");
const update_site_logo_dto_1 = require("./dto/update-site-logo.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let SiteLogosController = class SiteLogosController {
    siteLogosService;
    constructor(siteLogosService) {
        this.siteLogosService = siteLogosService;
    }
    findActive(position) {
        return this.siteLogosService.findActive(position);
    }
    findAll() {
        return this.siteLogosService.findAll();
    }
    findOne(id) {
        return this.siteLogosService.findOne(id);
    }
    create(dto) {
        return this.siteLogosService.create(dto);
    }
    update(id, dto) {
        return this.siteLogosService.update(id, dto);
    }
    remove(id) {
        return this.siteLogosService.remove(id);
    }
};
exports.SiteLogosController = SiteLogosController;
__decorate([
    (0, common_1.Get)('active'),
    __param(0, (0, common_1.Query)('position')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SiteLogosController.prototype, "findActive", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SiteLogosController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SiteLogosController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_site_logo_dto_1.CreateSiteLogoDto]),
    __metadata("design:returntype", void 0)
], SiteLogosController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_site_logo_dto_1.UpdateSiteLogoDto]),
    __metadata("design:returntype", void 0)
], SiteLogosController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SiteLogosController.prototype, "remove", null);
exports.SiteLogosController = SiteLogosController = __decorate([
    (0, common_1.Controller)('site-logos'),
    __metadata("design:paramtypes", [site_logos_service_1.SiteLogosService])
], SiteLogosController);
//# sourceMappingURL=site-logos.controller.js.map