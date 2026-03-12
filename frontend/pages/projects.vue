<template>
  <div class="py-16" :style="{ backgroundColor: 'var(--pss-projects-section-bg, #F4F9FD)' }">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <div 
          class="mb-4 text-xs inline-block px-3 py-1 border-2 rounded-full font-bold"
          :style="{
            backgroundColor: 'var(--pss-project-badge-bg, #EAF4FB)',
            borderColor: 'var(--pss-project-badge-border, #B8C6DB)',
            color: 'var(--pss-project-badge-text, #2C3E50)'
          }"
        >{{ t('public.common.portfolio') }}</div>
        <h1
          class="text-3xl font-black"
          :style="{ color: 'var(--pss-projects-header-text, var(--color-text-primary))' }"
          style="font-family: 'Space Grotesk', sans-serif;"
        >{{ t('public.projects.title') }}</h1>
        <p
          class="mt-2 max-w-xl mx-auto"
          :style="{ color: 'var(--pss-projects-content-text, var(--color-text-secondary))' }"
        >
          {{ t('public.projects.description') }}
        </p>
      </div>

      <!-- Tech Stack Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="tech in allTechStacks"
          :key="tech"
          @click="toggleFilter(tech)"
          class="px-3 py-1 text-sm font-bold border-[2px] rounded-full cursor-pointer transition-all hover:opacity-95"
          :style="selectedTech.includes(tech)
            ? {
                backgroundColor: 'var(--pss-project-filter-badge-bg, #FFFFFF)',
                color: 'var(--pss-project-filter-badge-text, #2C3E50)',
                borderColor: 'var(--pss-project-filter-badge-border, #B8C6DB)',
                boxShadow: '2px 2px 0px 0px var(--pss-project-filter-badge-shadow, #B8C6DB)'
              }
            : {
                backgroundColor: 'var(--pss-project-filter-badge-bg, #FFFFFF)',
                color: 'var(--pss-project-filter-badge-text, #2C3E50)',
                borderColor: 'var(--pss-project-filter-badge-border, #B8C6DB)',
                boxShadow: '2px 2px 0px 0px var(--pss-project-filter-badge-shadow, #B8C6DB)'
              }"
        >
          {{ tech }}
        </button>
        <button
          v-if="selectedTech.length > 0"
          @click="selectedTech = []"
          class="clear-filters px-3 py-1 text-sm font-bold border-[2px] rounded-full cursor-pointer transition-all"
          style="background-color: color-mix(in srgb, var(--bg-main) 86%, var(--color-border) 14%); color: var(--color-text-primary); border-color: var(--color-border); box-shadow: 2px 2px 0px 0px var(--color-shadow);"
        >
          {{ t('public.projects.clearFilters') }}
        </button>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <!-- Projects Grid -->
      <div v-else-if="filteredProjects.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="overflow-hidden group cursor-pointer border-[3px] rounded-xl transition-transform hover:-translate-y-1"
          :style="{
            backgroundColor: 'var(--pss-project-card-bg, #FFFFFF)',
            borderColor: 'var(--pss-project-card-border, #B8C6DB)',
            boxShadow: '6px 6px 0px 0px var(--pss-project-card-shadow, #B8C6DB)'
          }"
          @click="openModal(project)"
        >
          <div 
            :class="projectPhotoHeightClass"
            class="relative overflow-hidden border-b-[3px]" 
            :style="{ 
              borderColor: 'var(--pss-project-card-border, #B8C6DB)',
              backgroundColor: 'color-mix(in srgb, var(--bg-main) 85%, var(--bg-header) 15%)'
            }"
          >
            <img 
              v-if="project.coverImage" 
              :src="project.coverImage" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div v-else class="w-full h-full flex items-center justify-center" style="color: color-mix(in srgb, var(--color-text-secondary) 55%, transparent 45%);">
              <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <div class="p-5">
            <h3 class="font-bold theme-text-primary mb-2">
              {{ project.title }}
            </h3>
            <p class="text-sm theme-text-secondary mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.techStack?.slice(0, 3)" 
                :key="tech" 
                class="px-2 py-0.5 border-2 rounded-full text-xs font-bold"
                :style="{
                  backgroundColor: 'var(--pss-project-badge-bg, #EAF4FB)',
                  borderColor: 'var(--pss-project-badge-border, #B8C6DB)',
                  color: 'var(--pss-project-badge-text, #2C3E50)'
                }"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.techStack?.length > 3" 
                class="px-2 py-0.5 border-2 rounded-full text-xs font-bold"
                style="background-color: color-mix(in srgb, var(--bg-main) 90%, var(--color-border) 10%); border-color: var(--color-border); color: var(--color-text-secondary);"
              >
                +{{ project.techStack.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="neo-card p-16 text-center">
        <p class="theme-text-secondary font-bold">{{ t('public.projects.empty') }}</p>
      </div>
    </div>

    <!-- Project Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedProject" 
        class="neo-modal-overlay"
        @click.self="selectedProject = null"
      >
        <div class="neo-modal-backdrop" @click="selectedProject = null"></div>
        <div 
          class="neo-modal neo-modal-lg animate-slide-up max-h-[90vh] overflow-y-auto p-0 border-[3px] rounded-xl"
          :style="{
            backgroundColor: 'var(--pss-project-popup-bg, #FFFFFF)',
            borderColor: 'var(--pss-project-popup-border, #B8C6DB)',
            boxShadow: '8px 8px 0px 0px var(--pss-project-popup-shadow, #B8C6DB)'
          }"
        >
          <button 
            @click="selectedProject = null"
            class="absolute top-4 right-4 p-2 z-10 neo-btn-ghost hover:border-2"
            style="border-color: var(--color-border)"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <div 
            :class="projectPhotoHeightClass"
            class="border-b-[3px]" 
            :style="{ 
              borderColor: 'var(--pss-project-popup-border, #B8C6DB)',
              backgroundColor: 'color-mix(in srgb, var(--bg-main) 85%, var(--bg-header) 15%)'
            }"
          >
            <img 
              v-if="selectedProject.coverImage" 
              :src="selectedProject.coverImage" 
              :alt="selectedProject.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-6">
            <h2 class="text-2xl font-black theme-text-primary mb-2">{{ selectedProject.title }}</h2>
            <p class="theme-text-secondary mb-6">{{ selectedProject.description }}</p>
            
            <div class="mb-6">
              <p class="neo-label mb-2">{{ t('public.projects.modal.technologies') }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in selectedProject.techStack" 
                  :key="tech" 
                  class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                  :style="{
                    backgroundColor: 'var(--pss-project-badge-bg, #EAF4FB)',
                    borderColor: 'var(--pss-project-badge-border, #B8C6DB)',
                    color: 'var(--pss-project-badge-text, #2C3E50)'
                  }"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <a 
                v-if="selectedProject.githubUrl" 
                :href="selectedProject.githubUrl" 
                target="_blank"
                class="font-black inline-flex items-center gap-2 px-4 py-2 border-[3px] rounded-lg"
                :style="{
                  backgroundColor: 'var(--pss-project-btn-secondary-bg, #EAF4FB)',
                  color: 'var(--pss-project-btn-secondary-text, #2C3E50)',
                  borderColor: 'var(--pss-project-btn-secondary-border, #B8C6DB)',
                  boxShadow: '4px 4px 0px 0px var(--pss-project-btn-secondary-shadow, #B8C6DB)'
                }"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                {{ t('public.projects.modal.github') }}
              </a>
              <a 
                v-if="selectedProject.liveUrl" 
                :href="selectedProject.liveUrl" 
                target="_blank"
                class="font-black inline-flex items-center gap-2 px-4 py-2 border-[3px] rounded-lg"
                :style="{
                  backgroundColor: 'var(--pss-project-btn-primary-bg, #6FA8DC)',
                  color: 'var(--pss-project-btn-primary-text, #FFFFFF)',
                  borderColor: 'var(--pss-project-btn-primary-border, #B8C6DB)',
                  boxShadow: '4px 4px 0px 0px var(--pss-project-btn-primary-shadow, #B8C6DB)'
                }"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                {{ t('public.projects.modal.liveDemo') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { usePublicSiteSettingsStore } from '~/stores/publicSiteSettings';

const { apiFetch } = useApiClient();
const { t } = useT();
const pssStore = usePublicSiteSettingsStore();

const loading = ref(true);
const projects = ref<any[]>([]);
const selectedProject = ref<any>(null);
const selectedTech = ref<string[]>([]);

const projectPhotoHeightClass = computed(() => pssStore.projectPhotoHeightClass);

const allTechStacks = computed(() => {
  const techs = new Set<string>();
  projects.value.forEach((p) => {
    p.techStack?.forEach((t: string) => techs.add(t));
  });
  return Array.from(techs).sort();
});

const filteredProjects = computed(() => {
  if (selectedTech.value.length === 0) return projects.value;
  return projects.value.filter((p) =>
    selectedTech.value.some((t) => p.techStack?.includes(t))
  );
});

const toggleFilter = (tech: string) => {
  const index = selectedTech.value.indexOf(tech);
  if (index === -1) {
    selectedTech.value.push(tech);
  } else {
    selectedTech.value.splice(index, 1);
  }
};

const openModal = (project: any) => {
  selectedProject.value = project;
};

onMounted(async () => {
  try {
    const data = await apiFetch('/projects/published');
    projects.value = data as any[];
  } catch (error) {
    console.error('Error fetching projects:', error);
  } finally {
    loading.value = false;
  }
});

useHead(() => ({
  title: t('public.projects.headTitle'),
  meta: [{ name: 'description', content: t('public.projects.headDesc') }],
}));
</script>

<style scoped>
.clear-filters:hover {
  background-color: color-mix(in srgb, var(--bg-main) 78%, var(--color-border) 22%);
}
</style>
