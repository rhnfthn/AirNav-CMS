<template>
  <div class="min-h-screen flex flex-col theme-bg-main public-site-scope" :style="publicSiteCssVars">
    <!-- Fixed Navbar -->
    <header 
      class="pss-header fixed top-0 left-0 right-0 z-50 border-b-[3px]" 
      :style="{ 
        backgroundColor: 'var(--pss-header-bg, var(--bg-header))',
        borderColor: 'var(--pss-section-divider-color, var(--color-border))'
      }"
    >
      <div class="container-page flex h-16 items-center justify-between">
        <NuxtLink
          to="/"
          class="pss-logo-btn inline-flex items-center gap-2 text-sm font-black px-4 py-2 border-[3px] rounded-lg hover:translate-x-0.5 hover:translate-y-0.5 transition-transform"
          :style="{
            backgroundColor: 'var(--pss-header-logo-bg, #6FA8DC)',
            color: 'var(--pss-header-logo-text, #FFFFFF)',
            borderColor: 'var(--pss-header-logo-border, #B8C6DB)',
            boxShadow: '3px 3px 0px 0px var(--pss-header-logo-shadow, #B8C6DB)'
          }"
        >
          <div class="w-6 h-6 flex items-center justify-center">
            <img
              src="~/assets/rhnblack.png"
              alt="AirNav logo"
              class="w-6 h-6 object-contain"
            />
          </div>
          <span class="text-base font-black tracking-tight">Fthn</span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to" 
            class="pss-nav-link px-4 py-2 text-sm font-bold rounded-lg border-2 border-transparent transition-all duration-150"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <button
            type="button"
            class="pss-mobile-menu-btn p-2 border-2 rounded-lg transition-all text-xs font-black"
            :style="{ 
              borderColor: 'var(--pss-section-divider-color, var(--color-border))',
              color: 'var(--pss-header-text-color, var(--color-on-header))'
            }"
            @click="lang.toggle()"
          >
            {{ localeLabel }}
          </button>
          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="pss-mobile-menu-btn md:hidden p-2 border-2 rounded-lg transition-all"
            :style="{ 
              borderColor: 'var(--pss-section-divider-color, var(--color-border))',
              color: 'var(--pss-header-text-color, var(--color-on-header))'
            }"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div 
        v-if="mobileMenuOpen" 
        class="md:hidden border-t-[3px]"
        :style="{ 
          borderColor: 'var(--pss-section-divider-color, var(--color-border))',
          backgroundColor: 'var(--pss-header-bg, var(--bg-header))'
        }"
      >
        <nav class="container-page py-4 flex flex-col gap-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="pss-nav-link py-3 px-4 font-bold rounded-lg border-2 border-transparent transition-all"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main content with top padding for fixed navbar -->
    <main class="flex-1 pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer 
      class="border-t-[3px]"
      :style="{ 
        borderColor: 'var(--pss-section-divider-color, var(--color-border))',
        backgroundColor: 'var(--pss-footer-bg, var(--bg-footer))'
      }"
    >
      <div class="container-page py-5">
        <div class="flex flex-col gap-3">
          <div class="grid grid-cols-[auto,1fr,auto] items-center gap-3">
            <div class="flex items-center gap-2">
              <div 
                class="w-8 h-8 flex items-center justify-center rounded-lg border-2"
                :style="{
                  backgroundColor: 'var(--pss-footer-logo-bg, #6FA8DC)',
                  borderColor: 'var(--pss-footer-logo-border, #B8C6DB)'
                }"
              >
                <img
                  src="~/assets/rhnblack.png"
                  alt="AirNav logo"
                  class="w-5 h-5 object-contain"
                />
              </div>
              <span 
                class="font-black text-sm"
                :style="{ color: 'var(--pss-footer-header-text, var(--color-on-footer))' }"
              >Fthn</span>
            </div>

            <div class="text-center leading-tight">
              <div
                class="text-xs font-bold"
                :style="{ color: 'var(--pss-footer-copyright-text, color-mix(in srgb, var(--color-on-footer) 75%, transparent 25%))' }"
              >{{ t('public.footer.slogan') }}</div>
              <div
                class="text-xs font-medium"
                :style="{ color: 'var(--pss-footer-copyright-text, color-mix(in srgb, var(--color-on-footer) 75%, transparent 25%))' }"
              >{{ t('public.footer.copyright', { year }) }}</div>
            </div>

            <div class="flex items-center gap-3">
              <a 
                href="https://linkedin.com/in/raihanfathan" 
                target="_blank" 
                class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 border-2 hover:translate-x-0.5 hover:translate-y-0.5"
                :style="{
                  backgroundColor: 'var(--pss-footer-social-btn-bg, #EAF4FB)',
                  borderColor: 'var(--pss-footer-social-btn-border, #B8C6DB)',
                  color: 'var(--pss-footer-social-btn-text, #2C3E50)',
                  boxShadow: '2px 2px 0px 0px var(--pss-footer-social-btn-shadow, #B8C6DB)'
                }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a 
                href="https://github.com/rhnfthn" 
                target="_blank" 
                class="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 border-2 hover:translate-x-0.5 hover:translate-y-0.5"
                :style="{
                  backgroundColor: 'var(--pss-footer-social-btn-bg, #EAF4FB)',
                  borderColor: 'var(--pss-footer-social-btn-border, #B8C6DB)',
                  color: 'var(--pss-footer-social-btn-text, #2C3E50)',
                  boxShadow: '2px 2px 0px 0px var(--pss-footer-social-btn-shadow, #B8C6DB)'
                }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme';
import { usePublicSiteSettingsStore } from '~/stores/publicSiteSettings';
import { useT } from '~/composables/useT';

const year = new Date().getFullYear();
const mobileMenuOpen = ref(false);
const themeStore = useThemeStore();
const pssStore = usePublicSiteSettingsStore();
const { t, lang } = useT();

const localeLabel = computed(() => (lang.locale === 'id' ? 'IN' : 'EN'));

const navLinks = computed(() => [
  { to: '/', label: t('public.nav.home') },
  { to: '/about', label: t('public.nav.about') },
  { to: '/projects', label: t('public.nav.projects') },
  { to: '/certifications', label: t('public.nav.certifications') },
  { to: '/experience', label: t('public.nav.experience') },
  { to: '/tools', label: t('public.nav.tools') },
  { to: '/contact', label: t('public.nav.contact') },
]);

// CSS vars for public site - applied only to this layout scope
const publicSiteCssVars = computed(() => pssStore.cssVars);

const publicSiteCssText = computed(() => {
  const vars = publicSiteCssVars.value;
  const lines = Object.entries(vars)
    .map(([key, value]) => `  ${key}: ${value};`)
    .join('\n');
  return `:root {\n${lines}\n}`;
});

useHead(() => ({
  style: [
    {
      id: 'public-site-vars',
      children: publicSiteCssText.value,
    },
  ],
}));

// Close mobile menu on route change
const route = useRoute();
watch(
  () => route.path,
  () => {
    mobileMenuOpen.value = false;
  },
);

// Ensure public theme and public site settings are active on public layout
if (import.meta.client) {
  onMounted(() => {
    themeStore.ensureScope('public');
    pssStore.initSync();
    pssStore.fetchSettings();
  });
}
</script>

<style scoped>
.pss-header {
  transition: background-color 150ms ease;
}

.pss-header:hover {
  background-color: var(--pss-header-hover-bg, var(--pss-header-bg, var(--bg-header)));
}

.pss-logo-btn:hover {
  background-color: var(--pss-header-hover-bg, var(--pss-header-logo-bg, #6FA8DC));
  color: var(--pss-header-hover-text, var(--pss-header-logo-text, #FFFFFF));
}

.pss-mobile-menu-btn:hover {
  background-color: var(--pss-header-hover-bg, transparent);
  color: var(--pss-header-hover-text, var(--pss-header-text-color, var(--color-on-header)));
}

.pss-nav-link {
  color: var(--pss-header-text-color, var(--color-on-header));
}

.pss-nav-link:hover {
  background-color: var(--pss-header-hover-bg, transparent);
  border-color: var(--pss-section-divider-color, currentColor);
  color: var(--pss-header-hover-text, var(--pss-header-text-color, var(--color-on-header)));
}
</style>
