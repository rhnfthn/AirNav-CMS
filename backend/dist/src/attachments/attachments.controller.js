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
exports.AttachmentsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const multer_1 = require("multer");
const attachments_service_1 = require("./attachments.service");
let AttachmentsController = class AttachmentsController {
    attachments;
    constructor(attachments) {
        this.attachments = attachments;
    }
    async upload(file, req) {
        if (!file)
            throw new common_1.BadRequestException('No file uploaded');
        const created = await this.attachments.create({
            originalName: file.originalname,
            mimeType: file.mimetype,
            size: file.size,
            data: new Uint8Array(file.buffer),
        });
        const host = req.get('host');
        const protoHeader = req.get('x-forwarded-proto');
        const protocol = protoHeader
            ? String(protoHeader).split(',')[0]
            : req.protocol;
        const baseUrl = host ? `${protocol}://${host}` : '';
        const path = `/attachments/${created.id}`;
        const url = baseUrl ? `${baseUrl}${path}` : path;
        return {
            id: created.id,
            url,
            path,
            originalName: created.originalName,
            mimeType: created.mimeType,
            size: created.size,
        };
    }
    async getFile(id, res) {
        const attachment = await this.attachments.getById(id);
        res.setHeader('Content-Type', attachment.mimeType);
        res.setHeader('Content-Length', String(attachment.size));
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        return res.send(attachment.data);
    }
};
exports.AttachmentsController = AttachmentsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.memoryStorage)(),
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AttachmentsController.prototype, "upload", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AttachmentsController.prototype, "getFile", null);
exports.AttachmentsController = AttachmentsController = __decorate([
    (0, common_1.Controller)('attachments'),
    __metadata("design:paramtypes", [attachments_service_1.AttachmentsService])
], AttachmentsController);
//# sourceMappingURL=attachments.controller.js.map