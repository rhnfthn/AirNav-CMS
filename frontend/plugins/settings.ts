import { useThemeStore, type ThemeScope } from '~/stores/theme';
import { useLayoutStore } from '~/stores/layout';

const CHANNEL_NAME = 'airnav-settings';

export default defineNuxtPlugin(async () => {
  const themeStore = useThemeStore();
  const layoutStore = useLayoutStore();

  // Init on server + client (SSR-friendly)
  if (!themeStore.loaded) {
    try {
      // Load public theme by default; layouts can switch scope later
      await themeStore.fetchTheme('public');
    } catch {
      // keep defaults
    }
  }

  if (!layoutStore.loaded) {
    try {
      await layoutStore.fetchLayout();
    } catch {
      // keep defaults
    }
  }

  if (!import.meta.client) return;

  // Cross-tab / cross-window live updates
  if (typeof BroadcastChannel !== 'undefined') {
    const ch = new BroadcastChannel(CHANNEL_NAME);
    ch.onmessage = (event) => {
      const data = event.data;
      if (data?.type === 'theme' && data.theme) {
        const scope: ThemeScope = data.scope === 'admin' ? 'admin' : 'public';
        themeStore.setTheme(data.theme, { scope });
      }
      if (data?.type === 'layout' && data.layout) {
        layoutStore.setLayout(data.layout);
      }
    };

    // Nuxt will keep plugin alive; no need to close
    return;
  }

  window.addEventListener('storage', (event) => {
    if (event.key !== CHANNEL_NAME || !event.newValue) return;
    try {
      const data = JSON.parse(event.newValue);
      if (data?.type === 'theme' && data.theme) {
        const scope: ThemeScope = data.scope === 'admin' ? 'admin' : 'public';
        themeStore.setTheme(data.theme, { scope });
      }
      if (data?.type === 'layout' && data.layout) {
        layoutStore.setLayout(data.layout);
      }
    } catch {
      // ignore
    }
  });
});
