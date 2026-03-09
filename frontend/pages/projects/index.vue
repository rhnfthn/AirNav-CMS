<template>
  <div class="theme-bg-main py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-8">
        <h1 class="text-2xl font-black tracking-wide uppercase theme-text-primary">Projects</h1>
        <p class="mt-1 text-sm theme-text-secondary font-medium">Daftar project yang sudah dipublish.</p>
      </div>

      <div v-if="pending" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>
      <div v-else class="grid gap-4 sm:grid-cols-2">
        <NuxtLink
          v-for="p in data?.items"
          :key="p.id"
          :to="`/projects/${p.slug}`"
          class="neo-card neo-card-hover p-5"
        >
          <div class="font-bold theme-text-primary">{{ p.title }}</div>
          <div class="mt-1 text-sm theme-text-secondary">{{ p.description }}</div>
          <div class="mt-3 text-sm font-bold border-b-[3px] inline-block pb-0.5" style="color: var(--color-text-primary); border-color: var(--color-button);">Read detail</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
  description: 'List of projects',
});

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  published: boolean;
};

type ListResponse = { items: Project[] };
const config = useRuntimeConfig();

const { data, pending } = await useAsyncData('public-projects', () =>
  $fetch<ListResponse>('/projects', {
    baseURL: config.public.apiBase,
    query: { page: 1, limit: 50, published: true },
  }),
);
</script>
