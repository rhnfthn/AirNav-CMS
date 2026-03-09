<template>
  <div class="min-h-full">
    <div class="mb-8">
      <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">New Project</h2>
      <p class="mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">Create a new portfolio project.</p>
    </div>
    <div class="neo-card p-6 max-w-3xl">
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
