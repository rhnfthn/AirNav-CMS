<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Projects</h2>
        <p class="text-gray-600">Manage your portfolio projects.</p>
      </div>
      <NuxtLink to="/admin/projects/new" class="btn-primary">+ New Project</NuxtLink>
    </div>

    <div class="card p-4 mb-4">
      <label class="flex items-center gap-2 text-sm text-gray-600">
        <input v-model="onlyPublished" type="checkbox" class="rounded" />
        Show published only
      </label>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>

    <div v-else-if="projects.length === 0" class="card p-12 text-center">
      <p class="text-gray-500">No projects yet. Create your first one!</p>
    </div>

    <div v-else class="card overflow-hidden">
      <table class="min-w-full">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-4 py-3 text-left text-sm font-medium text-gray-500">Title</th>
            <th class="px-4 py-3 text-left text-sm font-medium text-gray-500 hidden md:table-cell">Slug</th>
            <th class="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th class="px-4 py-3 text-right text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="p in projects" :key="p.id" class="hover:bg-gray-50">
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <div v-if="p.coverImage" class="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0">
                  <img :src="p.coverImage" :alt="p.title" class="w-full h-full object-cover" />
                </div>
                <span class="font-medium text-gray-900 truncate">{{ p.title }}</span>
              </div>
            </td>
            <td class="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">{{ p.slug }}</td>
            <td class="px-4 py-3">
              <span :class="['badge', p.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600']">
                {{ p.published ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-4 py-3 text-right">
              <div class="flex justify-end gap-2">
                <NuxtLink :to="`/admin/projects/${p.id}`" class="btn-ghost p-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </NuxtLink>
                <button @click="deleteProject(p.id)" class="btn-ghost p-2 text-red-600 hover:bg-red-50">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="totalPages > 1" class="mt-4 flex items-center justify-between">
      <p class="text-sm text-gray-500">Page {{ page }} of {{ totalPages }}</p>
      <div class="flex gap-2">
        <button class="btn-secondary text-sm" :disabled="page <= 1" @click="page--">Previous</button>
        <button class="btn-secondary text-sm" :disabled="page >= totalPages" @click="page++">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const { apiFetch } = useApiClient();
const toast = useToastStore();

const loading = ref(true);
const projects = ref<any[]>([]);
const onlyPublished = ref(false);
const page = ref(1);
const totalPages = ref(1);

const fetchProjects = async () => {
  loading.value = true;
  try {
    const query: Record<string, any> = { page: page.value, limit: 10 };
    if (onlyPublished.value) query.published = true;
    
    const data = await apiFetch<{ items: any[]; pagination: { totalPages: number } }>('/projects', { query });
    projects.value = data.items;
    totalPages.value = data.pagination.totalPages;
  } catch (error) {
    toast.error('Failed to load projects');
  } finally {
    loading.value = false;
  }
};

const deleteProject = async (id: string) => {
  if (!confirm('Delete this project?')) return;
  try {
    await apiFetch(`/projects/${id}`, { method: 'DELETE' });
    toast.success('Project deleted!');
    await fetchProjects();
  } catch (error) {
    toast.error('Failed to delete project');
  }
};

watch([page, onlyPublished], () => fetchProjects());
onMounted(fetchProjects);
</script>
