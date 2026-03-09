<template>
  <div class="min-h-full">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Projects</h2>
        <p class="mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">Manage your portfolio projects.</p>
      </div>
      <NuxtLink to="/admin/projects/new" class="neo-btn-primary font-black">+ New Project</NuxtLink>
    </div>

    <div class="neo-card p-4 mb-6">
      <label class="neo-label flex items-center gap-2 text-sm">
        <input v-model="onlyPublished" type="checkbox" class="rounded border-2 theme-border" style="accent-color: var(--color-button);" />
        Show published only
      </label>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="neo-spinner"></div>
    </div>

    <div v-else-if="projects.length === 0" class="neo-card p-12 text-center">
      <p class="font-bold" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">No projects yet. Create your first one!</p>
    </div>

    <div v-else class="neo-card overflow-hidden">
      <table class="neo-table min-w-full">
        <thead>
          <tr>
            <th class="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Title</th>
            <th class="px-4 py-3 text-left text-sm font-black uppercase tracking-wide hidden md:table-cell">Slug</th>
            <th class="px-4 py-3 text-left text-sm font-black uppercase tracking-wide">Status</th>
            <th class="px-4 py-3 text-right text-sm font-black uppercase tracking-wide">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in projects" :key="p.id">
            <td class="px-4 py-3">
              <div class="flex items-center gap-3">
                <div
                  v-if="p.coverImage"
                  class="w-10 h-10 rounded-lg border-2 theme-border overflow-hidden flex-shrink-0"
                  style="background-color: color-mix(in srgb, var(--bg-main) 88%, var(--color-border) 12%);"
                >
                  <img :src="p.coverImage" :alt="p.title" class="w-full h-full object-cover" />
                </div>
                <span class="font-bold theme-text-primary truncate">{{ p.title }}</span>
              </div>
            </td>
            <td class="px-4 py-3 text-sm hidden md:table-cell" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">{{ p.slug }}</td>
            <td class="px-4 py-3">
              <span :class="[p.published ? 'neo-badge-green' : 'neo-badge-gray']">
                {{ p.published ? 'Published' : 'Draft' }}
              </span>
            </td>
            <td class="px-4 py-3 text-right">
              <div class="flex justify-end gap-2">
                <NuxtLink :to="`/admin/projects/${p.id}`" class="neo-btn-ghost p-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </NuxtLink>
                <button
                  @click="deleteProject(p.id)"
                  class="neo-btn-ghost p-2"
                  style="color: color-mix(in srgb, var(--color-text-secondary) 90%, transparent 10%);"
                >
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

    <div v-if="totalPages > 1" class="mt-6 flex items-center justify-between">
      <p class="text-sm font-bold" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">Page {{ page }} of {{ totalPages }}</p>
      <div class="flex gap-2">
        <button class="neo-btn-secondary text-sm font-black" :disabled="page <= 1" @click="page--">Previous</button>
        <button class="neo-btn-secondary text-sm font-black" :disabled="page >= totalPages" @click="page++">Next</button>
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
