<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Edit Project</h2>
        <p class="text-gray-600">Update project details.</p>
      </div>
      <button class="btn-secondary text-red-600 hover:bg-red-50" @click="onDelete">Delete</button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>
    <div v-else class="card p-6 max-w-3xl">
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
