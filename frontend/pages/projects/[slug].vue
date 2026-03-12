<template>
  <div class="theme-bg-main min-h-screen">
    <div v-if="pending" class="flex justify-center items-center py-24">
      <div class="neo-spinner"></div>
    </div>

    <div v-else-if="project" class="py-16">
      <div class="max-w-6xl mx-auto px-6">
        <NuxtLink
          to="/projects"
          class="back-link inline-flex items-center gap-2 font-bold theme-text-primary border-b-[3px] transition-colors pb-0.5 mb-8"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          {{ t('public.projectDetail.backToProjects') }}
        </NuxtLink>

        <div class="max-w-4xl mx-auto">
          <!-- Cover Image -->
          <div
            v-if="project.coverImage"
            class="aspect-video rounded-xl border-[3px] theme-border overflow-hidden mb-8"
            style="box-shadow: 6px 6px 0px 0px var(--color-shadow); background-color: color-mix(in srgb, var(--bg-main) 85%, var(--color-button) 15%);"
          >
            <img :src="project.coverImage" :alt="project.title" class="w-full h-full object-cover" />
          </div>

          <!-- Header -->
          <div class="mb-8">
            <h1 class="text-4xl font-black theme-text-primary mb-4" style="font-family: 'Space Grotesk', sans-serif;">{{ project.title }}</h1>
            <p class="text-xl theme-text-secondary">{{ project.description }}</p>
          </div>

          <!-- Tech Stack -->
          <div v-if="project.techStack?.length" class="mb-8">
            <h3 class="neo-label mb-3">{{ t('public.projectDetail.technologiesUsed') }}</h3>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="neo-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Links -->
          <div v-if="project.githubUrl || project.liveUrl" class="flex flex-wrap gap-4 mb-8">
            <a 
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="neo-btn-primary font-black inline-flex items-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              {{ t('public.projectDetail.viewLiveDemo') }}
            </a>
            <a 
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="neo-btn-secondary font-black inline-flex items-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {{ t('public.projectDetail.viewSourceCode') }}
            </a>
          </div>

          <!-- Content -->
          <div v-if="project.content" class="neo-card p-8">
            <h3 class="text-lg font-black theme-text-primary mb-4 uppercase tracking-wide">{{ t('public.projectDetail.aboutThisProject') }}</h3>
            <div class="max-w-none whitespace-pre-wrap theme-text-secondary leading-relaxed">
              {{ project.content }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="py-24 text-center max-w-6xl mx-auto px-6">
      <div class="neo-card p-12 max-w-md mx-auto">
        <h2 class="text-2xl font-black theme-text-primary mb-4">{{ t('public.projectDetail.notFoundTitle') }}</h2>
        <p class="theme-text-secondary mb-8 font-medium">{{ t('public.projectDetail.notFoundDesc') }}</p>
        <NuxtLink to="/projects" class="neo-btn-primary font-black">{{ t('public.projectDetail.backToProjects') }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useT();

const route = useRoute();
const slug = computed(() => String(route.params.slug));
const config = useRuntimeConfig();

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content?: string;
  coverImage?: string;
  techStack?: string[];
  githubUrl?: string;
  liveUrl?: string;
  published: boolean;
};

const { data: project, pending } = await useAsyncData(
  () => `project-${slug.value}`,
  () => $fetch<Project>(`/projects/slug/${slug.value}`, { baseURL: config.public.apiBase }),
);

useSeoMeta({
  title: () => project.value?.title ?? t('public.projectDetail.headTitleFallback'),
  description: () => project.value?.description ?? t('public.projectDetail.headDescFallback'),
});
</script>

<style scoped>
.back-link {
  border-bottom-color: var(--color-button);
}

.back-link:hover {
  background-color: color-mix(in srgb, var(--color-button) 15%, var(--bg-main));
}
</style>
