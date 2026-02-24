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
exports.ToolsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const tools_service_1 = require("./tools.service");
const create_tool_dto_1 = require("./dto/create-tool.dto");
const update_tool_dto_1 = require("./dto/update-tool.dto");
let ToolsController = class ToolsController {
    toolsService;
    constructor(toolsService) {
        this.toolsService = toolsService;
    }
    findAll() {
        return this.toolsService.findAll();
    }
    findByCategory() {
        return this.toolsService.findByCategory();
    }
    findOne(id) {
        return this.toolsService.findOne(id);
    }
    create(dto) {
        return this.toolsService.create(dto);
    }
    update(id, dto) {
        return this.toolsService.update(id, dto);
    }
    remove(id) {
        return this.toolsService.remove(id);
    }
};
exports.ToolsController = ToolsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('grouped'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findByCategory", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tool_dto_1.CreateToolDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_tool_dto_1.UpdateToolDto]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ToolsController.prototype, "remove", null);
exports.ToolsController = ToolsController = __decorate([
    (0, common_1.Controller)('tools'),
    __metadata("design:paramtypes", [tools_service_1.ToolsService])
], ToolsController);
//# sourceMappingURL=tools.controller.js.map