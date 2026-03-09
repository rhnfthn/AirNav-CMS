"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const prisma_module_1 = require("./prisma/prisma.module");
const projects_module_1 = require("./projects/projects.module");
const about_module_1 = require("./about/about.module");
const certifications_module_1 = require("./certifications/certifications.module");
const experiences_module_1 = require("./experiences/experiences.module");
const tools_module_1 = require("./tools/tools.module");
const contact_module_1 = require("./contact/contact.module");
const attachments_module_1 = require("./attachments/attachments.module");
const theme_module_1 = require("./theme/theme.module");
const home_layout_module_1 = require("./home-layout/home-layout.module");
const public_site_settings_module_1 = require("./public-site-settings/public-site-settings.module");
const site_logos_module_1 = require("./site-logos/site-logos.module");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
const logging_middleware_1 = require("./common/middleware/logging.middleware");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(logging_middleware_1.LoggingMiddleware).forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            projects_module_1.ProjectsModule,
            about_module_1.AboutModule,
            certifications_module_1.CertificationsModule,
            experiences_module_1.ExperiencesModule,
            tools_module_1.ToolsModule,
            contact_module_1.ContactModule,
            attachments_module_1.AttachmentsModule,
            theme_module_1.ThemeModule,
            home_layout_module_1.HomeLayoutModule,
            public_site_settings_module_1.PublicSiteSettingsModule,
            site_logos_module_1.SiteLogosModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_filter_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map