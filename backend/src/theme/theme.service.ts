import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateThemeDto } from './dto/update-theme.dto';

type ThemeScopeType = 'public' | 'admin';

const DEFAULT_PUBLIC_THEME = {
  // Pastel Corporate AirNav Palette (Feb 2026) - PUBLIC SITE
  primaryBackgroundColor: '#EAF4FB',
  sidebarBackgroundColor: '#F4F9FD',
  headerBackgroundColor: '#6FA8DC',
  primaryTextColor: '#2C3E50',
  secondaryTextColor: '#64748B',
  buttonColor: '#6FA8DC',
  borderColor: '#B8C6DB',

  // Admin Login Page (shared defaults)
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
  // Clean white dashboard theme for ADMIN
  primaryBackgroundColor: '#FFFFFF',
  sidebarBackgroundColor: '#FFFFFF',
  headerBackgroundColor: '#FFFFFF',
  primaryTextColor: '#000000',
  secondaryTextColor: '#808080',
  buttonColor: '#FFFFFF',
  borderColor: '#000000',

  // Admin Login Page (kept separate from dashboard colors)
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

const DEFAULT_THEMES: Record<ThemeScopeType, typeof DEFAULT_PUBLIC_THEME> = {
  public: DEFAULT_PUBLIC_THEME,
  admin: DEFAULT_ADMIN_THEME,
};

@Injectable()
export class ThemeService {
  constructor(private readonly prisma: PrismaService) {}

  private resolveScope(scope?: ThemeScopeType): ThemeScopeType {
    return scope === 'admin' ? 'admin' : 'public';
  }

  async getTheme(scope?: ThemeScopeType) {
    const resolvedScope = this.resolveScope(scope);
    const prismaScope = resolvedScope === 'admin' ? 'ADMIN' : 'PUBLIC';

    const existing = await this.prisma.themeSettings.findUnique({
      where: { scope: prismaScope },
    });
    if (existing) return existing;

    return this.prisma.themeSettings.create({
      data: {
        scope: prismaScope,
        ...DEFAULT_THEMES[resolvedScope],
      },
    });
  }

  async updateTheme(dto: UpdateThemeDto, scope?: ThemeScopeType) {
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

  getDefaultTheme(scope?: ThemeScopeType) {
    const resolvedScope = this.resolveScope(scope);
    return DEFAULT_THEMES[resolvedScope];
  }
}
