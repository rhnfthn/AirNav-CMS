<template>
  <div class="min-h-screen">
    <header class="sticky top-0 z-10 border-b bg-white/90 backdrop-blur">
      <div class="container-page flex h-14 items-center justify-between">
        <NuxtLink to="/admin/dashboard" class="font-semibold tracking-tight">
          Admin
        </NuxtLink>
        <nav class="flex items-center gap-4 text-sm">
          <NuxtLink to="/admin/projects" class="hover:underline">Projects</NuxtLink>
          <button class="hover:underline" @click="logout">Logout</button>
        </nav>
      </div>
    </header>

    <main class="container-page py-8">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
const { logout } = useAuth();
</script>
