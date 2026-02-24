<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
      <div class="container-page flex h-14 items-center justify-between">
        <NuxtLink to="/" class="font-semibold tracking-tight">Portfolio</NuxtLink>
        <nav class="flex items-center gap-4 text-sm">
          <NuxtLink to="/projects" class="hover:underline">Projects</NuxtLink>
          <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
          <NuxtLink to="/admin/login" class="hover:underline">Admin</NuxtLink>
        </nav>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <footer class="mt-12 border-t bg-white">
      <div class="container-page py-8 text-sm text-gray-600">
        <p>© {{ year }} Portfolio CMS</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
