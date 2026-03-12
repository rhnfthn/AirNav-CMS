<template>
  <div class="py-16" :style="{ backgroundColor: 'var(--pss-about-section-bg, #FFFFFF)' }">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="max-w-3xl mb-16 mx-auto text-center">
        <div 
          class="mb-4 text-xs inline-block px-3 py-1 border-2 rounded-full font-bold"
          :style="{
            backgroundColor: 'var(--pss-about-badge-bg, #EAF4FB)',
            borderColor: 'var(--pss-about-badge-border, #B8C6DB)',
            color: 'var(--pss-about-badge-text, #2C3E50)'
          }"
        >{{ t('public.about.badge') }}</div>
        <h1 class="text-4xl sm:text-5xl font-black leading-tight" style="font-family: 'Space Grotesk', sans-serif;">
          <span
            class="px-2 border-[3px] inline-block -rotate-1"
            :style="{
              backgroundColor: 'var(--pss-about-title-bg, var(--color-button))',
              borderColor: 'var(--pss-about-title-border, var(--color-border))',
              color: 'var(--pss-about-title-text, var(--color-on-button))',
              boxShadow: '4px 4px 0px 0px var(--pss-about-title-shadow, var(--color-shadow))'
            }"
          >
            {{ about?.title || t('public.common.fullStackDeveloper') }}
          </span>
        </h1>
      </div>

      <!-- Content -->
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Photo & Info -->
        <div class="lg:col-span-1">
          <!-- Info Card -->
          <div 
            class="p-6 lg:sticky lg:top-24 border-[3px] rounded-xl"
            :style="{
              backgroundColor: 'var(--pss-about-card-bg, #FFFFFF)',
              borderColor: 'var(--pss-about-card-border, var(--color-border))',
              boxShadow: '6px 6px 0px 0px var(--pss-about-card-shadow, var(--color-shadow))'
            }"
          >
            <div
              class="aspect-square rounded-xl border-[3px] overflow-hidden mb-6"
              :style="{
                borderColor: 'var(--pss-about-photo-border, var(--color-border))',
                backgroundColor: 'color-mix(in srgb, var(--bg-main) 85%, var(--bg-header) 15%)',
                boxShadow: '4px 4px 0px 0px var(--pss-about-photo-shadow, var(--color-shadow))'
              }"
            >
              <img 
                v-if="about?.photoUrl" 
                :src="about.photoUrl" 
                :alt="t('public.about.profilePhotoAlt')"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center" style="color: color-mix(in srgb, var(--color-text-secondary) 55%, transparent 45%);">
                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            <div class="text-center">
              <h3
                class="font-black text-lg theme-text-primary"
                :style="{ color: 'var(--pss-about-info-header-text, var(--color-text-primary))' }"
              >{{ t('public.about.ownerLabel') }}</h3>
              <p
                class="text-sm font-bold theme-text-secondary"
                :style="{ color: 'var(--pss-about-info-content-text, var(--color-text-secondary))' }"
              >{{ about?.title || t('public.common.fullStackDeveloper') }}</p>
            </div>

            <div v-if="about?.university || about?.major || gpaNumber !== null" class="mt-6 border-t-[3px] pt-5" :style="{ borderColor: 'var(--pss-about-card-border, var(--color-border))' }">
              <p
                class="text-xs font-black theme-text-secondary uppercase tracking-wider mb-3"
                :style="{ color: 'var(--pss-about-education-header-text, var(--color-text-secondary))' }"
              >{{ t('public.about.educationLabel') }}</p>
              <div class="space-y-2">
                <p
                  v-if="about?.university"
                  class="text-sm font-bold theme-text-primary"
                  :style="{ color: 'var(--pss-about-education-content-text, var(--color-text-primary))' }"
                >{{ about.university }}</p>
                <p
                  v-if="about?.major"
                  class="text-sm font-bold theme-text-secondary"
                  :style="{ color: 'var(--pss-about-education-content-text, var(--color-text-secondary))' }"
                >{{ about.major }}</p>
                <p
                  v-if="gpaNumber !== null"
                  class="text-sm font-bold theme-text-primary"
                  :style="{ color: 'var(--pss-about-education-content-text, var(--color-text-primary))' }"
                >{{ t('public.common.gpa') }}: {{ gpaNumber.toFixed(2) }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="lg:col-span-2">
          <div class="max-w-none">
            <p 
              class="text-lg leading-relaxed whitespace-pre-line text-justify"
              :style="{ color: 'var(--pss-about-text-color, var(--color-text-secondary))' }"
            >
              {{ about?.description || t('public.about.noDescription') }}
            </p>
          </div>

          <!-- Skills Highlight -->
          <div class="mt-12">
            <h3 class="text-xl font-black theme-text-primary mb-6 uppercase tracking-wide">{{ t('public.about.skillsTitle') }}</h3>
            <div v-if="loadingTools" class="flex justify-center py-8">
              <div class="neo-spinner"></div>
            </div>
            <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div 
                v-for="(tools, category) in groupedTools" 
                :key="category"
                class="p-4 border-[3px] rounded-xl"
                :style="{
                  backgroundColor: 'var(--pss-about-skills-card-bg, var(--pss-about-card-bg, #FFFFFF))',
                  borderColor: 'var(--pss-about-skills-card-border, var(--pss-about-card-border, var(--color-border)))',
                  boxShadow: '4px 4px 0px 0px var(--pss-about-skills-card-shadow, var(--pss-about-card-shadow, var(--color-shadow)))'
                }"
              >
                <p class="text-xs font-black theme-text-secondary uppercase tracking-wider mb-2">{{ category }}</p>
                <div class="flex flex-wrap gap-1">
                  <span 
                    v-for="tool in tools.slice(0, 4)" 
                    :key="tool.id" 
                    class="px-2 py-0.5 border-2 rounded-full text-xs font-bold"
                    :style="{
                      backgroundColor: 'var(--pss-about-skill-badge-bg, #EAF4FB)',
                      borderColor: 'var(--pss-about-skill-badge-border, #B8C6DB)',
                      color: 'var(--pss-about-skill-badge-text, #2C3E50)'
                    }"
                  >
                    {{ tool.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="mt-12 flex flex-wrap gap-4 justify-center">
            <NuxtLink 
              to="/projects" 
              class="font-black text-lg px-8 py-3 border-[3px] rounded-lg"
              :style="{
                backgroundColor: 'var(--pss-about-btn-bg, #EAF4FB)',
                color: 'var(--pss-about-btn-text, #2C3E50)',
                borderColor: 'var(--pss-about-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-about-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.about.viewProjects') }}
            </NuxtLink>
            <NuxtLink 
              to="/experience" 
              class="font-black text-lg px-8 py-3 border-[3px] rounded-lg"
              :style="{
                backgroundColor: 'var(--pss-about-btn-bg, #EAF4FB)',
                color: 'var(--pss-about-btn-text, #2C3E50)',
                borderColor: 'var(--pss-about-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-about-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.about.workExperience') }}
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="font-bold text-lg px-8 py-3 border-[3px] rounded-lg"
              :style="{
                backgroundColor: 'var(--pss-about-btn-bg, #EAF4FB)',
                color: 'var(--pss-about-btn-text, #2C3E50)',
                borderColor: 'var(--pss-about-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-about-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.about.contactMe') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();
const { t } = useT();

const loading = ref(true);
const loadingTools = ref(true);
const about = ref<any>(null);
const groupedTools = ref<Record<string, any[]>>({});

const gpaNumber = computed<number | null>(() => {
  const raw = about.value?.gpa;
  if (raw === null || raw === undefined || raw === '') return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
});

onMounted(async () => {
  try {
    const [aboutData, toolsData] = await Promise.all([
      apiFetch('/about').catch(() => null),
      apiFetch('/tools/grouped').catch(() => ({})),
    ]);
    about.value = aboutData;
    groupedTools.value = toolsData as Record<string, any[]>;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
    loadingTools.value = false;
  }
});

useHead(() => ({
  title: t('public.about.headTitle'),
  meta: [{ name: 'description', content: t('public.about.headDesc') }],
}));
</script>
