import { defineStore } from 'pinia';

export type HeroImagePosition = 'left' | 'right' | 'center';
export type HeroLayout = 'image-text' | 'text-image' | 'centered';
export type HomeSectionKey =
  | 'hero'
  | 'about'
  | 'projects'
  | 'certifications'
  | 'experience'
  | 'tools'
  | 'contact';

export type HomeLayoutSettings = {
  id?: string;
  heroImagePosition: HeroImagePosition;
  heroLayout: HeroLayout;
  sectionsOrder: HomeSectionKey[];
  showFeaturedProjects: boolean;
  updatedAt?: string;
};

const DEFAULT_LAYOUT: HomeLayoutSettings = {
  heroImagePosition: 'left',
  heroLayout: 'image-text',
  sectionsOrder: ['hero', 'about', 'projects', 'certifications', 'experience', 'tools', 'contact'],
  showFeaturedProjects: true,
};

const CHANNEL_NAME = 'airnav-settings';

export const useLayoutStore = defineStore('layout', {
  state: () => ({
    layout: { ...DEFAULT_LAYOUT } as HomeLayoutSettings,
    loaded: false,
  }),

  actions: {
    async fetchLayout() {
      const config = useRuntimeConfig();
      const data = await $fetch<HomeLayoutSettings>('/home-layout', {
        baseURL: config.public.apiBase as string,
        signal: AbortSignal.timeout(5000),
      });
      this.layout = { ...DEFAULT_LAYOUT, ...data };
      this.loaded = true;
      return this.layout;
    },

    setLayout(layout: Partial<HomeLayoutSettings>, { broadcast = false }: { broadcast?: boolean } = {}) {
      this.layout = { ...this.layout, ...layout };
      if (broadcast) this.broadcast();
    },

    broadcast() {
      if (!import.meta.client) return;

      // Ensure we only broadcast plain JSON-cloneable data
      const basePayload = { type: 'layout', layout: { ...this.layout } };
      const payload = JSON.parse(JSON.stringify(basePayload));

      if (typeof BroadcastChannel !== 'undefined') {
        try {
          const ch = new BroadcastChannel(CHANNEL_NAME);
          ch.postMessage(payload);
          ch.close();
          return;
        } catch (error) {
          console.error('BroadcastChannel layout broadcast failed, falling back to localStorage:', error);
        }
      }

      localStorage.setItem(CHANNEL_NAME, JSON.stringify({ ...payload, ts: Date.now() }));
    },
  },
});
