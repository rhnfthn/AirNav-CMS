<template>
  <div class="min-h-full">
    <div class="max-w-6xl mx-auto">
      <div class="mb-8 flex items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Admin Theme</h2>
          <p class="theme-text-secondary mt-1">Change colors for Admin Dashboard. Does not affect public site.</p>
        </div>
        <div class="flex gap-2">
          <NuxtLink to="/admin/settings/public-site" class="neo-btn-secondary font-black">Public Site →</NuxtLink>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap gap-2 mb-6 border-b-[3px] theme-border pb-4">
        <button
          type="button"
          @click="activeTab = 'dashboard'"
          class="px-4 py-2 text-sm font-bold rounded-lg border-2 transition-all"
          :class="activeTab === 'dashboard'
            ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]'
            : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
        >
          Dashboard
        </button>
        <button
          type="button"
          @click="activeTab = 'login'"
          class="px-4 py-2 text-sm font-bold rounded-lg border-2 transition-all"
          :class="activeTab === 'login'
            ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]'
            : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
        >
          Login Page
        </button>
      </div>

      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <div v-else>
        <!-- DASHBOARD TAB -->
        <div v-if="activeTab === 'dashboard'" class="grid lg:grid-cols-2 gap-6">
          <div class="neo-card p-6">
            <form @submit.prevent="save" class="space-y-5">
              <p class="text-sm font-bold theme-text-secondary mb-4">These settings affect only the Admin Dashboard appearance.</p>

              <div class="grid grid-cols-1 gap-4">
                <AdminColorRow label="Main Background" v-model="form.primaryBackgroundColor" />
                <AdminColorRow label="Sidebar Background" v-model="form.sidebarBackgroundColor" />
                <AdminColorRow label="Header Background" v-model="form.headerBackgroundColor" />
                <AdminColorRow label="Primary Text" v-model="form.primaryTextColor" />
                <AdminColorRow label="Secondary Text" v-model="form.secondaryTextColor" />
                <AdminColorRow label="Button" v-model="form.buttonColor" />
                <AdminColorRow label="Border" v-model="form.borderColor" />
              </div>

              <div class="flex flex-wrap gap-3 pt-2">
                <button type="submit" class="neo-btn-primary font-black" :disabled="saving">
                  <span v-if="saving" class="flex items-center gap-2">
                    <div class="neo-spinner w-4 h-4" style="border-top-color: var(--color-on-button)"></div>
                    Saving...
                  </span>
                  <span v-else>Save Theme</span>
                </button>
                <button type="button" class="neo-btn-secondary font-black" :disabled="saving" @click="resetToDefaults">
                  Reset to Default
                </button>
              </div>
            </form>
          </div>

          <div class="neo-card p-6 theme-bg-main">
            <div class="flex items-center justify-between gap-4 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Live Preview</h3>
              <p class="text-xs font-bold theme-text-secondary">No rebuild</p>
            </div>

            <div class="rounded-xl border-[3px] p-4 theme-border theme-bg-main" style="box-shadow: 6px 6px 0px 0px var(--color-shadow);">
              <div class="rounded-lg border-2 p-3 mb-4 theme-border theme-bg-header">
                <p class="text-sm font-black">Header</p>
                <p class="text-xs font-bold" style="opacity: 0.8;">Uses --bg-header</p>
              </div>

              <div class="grid grid-cols-3 gap-3">
                <div class="col-span-1 rounded-lg border-2 p-3 theme-border theme-bg-sidebar">
                  <p class="text-xs font-black">Sidebar</p>
                  <p class="text-xs font-bold" style="opacity: 0.8;">--bg-sidebar</p>
                </div>
                <div class="col-span-2 rounded-lg border-2 p-3 theme-border theme-bg-main theme-text-primary">
                  <p class="text-sm font-black">Main</p>
                  <p class="text-xs font-bold" style="opacity: 0.8;">--bg-main</p>
                  <button class="neo-btn neo-btn-primary mt-3" style="color: var(--color-on-button);">Button</button>
                </div>
              </div>
            </div>

            <p class="text-xs font-bold mt-4 theme-text-secondary">
              Tip: Theme changes are stored in DB and applied via CSS variables.
            </p>
          </div>
        </div>

        <!-- LOGIN TAB -->
        <div v-else class="grid lg:grid-cols-2 gap-6">
          <div class="neo-card p-6">
            <form @submit.prevent="save" class="space-y-5">
              <p class="text-sm font-bold theme-text-secondary mb-4">These settings affect only the Admin Login page.</p>

              <div class="flex flex-wrap gap-2 mb-2">
                <button
                  type="button"
                  @click="activeLoginTab = 'card'"
                  class="px-3 py-2 text-xs font-black rounded-lg border-2 transition-all"
                  :class="activeLoginTab === 'card'
                    ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]'
                    : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
                >
                  Card
                </button>
                <button
                  type="button"
                  @click="activeLoginTab = 'logo'"
                  class="px-3 py-2 text-xs font-black rounded-lg border-2 transition-all"
                  :class="activeLoginTab === 'logo'
                    ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]'
                    : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
                >
                  Logo
                </button>
                <button
                  type="button"
                  @click="activeLoginTab = 'text'"
                  class="px-3 py-2 text-xs font-black rounded-lg border-2 transition-all"
                  :class="activeLoginTab === 'text'
                    ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]'
                    : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
                >
                  Text
                </button>
                <button
                  type="button"
                  @click="activeLoginTab = 'button'"
                  class="px-3 py-2 text-xs font-black rounded-lg border-2 transition-all"
                  :class="activeLoginTab === 'button'
                    ? 'border-[var(--color-border)] bg-[var(--color-button)] text-[var(--color-on-button)]'
                    : 'border-transparent hover:border-[var(--color-border)] theme-text-secondary'"
                >
                  Button
                </button>
              </div>

              <div v-if="activeLoginTab === 'card'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AdminColorRow label="Card Background" v-model="form.loginCardBgColor" />
                <AdminColorRow label="Card Border" v-model="form.loginCardBorderColor" />
                <AdminColorRow label="Card Shadow" v-model="form.loginCardShadowColor" />
              </div>

              <div v-else-if="activeLoginTab === 'logo'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AdminColorRow label="Logo Background" v-model="form.loginLogoBgColor" />
                <AdminColorRow label="Logo Border" v-model="form.loginLogoBorderColor" />
                <AdminColorRow label="Logo Shadow" v-model="form.loginLogoShadowColor" />
              </div>

              <div v-else-if="activeLoginTab === 'text'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <AdminColorRow label="Header Text" v-model="form.loginHeaderTextColor" />
                <AdminColorRow label="Content Text" v-model="form.loginContentTextColor" />
                <AdminColorRow label="Label Text" v-model="form.loginLabelTextColor" />
              </div>

              <div v-else class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="neo-label">Button Label</label>
                    <input v-model="form.loginButtonLabel" class="neo-input" placeholder="Login" />
                  </div>
                  <div>
                    <label class="neo-label">Back to Website Text</label>
                    <input v-model="form.loginBackToWebsiteText" class="neo-input" placeholder="← Back to website" />
                  </div>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <AdminColorRow label="Button Background" v-model="form.loginButtonBgColor" />
                  <AdminColorRow label="Button Border" v-model="form.loginButtonBorderColor" />
                  <AdminColorRow label="Button Shadow" v-model="form.loginButtonShadowColor" />
                </div>
              </div>

              <div class="flex flex-wrap gap-3 pt-2">
                <button type="submit" class="neo-btn-primary font-black" :disabled="saving">
                  <span v-if="saving" class="flex items-center gap-2">
                    <div class="neo-spinner w-4 h-4" style="border-top-color: var(--color-on-button)"></div>
                    Saving...
                  </span>
                  <span v-else>Save Theme</span>
                </button>
                <button type="button" class="neo-btn-secondary font-black" :disabled="saving" @click="resetToDefaults">
                  Reset to Default
                </button>
              </div>
            </form>
          </div>

          <div class="neo-card p-6 theme-bg-main">
            <div class="flex items-center justify-between gap-4 mb-4">
              <h3 class="text-lg font-black theme-text-primary">Login Preview</h3>
              <p class="text-xs font-bold theme-text-secondary">No rebuild</p>
            </div>

            <div
              class="rounded-xl border-[3px] p-5"
              :style="{
                backgroundColor: form.loginCardBgColor,
                borderColor: form.loginCardBorderColor,
                boxShadow: `8px 8px 0px 0px ${form.loginCardShadowColor}`,
              }"
            >
              <div
                class="w-12 h-12 rounded-xl border-[3px] mx-auto flex items-center justify-center"
                :style="{
                  backgroundColor: form.loginLogoBgColor,
                  borderColor: form.loginLogoBorderColor,
                  boxShadow: `3px 3px 0px 0px ${form.loginLogoShadowColor}`,
                }"
              >
                <div class="w-8 h-8 rounded-lg bg-white/60"></div>
              </div>

              <div class="mt-4 text-center">
                <p class="text-xl font-black" :style="{ color: form.loginHeaderTextColor }">Welcome Back</p>
                <p class="text-sm font-bold mt-1" :style="{ color: form.loginContentTextColor, opacity: 0.9 }">
                  Sign in to your Portfolio CMS dashboard
                </p>
              </div>

              <div class="mt-5 grid gap-3">
                <div class="grid gap-1">
                  <p class="text-xs font-black" :style="{ color: form.loginLabelTextColor }">EMAIL</p>
                  <div class="rounded-lg border-[3px] h-10" :style="{ borderColor: form.loginCardBorderColor, boxShadow: `3px 3px 0px 0px ${form.loginCardShadowColor}` }"></div>
                </div>
                <div class="grid gap-1">
                  <p class="text-xs font-black" :style="{ color: form.loginLabelTextColor }">PASSWORD</p>
                  <div class="rounded-lg border-[3px] h-10" :style="{ borderColor: form.loginCardBorderColor, boxShadow: `3px 3px 0px 0px ${form.loginCardShadowColor}` }"></div>
                </div>
              </div>

              <button
                type="button"
                class="w-full mt-5 rounded-lg border-[3px] py-3 text-sm font-black"
                :style="{
                  backgroundColor: form.loginButtonBgColor,
                  borderColor: form.loginButtonBorderColor,
                  color: 'var(--login-button-on)',
                  boxShadow: `4px 4px 0px 0px ${form.loginButtonShadowColor}`,
                }"
              >
                {{ form.loginButtonLabel || 'Login' }}
              </button>
            </div>

            <p class="text-sm font-bold text-center mt-4" :style="{ color: form.loginContentTextColor }">
              {{ form.loginBackToWebsiteText || '← Back to website' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';
import { useThemeStore, type ThemeSettings } from '~/stores/theme';
import AdminColorRow from '~/components/admin/ColorRow.vue';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const toast = useToastStore();
const themeStore = useThemeStore();
const { apiFetch } = useApiClient();

const loading = ref(true);
const saving = ref(false);
const loadedOnce = ref(false);
const isThemePageActive = ref(true);
const activeTab = ref<'dashboard' | 'login'>('dashboard');
const activeLoginTab = ref<'card' | 'logo' | 'text' | 'button'>('card');

// Init with neutral defaults, will be overwritten by fetch
const form = reactive<ThemeSettings>({
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
});

const isValidHex = (value: string) => /^#([0-9a-fA-F]{6})$/.test(value);

const THEME_FIELDS: Array<keyof ThemeSettings> = [
  'primaryBackgroundColor',
  'sidebarBackgroundColor',
  'headerBackgroundColor',
  'primaryTextColor',
  'secondaryTextColor',
  'buttonColor',
  'borderColor',
  'loginCardBgColor',
  'loginCardBorderColor',
  'loginCardShadowColor',
  'loginLogoBgColor',
  'loginLogoBorderColor',
  'loginLogoShadowColor',
  'loginHeaderTextColor',
  'loginContentTextColor',
  'loginLabelTextColor',
  'loginButtonLabel',
  'loginButtonBgColor',
  'loginButtonBorderColor',
  'loginButtonShadowColor',
  'loginBackToWebsiteText',
];

const toThemePayload = () => {
  const payload: Partial<ThemeSettings> = {};
  for (const key of THEME_FIELDS) {
    // @ts-expect-error - indexed access
    payload[key] = form[key];
  }
  return payload;
};

const applyPreview = () => {
  // Only apply preview after initial load is complete to prevent reset on page revisit
  if (!loadedOnce.value) return;
  // Prevent applying theme while still loading
  if (loading.value) return;
  themeStore.setTheme(toThemePayload(), { broadcast: true, scope: 'admin' });
};

let unwatchForm: (() => void) | null = null;

const NEUTRAL_THEME: ThemeSettings = {
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

const COLOR_FIELDS: Array<keyof ThemeSettings> = [
  'primaryBackgroundColor',
  'sidebarBackgroundColor',
  'headerBackgroundColor',
  'primaryTextColor',
  'secondaryTextColor',
  'buttonColor',
  'borderColor',
  'loginCardBgColor',
  'loginCardBorderColor',
  'loginCardShadowColor',
  'loginLogoBgColor',
  'loginLogoBorderColor',
  'loginLogoShadowColor',
  'loginHeaderTextColor',
  'loginContentTextColor',
  'loginLabelTextColor',
  'loginButtonBgColor',
  'loginButtonBorderColor',
  'loginButtonShadowColor',
];

const load = async () => {
  loading.value = true;
  loadedOnce.value = false;
  
  // Reset form to neutral BEFORE fetching to clear any stale state
  Object.assign(form, NEUTRAL_THEME);
  
  try {
    const adminData = await apiFetch<ThemeSettings>('/theme/admin', {
      signal: AbortSignal.timeout(5000),
    });
    console.log('[theme] Loaded from server:', adminData);
    const clean = { ...NEUTRAL_THEME, ...(adminData as any) } as ThemeSettings;
    // prevent API-only fields (id/scope/updatedAt) from being written into the reactive form
    Object.assign(form, NEUTRAL_THEME);
    Object.assign(form, Object.fromEntries(THEME_FIELDS.map((k) => [k, (clean as any)[k]])));
    themeStore.setTheme(toThemePayload(), { scope: 'admin' });
  } catch (error) {
    console.warn('[theme] Failed to load from server, using neutral defaults:', error);
  } finally {
    // Mark loaded and re-assign data one more time to ensure correct state
    // before starting to watch (in case any broadcast came while fetching)
    Object.assign(form, Object.fromEntries(THEME_FIELDS.map((k) => [k, (themeStore.adminTheme as any)[k]])));
    
    loading.value = false;
    loadedOnce.value = true;
    // Start watching only after initial load completes
    if (!unwatchForm) {
      unwatchForm = watch(form, applyPreview, { deep: true });
    }
  }
};

onMounted(() => {
  isThemePageActive.value = true;
  load();
});

onUnmounted(() => {
  loading.value = true;
  loadedOnce.value = false;
  isThemePageActive.value = false;
  
  if (unwatchForm) {
    unwatchForm();
    unwatchForm = null;
  }
  
  // Clear broadcast channel data to prevent stale theme from triggering on revisit
  try {
    localStorage.removeItem('airnav-settings');
  } catch {
    // ignore storage errors
  }
});

const save = async () => {
  if (COLOR_FIELDS.some((k) => !isValidHex(String(form[k] ?? '')))) {
    toast.error("All colors must be HEX like RRGGBB (include '#')");
    return;
  }

  saving.value = true;
  try {
    const updated = await apiFetch<ThemeSettings>('/theme/admin', {
      method: 'PUT',
      body: toThemePayload(),
    });
    themeStore.setTheme(updated as any, { broadcast: true, scope: 'admin' });
    toast.success('Admin theme saved');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to save theme');
  } finally {
    saving.value = false;
  }
};

const resetToDefaults = async () => {
  try {
    const defaults = await apiFetch<ThemeSettings>('/theme/defaults/admin');
    Object.assign(form, defaults);
    themeStore.setTheme(defaults, { broadcast: true, scope: 'admin' });
    toast.success('Reset admin theme to default');
  } catch {
    toast.error('Failed to load defaults');
  }
};
</script>
