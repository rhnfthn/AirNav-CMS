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
exports.UpdateThemeDto = void 0;
const class_validator_1 = require("class-validator");
const HEX_COLOR = /^#([0-9a-fA-F]{6})$/;
class UpdateThemeDto {
    primaryBackgroundColor;
    sidebarBackgroundColor;
    headerBackgroundColor;
    primaryTextColor;
    secondaryTextColor;
    buttonColor;
    borderColor;
    loginCardBgColor;
    loginCardBorderColor;
    loginCardShadowColor;
    loginLogoBgColor;
    loginLogoBorderColor;
    loginLogoShadowColor;
    loginHeaderTextColor;
    loginContentTextColor;
    loginLabelTextColor;
    loginButtonLabel;
    loginButtonBgColor;
    loginButtonBorderColor;
    loginButtonShadowColor;
    loginBackToWebsiteText;
}
exports.UpdateThemeDto = UpdateThemeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "primaryBackgroundColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "sidebarBackgroundColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "headerBackgroundColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "primaryTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "secondaryTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "buttonColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "borderColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginCardBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginCardBorderColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginCardShadowColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginLogoBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginLogoBorderColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginLogoShadowColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginHeaderTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginContentTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginLabelTextColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginButtonLabel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginButtonBgColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginButtonBorderColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Matches)(HEX_COLOR),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginButtonShadowColor", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateThemeDto.prototype, "loginBackToWebsiteText", void 0);
//# sourceMappingURL=update-theme.dto.js.map