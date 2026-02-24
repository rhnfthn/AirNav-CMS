<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-900">New Project</h2>
      <p class="text-gray-600">Create a new portfolio project.</p>
    </div>
    <div class="card p-6 max-w-3xl">
      <AdminProjectForm submit-label="Create Project" :loading="saving" @submit="onCreate" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const { apiFetch } = useApiClient();
const toast = useToastStore();
const saving = ref(false);

const onCreate = async (payload: any) => {
  saving.value = true;
  try {
    await apiFetch('/projects', { method: 'POST', body: payload });
    toast.success('Project created successfully!');
    await navigateTo('/admin/projects');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to create project');
  } finally {
    saving.value = false;
  }
};
</script>
