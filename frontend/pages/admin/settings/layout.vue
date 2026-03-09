<template>
  <div class="min-h-full">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8 flex items-start justify-between gap-4">
        <div>
          <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Layout Manager</h2>
          <p class="theme-text-secondary mt-1">Control Home hero layout and section order. Changes apply instantly.</p>
        </div>
        <NuxtLink to="/admin/settings/theme" class="neo-btn-secondary font-black">← Theme</NuxtLink>
      </div>

      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <div v-else class="grid lg:grid-cols-2 gap-6">
        <div class="neo-card p-6">
          <form @submit.prevent="save" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="neo-label">Hero Image Position</label>
                <select v-model="form.heroImagePosition" class="neo-input" :disabled="saving">
                  <option value="left">Left</option>
                  <option value="center">Center</option>
                  <option value="right">Right</option>
                </select>
              </div>

              <div>
                <label class="neo-label">Hero Layout</label>
                <select v-model="form.heroLayout" class="neo-input" :disabled="saving">
                  <option value="image-text">Image • Text</option>
                  <option value="text-image">Text • Image</option>
                  <option value="centered">Centered</option>
                </select>
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between gap-3 mb-2">
                <label class="neo-label mb-0">Home Sections Order</label>
                <button type="button" class="neo-btn-ghost font-black" :disabled="saving" @click="resetToDefaults">
                  Reset
                </button>
              </div>

              <div class="space-y-2">
                <div
                  v-for="(s, idx) in sections"
                  :key="s.key"
                  class="rounded-xl border-[3px] p-4 flex items-center justify-between gap-4"
                  :class="s.enabled ? '' : 'opacity-60'"
                  style="border-color: var(--color-border); box-shadow: 4px 4px 0px 0px var(--color-shadow); background-color: color-mix(in srgb, var(--bg-main) 75%, var(--bg-header) 25%);"
                  draggable="true"
                  @dragstart="onDragStart(s.key)"
                  @dragover.prevent
                  @drop.prevent="onDrop(s.key)"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-lg border-2 flex items-center justify-center" style="border-color: var(--color-border); background-color: var(--color-button); color: var(--color-on-button);">
                      <span class="font-black">{{ idx + 1 }}</span>
                    </div>

                    <div>
                      <p class="text-sm font-black theme-text-primary">{{ s.label }}</p>
                      <p class="text-xs font-bold theme-text-secondary">Drag to reorder</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-4">
                    <label class="flex items-center gap-2 text-sm font-black" style="color: var(--color-text-primary)">
                      <input type="checkbox" class="h-5 w-5" v-model="s.enabled" :disabled="saving" @change="applyLivePreview" />
                      Show
                    </label>

                    <div class="text-xs font-black" style="color: var(--color-text-secondary)">
                      <span v-if="dragKey === s.key">Moving...</span>
                      <span v-else>☰</span>
                    </div>
                  </div>
                </div>
              </div>

              <p class="text-xs font-bold mt-3 theme-text-secondary">
                Note: Hiding “Projects” also disables Featured Projects on Home.
              </p>
            </div>

            <div class="flex gap-3 pt-2">
              <button type="submit" class="neo-btn-primary font-black" :disabled="saving">
                <span v-if="saving" class="flex items-center gap-2">
                  <div class="neo-spinner w-4 h-4" style="border-top-color: var(--color-on-button)"></div>
                  Saving...
                </span>
                <span v-else>Save Layout</span>
              </button>
            </div>
          </form>
        </div>

        <div class="neo-card p-6 theme-bg-main">
          <div class="flex items-center justify-between gap-4 mb-4">
            <h3 class="text-lg font-black theme-text-primary">Live Preview</h3>
            <p class="text-xs font-bold theme-text-secondary">Open Home in another tab</p>
          </div>

          <div class="rounded-xl border-[3px] p-4 theme-border" style="background-color: color-mix(in srgb, var(--bg-main) 85%, var(--bg-header) 15%); box-shadow: 6px 6px 0px 0px var(--color-shadow);">
            <p class="text-sm font-black theme-text-primary mb-2">Current config</p>
            <ul class="text-sm font-bold theme-text-secondary space-y-1">
              <li>Hero Layout: <span class="theme-text-primary">{{ form.heroLayout }}</span></li>
              <li>Hero Image Position: <span class="theme-text-primary">{{ form.heroImagePosition }}</span></li>
              <li>Sections: <span class="theme-text-primary">{{ enabledSectionKeys.join(' → ') }}</span></li>
            </ul>
          </div>

          <p class="text-xs font-bold mt-4 theme-text-secondary">
            When you save, values persist to DB. Without save, you still get live preview (in this browser).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';
import { useLayoutStore, type HomeLayoutSettings, type HomeSectionKey } from '~/stores/layout';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const toast = useToastStore();
const layoutStore = useLayoutStore();
const { apiFetch } = useApiClient();

const loading = ref(true);
const saving = ref(false);

const LABELS: Record<HomeSectionKey, string> = {
  hero: 'Hero',
  about: 'About',
  projects: 'Projects (Featured)',
  certifications: 'Certifications',
  experience: 'Experience',
  tools: 'Tools',
  contact: 'Contact',
};

const form = reactive<Pick<HomeLayoutSettings, 'heroImagePosition' | 'heroLayout'>>({
  heroImagePosition: layoutStore.layout.heroImagePosition,
  heroLayout: layoutStore.layout.heroLayout,
});

type SectionRow = { key: HomeSectionKey; label: string; enabled: boolean };
const sections = ref<SectionRow[]>([]);

const dragKey = ref<HomeSectionKey | null>(null);

const enabledSectionKeys = computed(() => sections.value.filter((s) => s.enabled).map((s) => s.key));

const initRows = (enabledOrder: HomeSectionKey[]) => {
  const full: HomeSectionKey[] = ['hero', 'about', 'projects', 'certifications', 'experience', 'tools', 'contact'];
  const enabledSet = new Set<HomeSectionKey>(enabledOrder);
  const ordered: HomeSectionKey[] = [
    ...enabledOrder.filter((k) => full.includes(k)),
    ...full.filter((k) => !enabledSet.has(k)),
  ];

  sections.value = ordered.map((key) => ({
    key,
    label: LABELS[key],
    enabled: enabledSet.has(key),
  }));
};

const applyLivePreview = () => {
  const enabled = enabledSectionKeys.value;
  layoutStore.setLayout(
    {
      heroImagePosition: form.heroImagePosition,
      heroLayout: form.heroLayout,
      sectionsOrder: enabled,
      showFeaturedProjects: enabled.includes('projects'),
    },
    { broadcast: true },
  );
};

const onDragStart = (key: HomeSectionKey) => {
  dragKey.value = key;
};

const onDrop = (targetKey: HomeSectionKey) => {
  if (!dragKey.value) return;
  const from = sections.value.findIndex((s) => s.key === dragKey.value);
  const to = sections.value.findIndex((s) => s.key === targetKey);
  if (from < 0 || to < 0 || from === to) {
    dragKey.value = null;
    return;
  }

  const next = [...sections.value];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  sections.value = next;
  dragKey.value = null;

  applyLivePreview();
};

watch(
  () => ({ ...form }),
  () => {
    // Live preview for hero config changes
    layoutStore.setLayout(
      {
        heroImagePosition: form.heroImagePosition,
        heroLayout: form.heroLayout,
      },
      { broadcast: true },
    );
  },
  { deep: true },
);

const load = async () => {
  loading.value = true;
  try {
    const data = await apiFetch<HomeLayoutSettings>('/home-layout');
    layoutStore.setLayout(data);
    form.heroImagePosition = data.heroImagePosition;
    form.heroLayout = data.heroLayout;
    initRows((data.sectionsOrder || []) as HomeSectionKey[]);
  } catch {
    initRows(layoutStore.layout.sectionsOrder);
  } finally {
    loading.value = false;
  }
};

onMounted(load);

const save = async () => {
  saving.value = true;
  try {
    const order = enabledSectionKeys.value;
    const updated = await apiFetch<HomeLayoutSettings>('/home-layout', {
      method: 'PUT',
      body: {
        heroImagePosition: form.heroImagePosition,
        heroLayout: form.heroLayout,
        sectionsOrder: order,
        showFeaturedProjects: order.includes('projects'),
      },
    });
    layoutStore.setLayout(updated, { broadcast: true });
    toast.success('Layout saved');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to save layout');
  } finally {
    saving.value = false;
  }
};

const resetToDefaults = async () => {
  try {
    const defaults = await apiFetch<HomeLayoutSettings>('/home-layout/defaults');
    layoutStore.setLayout(defaults, { broadcast: true });
    form.heroImagePosition = defaults.heroImagePosition;
    form.heroLayout = defaults.heroLayout;
    initRows(defaults.sectionsOrder);
    toast.success('Reset to default');
  } catch {
    toast.error('Failed to load defaults');
  }
};
</script>
