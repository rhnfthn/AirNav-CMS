<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">Projects</h1>
        <p class="mt-1 text-sm text-gray-600">Buat, edit, dan publish project.</p>
      </div>
      <NuxtLink to="/admin/projects/new" class="btn-primary">New</NuxtLink>
    </div>

    <div class="mt-6 flex flex-wrap items-center gap-3">
      <label class="text-sm">
        <input v-model="onlyPublished" type="checkbox" class="mr-2" />
        Published only
      </label>
      <button class="btn-secondary" @click="refresh">Refresh</button>
    </div>

    <div v-if="pending" class="mt-6 text-sm text-gray-600">Loading...</div>
    <div v-else class="mt-4 overflow-x-auto card">
      <table class="min-w-full text-sm">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-3 py-2 text-left">Title</th>
            <th class="px-3 py-2 text-left">Slug</th>
            <th class="px-3 py-2 text-left">Published</th>
            <th class="px-3 py-2"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in data?.items" :key="p.id" class="border-t">
            <td class="px-3 py-2">{{ p.title }}</td>
            <td class="px-3 py-2">{{ p.slug }}</td>
            <td class="px-3 py-2">{{ p.published ? 'Yes' : 'No' }}</td>
            <td class="px-3 py-2 text-right">
              <NuxtLink :to="`/admin/projects/${p.id}`" class="text-sm underline">Edit</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="data" class="mt-4 flex items-center gap-3 text-sm">
      <button class="btn-secondary" :disabled="page <= 1" @click="page--">Prev</button>
      <span>Page {{ page }} / {{ data.pagination.totalPages }}</span>
      <button class="btn-secondary" :disabled="page >= data.pagination.totalPages" @click="page++">Next</button>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

useSeoMeta({
  title: 'Admin Projects',
  description: 'Manage projects',
});

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image?: string | null;
  published: boolean;
  createdAt: string;
};

type ListResponse = {
  items: Project[];
  pagination: { page: number; limit: number; total: number; totalPages: number };
};

const { apiFetch } = useApiClient();
const onlyPublished = ref(false);
const page = ref(1);
const limit = ref(10);

const query = computed(() => ({
  page: page.value,
  limit: limit.value,
  ...(onlyPublished.value ? { published: true } : {}),
}));

const { data, pending, refresh } = await useAsyncData(
  () => `admin-projects-${JSON.stringify(query.value)}`,
  () => apiFetch<ListResponse>('/projects', { query: query.value }),
  { watch: [query] },
);
</script>
