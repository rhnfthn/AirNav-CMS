<template>
  <div class="container-page py-12">
    <div v-if="pending" class="text-sm text-gray-600">Loading...</div>

    <div v-else-if="project" class="mx-auto max-w-3xl">
      <div class="card p-7">
        <h1 class="text-2xl font-semibold tracking-tight">{{ project.title }}</h1>
        <p class="mt-2 text-gray-600">{{ project.description }}</p>

        <div class="mt-6 whitespace-pre-wrap leading-relaxed text-gray-800">
          {{ project.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = computed(() => String(route.params.slug));
const config = useRuntimeConfig();

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  published: boolean;
};

const { data: project, pending } = await useAsyncData(
  () => `project-${slug.value}`,
  () => $fetch<Project>(`/projects/${slug.value}`, { baseURL: config.public.apiBase }),
);

useSeoMeta(() => ({
  title: project.value?.title ?? 'Project',
  description: project.value?.description ?? 'Project detail',
}));
</script>
