<template>
  <div class="container-page py-12">
    <div class="card p-8">
      <h1 class="text-3xl font-bold tracking-tight">Portfolio</h1>
      <p class="mt-2 max-w-2xl text-gray-600">
        Selamat datang. Ini kerangka awal public website + CMS admin.
      </p>

      <div class="mt-6 flex flex-wrap gap-3">
        <NuxtLink to="/projects" class="btn-primary">View Projects</NuxtLink>
        <NuxtLink to="/blog" class="btn-secondary">Blog</NuxtLink>
      </div>
    </div>

    <div class="mt-8 grid gap-4 sm:grid-cols-3">
      <div class="card p-4">
        <div class="text-sm text-gray-600">Backend</div>
        <div class="mt-1 font-medium">NestJS + Prisma + JWT</div>
      </div>
      <div class="card p-4">
        <div class="text-sm text-gray-600">Frontend</div>
        <div class="mt-1 font-medium">Nuxt 3 + Tailwind</div>
      </div>
      <div class="card p-4">
        <div class="text-sm text-gray-600">CMS</div>
        <div class="mt-1 font-medium">Admin Projects</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Portfolio',
  description: 'Portfolio landing page',
});
</script>
