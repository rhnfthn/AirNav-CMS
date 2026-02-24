<template>
  <div>
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-semibold tracking-tight">Edit Project</h1>
        <p class="mt-1 text-sm text-gray-600">Update konten lalu simpan.</p>
      </div>
      <button class="btn-secondary" @click="onDelete">Delete</button>
    </div>

    <div v-if="pending" class="mt-6 text-sm text-gray-600">Loading...</div>
    <div v-else class="mt-6 card p-4">
      <AdminProjectForm
        :initial="initial"
        submit-label="Save"
        @submit="onSave"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const route = useRoute();
const id = computed(() => String(route.params.id));
const { apiFetch } = useApiClient();

type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image?: string | null;
  published: boolean;
};

type ListResponse = { items: Project[] };

const { data, pending } = await useAsyncData(
  () => `admin-project-${id.value}`,
  async () => {
    // Backend spec doesn't expose GET /projects/:id, so we fetch list and find.
    const res = await apiFetch<ListResponse>('/projects', { query: { page: 1, limit: 50 } });
    const project = res.items.find((p) => p.id === id.value);
    if (!project) {
      throw createError({ statusCode: 404, statusMessage: 'Project not found' });
    }
    return project;
  },
);

const initial = computed(() => data.value);

useSeoMeta(() => ({
  title: data.value ? `Edit: ${data.value.title}` : 'Edit Project',
  description: 'Edit project',
}));

const onSave = async (payload: any) => {
  await apiFetch(`/projects/${id.value}`, { method: 'PATCH', body: payload });
  await navigateTo('/admin/projects');
};

const onDelete = async () => {
  await apiFetch(`/projects/${id.value}`, { method: 'DELETE' });
  await navigateTo('/admin/projects');
};
</script>
