import { defineStore } from 'pinia';

export type AppLocale = 'id' | 'en';

const COOKIE_NAME = 'airnav_locale';

export const useLangStore = defineStore('lang', {
  state: () => ({
    locale: 'id' as AppLocale,
    ready: false,
  }),

  actions: {
    initFromCookie() {
      // Nuxt composables are available inside store actions.
      const cookie = useCookie<AppLocale>(COOKIE_NAME, {
        default: () => 'id',
        sameSite: 'lax',
        path: '/',
      });

      const value = cookie.value === 'en' ? 'en' : 'id';
      this.locale = value;
      this.ready = true;
    },

    setLocale(locale: AppLocale) {
      const next = locale === 'en' ? 'en' : 'id';
      this.locale = next;

      const cookie = useCookie<AppLocale>(COOKIE_NAME, {
        default: () => 'id',
        sameSite: 'lax',
        path: '/',
      });
      cookie.value = next;
    },

    toggle() {
      this.setLocale(this.locale === 'id' ? 'en' : 'id');
    },
  },
});
