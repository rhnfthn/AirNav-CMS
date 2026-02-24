<template>
  <div>
    <h1 class="text-2xl font-semibold tracking-tight">Dashboard</h1>
    <p class="mt-2 text-gray-600">Selamat datang di CMS Portfolio.</p>

    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      <NuxtLink to="/admin/projects" class="card p-4 hover:bg-gray-50">
        <div class="text-sm text-gray-600">Manage</div>
        <div class="mt-1 font-medium">Projects</div>
      </NuxtLink>
      <NuxtLink to="/" class="card p-4 hover:bg-gray-50">
        <div class="text-sm text-gray-600">View</div>
        <div class="mt-1 font-medium">Public Website</div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

useSeoMeta({
  title: 'Admin Dashboard',
  description: 'Dashboard admin CMS portfolio',
});
</script>
