<template>
  <div class="container-page py-12">
    <div>
      <h1 class="text-2xl font-semibold tracking-tight">Projects</h1>
      <p class="mt-1 text-sm text-gray-600">Daftar project yang sudah dipublish.</p>
    </div>

    <div v-if="pending" class="mt-6 text-sm text-gray-600">Loading...</div>
    <div v-else class="mt-6 grid gap-4 sm:grid-cols-2">
      <NuxtLink
        v-for="p in data?.items"
        :key="p.id"
        :to="`/projects/${p.slug}`"
        class="card p-5 hover:bg-gray-50"
      >
        <div class="font-medium">{{ p.title }}</div>
        <div class="mt-1 text-sm text-gray-600">{{ p.description }}</div>
        <div class="mt-3 text-sm underline">Read detail</div>
      </NuxtLink>
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
