<template>
  <div class="py-16" :style="{ backgroundColor: 'var(--pss-tools-section-bg, #FFFFFF)' }">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <div 
          class="mb-4 text-xs inline-block px-3 py-1 border-2 rounded-full font-bold"
          :style="{
            backgroundColor: 'var(--pss-tools-badge-bg, #EAF4FB)',
            borderColor: 'var(--pss-tools-badge-border, #B8C6DB)',
            color: 'var(--pss-tools-badge-text, #2C3E50)'
          }"
        >{{ t('public.tools.badge') }}</div>
        <h1
          class="text-3xl font-black"
          style="font-family: 'Space Grotesk', sans-serif; color: var(--pss-tools-header-text, #1A202C);"
        >
          {{ t('public.tools.title') }}
        </h1>
        <p class="mt-2 max-w-xl mx-auto" :style="{ color: 'var(--pss-tools-content-text, #4A5568)' }">
          {{ t('public.tools.description') }}
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <!-- Tools by Category -->
      <div v-else-if="categories.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="group in categories" 
          :key="group.category" 
          class="p-6 border-[3px] rounded-xl"
          :style="{
            backgroundColor: 'var(--pss-tools-card-bg, #FFFFFF)',
            borderColor: 'var(--pss-tools-card-border, #B8C6DB)',
            boxShadow: '6px 6px 0px 0px var(--pss-tools-card-shadow, #B8C6DB)'
          }"
        >
          <h2 class="text-lg font-black flex items-center gap-2" :style="{ color: 'var(--pss-tools-category-title-text, #2C3E50)' }">
            <span 
              class="w-3 h-3 rounded-sm border-2" 
              :style="{
                backgroundColor: 'var(--pss-tools-category-dot-bg, var(--color-button))',
                borderColor: 'var(--pss-tools-category-dot-border, #B8C6DB)'
              }"
            ></span>
            {{ group.category }}
          </h2>

          <div class="mt-4 space-y-3">
            <div
              v-for="tool in group.tools"
              :key="tool.id"
              class="flex items-center gap-3"
            >
              <div
                class="w-9 h-9 rounded-lg border-2 flex items-center justify-center shrink-0"
                :style="{
                  backgroundColor: 'var(--pss-tools-icon-bg, #F4F9FD)',
                  borderColor: 'var(--pss-tools-icon-border, #B8C6DB)'
                }"
              >
                <img
                  v-if="tool.iconUrl"
                  :src="tool.iconUrl"
                  :alt="tool.name"
                  class="w-5 h-5 object-contain"
                />
                <span v-else class="text-sm font-black" style="color: color-mix(in srgb, var(--color-text-secondary) 55%, transparent 45%);">
                  {{ tool.name.charAt(0) }}
                </span>
              </div>
              <p class="text-sm font-bold leading-tight" :style="{ color: 'var(--pss-tools-item-text, #2C3E50)' }">{{ tool.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="neo-card p-16 text-center">
        <p class="theme-text-secondary font-bold">{{ t('public.tools.empty') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();
const { t } = useT();

const loading = ref(true);
const groupedTools = ref<Record<string, any[]>>({});

const categories = computed(() => {
  const entries = Object.entries(groupedTools.value);
  entries.sort(([a], [b]) => a.localeCompare(b));
  return entries.map(([category, tools]) => {
    const sortedTools = [...tools].sort((x, y) => String(x?.name ?? '').localeCompare(String(y?.name ?? '')));
    return { category, tools: sortedTools };
  });
});

onMounted(async () => {
  try {
    const data = await apiFetch('/tools/grouped');
    groupedTools.value = data as Record<string, any[]>;
  } catch (error) {
    console.error('Error fetching tools:', error);
  } finally {
    loading.value = false;
  }
});

useHead(() => ({
  title: t('public.tools.headTitle'),
  meta: [{ name: 'description', content: t('public.tools.headDesc') }],
}));
</script>
