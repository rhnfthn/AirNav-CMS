<template>
  <div class="min-h-full">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Edit Project</h2>
        <p class="mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">Update project details.</p>
      </div>
      <button
        class="neo-btn-secondary font-black"
        style="background-color: color-mix(in srgb, var(--bg-main) 75%, var(--color-shadow) 25%);"
        @click="onDelete"
      >
        Delete
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="neo-spinner"></div>
    </div>
    <div v-else class="neo-card p-6 max-w-3xl">
      <AdminProjectForm
        :initial="project"
        submit-label="Save Changes"
        :loading="saving"
        @submit="onSave"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const route = useRoute();
const id = computed(() => String(route.params.id));
const { apiFetch } = useApiClient();
const toast = useToastStore();

const loading = ref(true);
const saving = ref(false);
const project = ref<any>(null);

onMounted(async () => {
  try {
    const data = await apiFetch<any>(`/projects/${id.value}`);
    project.value = data;
  } catch (error) {
    toast.error('Project not found');
    await navigateTo('/admin/projects');
  } finally {
    loading.value = false;
  }
});

const onSave = async (payload: any) => {
  saving.value = true;
  try {
    await apiFetch(`/projects/${id.value}`, { method: 'PATCH', body: payload });
    toast.success('Project updated successfully!');
    await navigateTo('/admin/projects');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to update project');
  } finally {
    saving.value = false;
  }
};

const onDelete = async () => {
  if (!confirm('Are you sure you want to delete this project?')) return;
  try {
    await apiFetch(`/projects/${id.value}`, { method: 'DELETE' });
    toast.success('Project deleted!');
    await navigateTo('/admin/projects');
  } catch (error) {
    toast.error('Failed to delete project');
  }
};
</script>
