import { defineStore } from 'pinia';

export type ThemeScope = 'public' | 'admin';

export type ThemeSettings = {
  id?: string;
  primaryBackgroundColor: string;
  sidebarBackgroundColor: string;
  headerBackgroundColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  buttonColor: string;
  borderColor: string;

  // Admin Login Page customization
  loginCardBgColor: string;
  loginCardBorderColor: string;
  loginCardShadowColor: string;

  loginLogoBgColor: string;
  loginLogoBorderColor: string;
  loginLogoShadowColor: string;

  loginHeaderTextColor: string;
  loginContentTextColor: string;
  loginLabelTextColor: string;

  loginButtonLabel: string;
  loginButtonBgColor: string;
  loginButtonBorderColor: string;
  loginButtonShadowColor: string;

  loginBackToWebsiteText: string;
  updatedAt?: string;
};

const DEFAULT_THEME: ThemeSettings = {
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

const CHANNEL_NAME = 'airnav-settings';

const toRgb = (hex: string) => {
  const clean = hex.replace('#', '').trim();
  if (clean.length !== 6) return null;
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  if ([r, g, b].some((v) => Number.isNaN(v))) return null;
  return { r, g, b };
};

// Returns black/white depending on perceived luminance
const onColor = (hex: string) => {
  const rgb = toRgb(hex);
  if (!rgb) return 'black';
  const { r, g, b } = rgb;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance > 0.6 ? 'black' : 'white';
};

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: { ...DEFAULT_THEME } as ThemeSettings,
    publicTheme: { ...DEFAULT_THEME } as ThemeSettings,
    adminTheme: { ...DEFAULT_THEME } as ThemeSettings,
    currentScope: 'public' as ThemeScope,
    loaded: false,
  }),

  getters: {
    cssVars(): Record<string, string> {
      const t = this.theme;
      // Derive button hover color (darken by ~10%)
      const btnRgb = toRgb(t.buttonColor);
      const btnHover = btnRgb
        ? `#${Math.max(0, btnRgb.r - 20).toString(16).padStart(2, '0')}${Math.max(0, btnRgb.g - 20).toString(16).padStart(2, '0')}${Math.max(0, btnRgb.b - 19).toString(16).padStart(2, '0')}`
        : '#5B94C9'; // fallback for #6FA8DC
      return {
        '--bg-main': t.primaryBackgroundColor,
        '--bg-sidebar': t.sidebarBackgroundColor,
        '--bg-header': t.headerBackgroundColor,
        '--bg-section-alt': '#F4F9FD', // Very Light Section Blue for alternate sections
        '--color-text-primary': t.primaryTextColor,
        '--color-text-secondary': t.secondaryTextColor,
        '--color-button': t.buttonColor,
        '--color-button-hover': btnHover,
        '--color-highlight': '#A7D3F5', // Soft Sky Blue for hover & highlight
        '--color-border': t.borderColor,
        '--color-shadow': t.borderColor,
        '--color-on-main': onColor(t.primaryBackgroundColor),
        '--color-on-sidebar': onColor(t.sidebarBackgroundColor),
        '--color-on-header': onColor(t.headerBackgroundColor),
        '--color-on-button': onColor(t.buttonColor),

        // Admin Login Page
        '--login-card-bg': t.loginCardBgColor,
        '--login-card-border': t.loginCardBorderColor,
        '--login-card-shadow': t.loginCardShadowColor,
        '--login-logo-bg': t.loginLogoBgColor,
        '--login-logo-border': t.loginLogoBorderColor,
        '--login-logo-shadow': t.loginLogoShadowColor,
        '--login-header-text': t.loginHeaderTextColor,
        '--login-content-text': t.loginContentTextColor,
        '--login-label-text': t.loginLabelTextColor,
        '--login-button-bg': t.loginButtonBgColor,
        '--login-button-border': t.loginButtonBorderColor,
        '--login-button-shadow': t.loginButtonShadowColor,
        '--login-button-on': onColor(t.loginButtonBgColor),
      };
    },

    cssText(): string {
      const vars = this.cssVars;
      const lines = Object.entries(vars)
        .map(([k, v]) => `${k}: ${v};`)
        .join('\n');
      return `:root {\n${lines}\n}`;
    },
  },

  actions: {
    applyToDom() {
      if (!import.meta.client) return;
      const root = document.documentElement;
      for (const [key, value] of Object.entries(this.cssVars)) {
        root.style.setProperty(key, value);
      }
    },

    async fetchTheme(scope: ThemeScope = 'public') {
      const config = useRuntimeConfig();
      const path = scope === 'admin' ? '/theme/admin' : '/theme';
      const data = await $fetch<any>(path, {
        baseURL: config.public.apiBase as string,
        signal: AbortSignal.timeout(5000),
      });

      // Avoid persisting API-only fields (ex: `scope`) into the theme state
      const { scope: _apiScope, ...rest } = (data ?? {}) as Record<string, unknown>;
      const merged = { ...DEFAULT_THEME, ...(rest as Partial<ThemeSettings>) };

      if (scope === 'admin') {
        this.adminTheme = merged;
      } else {
        this.publicTheme = merged;
      }

      this.currentScope = scope;
      this.theme = merged;
      this.loaded = true;
      this.applyToDom();
      return merged;
    },

    setTheme(theme: Partial<ThemeSettings>, { broadcast = false, scope }: { broadcast?: boolean; scope?: ThemeScope } = {}) {
      const targetScope = scope ?? this.currentScope;
      const base = targetScope === 'admin' ? this.adminTheme : this.publicTheme;

      // Defensive: callers may pass API payloads that include extra fields
      const clean = { ...(theme as any) } as Record<string, unknown>;
      delete (clean as any).scope;

      const updated = { ...(base || this.theme), ...(clean as Partial<ThemeSettings>) } as ThemeSettings;

      if (targetScope === 'admin') {
        this.adminTheme = updated;
      } else {
        this.publicTheme = updated;
      }

      this.currentScope = targetScope;
      this.theme = updated;
      this.applyToDom();
      if (broadcast) this.broadcast();
    },

    async ensureScope(scope: ThemeScope) {
      if (scope === this.currentScope && this.loaded) {
        // Already active
        return;
      }

      if (scope === 'admin') {
        if (!this.adminTheme || !this.loaded) {
          await this.fetchTheme('admin');
          return;
        }
        this.currentScope = 'admin';
        this.theme = this.adminTheme;
        this.applyToDom();
        return;
      }

      // public
      if (!this.publicTheme || !this.loaded) {
        await this.fetchTheme('public');
        return;
      }
      this.currentScope = 'public';
      this.theme = this.publicTheme;
      this.applyToDom();
    },

    broadcast() {
      if (!import.meta.client) return;

      // Ensure we only broadcast plain JSON-cloneable data
      const basePayload = { type: 'theme', scope: this.currentScope, theme: { ...this.theme } };
      const payload = JSON.parse(JSON.stringify(basePayload));

      if (typeof BroadcastChannel !== 'undefined') {
        try {
          const ch = new BroadcastChannel(CHANNEL_NAME);
          ch.postMessage(payload);
          ch.close();
          return;
        } catch (error) {
          console.error('BroadcastChannel theme broadcast failed, falling back to localStorage:', error);
        }
      }

      // Fallback: storage event
      localStorage.setItem(CHANNEL_NAME, JSON.stringify({ ...payload, ts: Date.now() }));
    },
  },
});
