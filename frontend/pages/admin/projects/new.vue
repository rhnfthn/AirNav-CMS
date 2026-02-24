<template>
  <div>
    <div>
      <h1 class="text-2xl font-semibold tracking-tight">New Project</h1>
      <p class="mt-1 text-sm text-gray-600">Isi detail project dan publish jika sudah siap.</p>
    </div>
    <div class="mt-6 card p-4">
      <AdminProjectForm submit-label="Create" @submit="onCreate" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

useSeoMeta({
  title: 'New Project',
  description: 'Create a new project',
});

const { apiFetch } = useApiClient();

const onCreate = async (payload: any) => {
  await apiFetch('/projects', { method: 'POST', body: payload });
  await navigateTo('/admin/projects');
};
</script>
