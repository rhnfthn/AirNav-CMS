import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProjectsModule } from './projects/projects.module';
import { AboutModule } from './about/about.module';
import { CertificationsModule } from './certifications/certifications.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { ToolsModule } from './tools/tools.module';
import { ContactModule } from './contact/contact.module';
import { AttachmentsModule } from './attachments/attachments.module';
import { ThemeModule } from './theme/theme.module';
import { HomeLayoutModule } from './home-layout/home-layout.module';
import { PublicSiteSettingsModule } from './public-site-settings/public-site-settings.module';
import { SiteLogosModule } from './site-logos/site-logos.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { LoggingMiddleware } from './common/middleware/logging.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    ProjectsModule,
    AboutModule,
    CertificationsModule,
    ExperiencesModule,
    ToolsModule,
    ContactModule,
    AttachmentsModule,
    ThemeModule,
    HomeLayoutModule,
    PublicSiteSettingsModule,
    SiteLogosModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggingMiddleware).forRoutes('*');
  }
}
