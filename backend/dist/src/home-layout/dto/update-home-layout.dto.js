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
exports.UpdateHomeLayoutDto = exports.HOME_SECTIONS = void 0;
const class_validator_1 = require("class-validator");
exports.HOME_SECTIONS = [
    'hero',
    'about',
    'projects',
    'certifications',
    'experience',
    'tools',
    'contact',
];
class UpdateHomeLayoutDto {
    heroImagePosition;
    heroLayout;
    sectionsOrder;
    showFeaturedProjects;
}
exports.UpdateHomeLayoutDto = UpdateHomeLayoutDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['left', 'right', 'center']),
    __metadata("design:type", String)
], UpdateHomeLayoutDto.prototype, "heroImagePosition", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['image-text', 'text-image', 'centered']),
    __metadata("design:type", String)
], UpdateHomeLayoutDto.prototype, "heroLayout", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayUnique)(),
    (0, class_validator_1.IsIn)(exports.HOME_SECTIONS, { each: true }),
    __metadata("design:type", Array)
], UpdateHomeLayoutDto.prototype, "sectionsOrder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UpdateHomeLayoutDto.prototype, "showFeaturedProjects", void 0);
//# sourceMappingURL=update-home-layout.dto.js.map