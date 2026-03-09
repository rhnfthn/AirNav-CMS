<template>
  <div class="admin-theme min-h-screen theme-bg-main flex">
    <!-- Sidebar -->
    <aside
      class="fixed inset-y-0 left-0 z-20 w-64 theme-bg-sidebar transform transition-[transform,width] lg:translate-x-0 border-r-[3px] theme-border flex flex-col"
      :class="[
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        sidebarCollapsed ? 'lg:w-20' : '',
      ]"
    >
      <!-- Logo -->
      <div class="flex h-16 items-center justify-between px-5 border-b-[3px] theme-border">
        <NuxtLink to="/admin/dashboard" class="flex items-center gap-2">
          <div class="w-8 h-8 border-2 rounded-lg flex items-center justify-center" style="background-color: var(--color-button); border-color: var(--color-border); color: var(--color-on-button);">
            <img :src="LOGO_SRC" alt="Portfolio CMS" class="admin-brand-logo" />
          </div>
          <span v-if="!sidebarCollapsed" class="text-lg font-black tracking-tight" style="color: var(--color-on-sidebar);">Portfolio CMS</span>
        </NuxtLink>
        <button @click="sidebarOpen = false" class="lg:hidden" style="color: var(--color-on-sidebar)">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Navigation -->
      <nav class="p-3 space-y-1 flex-1 overflow-y-auto">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="admin-nav-link flex items-center py-3 rounded-lg text-sm font-bold transition-all duration-200"
          :title="sidebarCollapsed ? item.label : undefined"
          :class="[
            sidebarCollapsed ? 'justify-center px-3' : 'gap-3 px-4',
            isActive(item.to)
              ? 'border-2 active'
              : 'border-2 border-transparent',
          ]"
          :style="isActive(item.to)
            ? { backgroundColor: 'var(--color-highlight)', borderColor: 'var(--color-border)', color: 'var(--color-text-primary)', boxShadow: '3px 3px 0px 0px color-mix(in srgb, var(--color-shadow) 30%, transparent 70%)' }
            : { color: 'var(--color-on-sidebar)' }"
        >
          <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-for="(d, i) in item.svgPaths" :key="i" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="d" />
          </svg>
          <span v-if="!sidebarCollapsed">{{ item.label }}</span>
        </NuxtLink>
      </nav>

      <!-- User Info / Logout -->
      <div class="mt-auto p-3 border-t-[3px] theme-border">
        <div class="flex items-center gap-3 px-4 py-3 mb-2" :class="sidebarCollapsed ? 'justify-center px-0' : ''">
          <div class="w-10 h-10 rounded-lg border-2 flex items-center justify-center" style="background-color: var(--color-button); border-color: var(--color-border); color: var(--color-on-button);">
            <span class="text-lg font-black">{{ authStore.user?.name?.charAt(0) || 'A' }}</span>
          </div>
          <div v-if="!sidebarCollapsed" class="flex-1 min-w-0">
            <p class="text-sm font-bold truncate" style="color: var(--color-on-sidebar);">{{ authStore.user?.name || 'Admin' }}</p>
            <p class="text-xs truncate" style="color: color-mix(in srgb, var(--color-on-sidebar) 70%, transparent 30%);">{{ authStore.user?.email }}</p>
          </div>
        </div>
        <button
          @click="handleLogout"
          :title="sidebarCollapsed ? 'Logout' : undefined"
          class="logout-btn w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-all duration-150 border-2 border-transparent"
          style="color: var(--color-on-sidebar)"
          :class="sidebarCollapsed ? 'justify-center px-0' : ''"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span v-if="!sidebarCollapsed">Logout</span>
        </button>
      </div>
    </aside>

    <!-- Mobile overlay -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="fixed inset-0 z-10 lg:hidden"
      style="background-color: color-mix(in srgb, var(--color-shadow) 40%, transparent 60%);"
    ></div>

    <!-- Main content -->
    <div :class="['flex-1', sidebarCollapsed ? 'lg:ml-20' : 'lg:ml-64']">
      <!-- Top bar -->
      <header class="sticky top-0 z-10 h-16 theme-bg-header border-b-[3px] theme-border flex items-center px-6">
        <button @click="sidebarOpen = true" class="lg:hidden mr-4" style="color: var(--color-on-header)">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <button
          type="button"
          class="hidden lg:inline-flex mr-4"
          style="color: var(--color-on-header)"
          :aria-label="sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
          @click="toggleSidebarCollapsed"
        >
          <svg v-if="!sidebarCollapsed" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <h1 class="text-lg font-black uppercase tracking-wide" style="color: var(--color-on-header)">{{ pageTitle }}</h1>
        <div class="ml-auto">
          <NuxtLink to="/" target="_blank" class="text-sm font-bold transition-colors flex items-center gap-1" style="color: var(--color-on-header)">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Site
          </NuxtLink>
        </div>
      </header>

      <!-- Page content -->
      <main class="p-6">
        <slot />
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useToastStore } from '~/stores/toast';
import { useThemeStore } from '~/stores/theme';

useHead({
  bodyAttrs: {
    class: 'admin-theme-body',
  },
});

const authStore = useAuthStore();
const toast = useToastStore();
const router = useRouter();
const route = useRoute();

const sidebarOpen = ref(false);
const sidebarCollapsed = ref(false);

const themeStore = useThemeStore();

const LOGO_SRC = '/rhnblack.png';

// Ensure admin theme is active inside dashboard
if (import.meta.client) {
  onMounted(() => {
    themeStore.ensureScope('admin');
  });
}

onMounted(() => {
  try {
    const saved = localStorage.getItem('adminSidebarCollapsed');
    if (saved !== null) sidebarCollapsed.value = saved === '1';
  } catch {
    // ignore storage errors (e.g., disabled storage)
  }
});

watch(sidebarCollapsed, (value) => {
  try {
    localStorage.setItem('adminSidebarCollapsed', value ? '1' : '0');
  } catch {
    // ignore storage errors
  }
});

const toggleSidebarCollapsed = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value;
};

const pageTitle = computed(() => {
  const path = route.path;
  if (path.includes('/dashboard')) return 'Dashboard';
  if (path.includes('/settings/public-site')) return 'Public Site';
  if (path.includes('/settings/theme')) return 'Theme';
  if (path.includes('/settings/layout')) return 'Layout';
  if (path.includes('/projects')) return 'Projects';
  if (path.includes('/about')) return 'About';
  if (path.includes('/certifications')) return 'Certifications';
  if (path.includes('/experiences')) return 'Experience';
  if (path.includes('/tools')) return 'Tools';
  if (path.includes('/messages')) return 'Messages';
  return 'Admin';
});

const menuItems = computed(() => [
  {
    to: '/admin/dashboard', label: 'Dashboard',
    svgPaths: [
      'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z',
      'M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z',
      'M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z',
      'M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
    ],
  },
  {
    to: '/admin/about', label: 'About',
    svgPaths: [
      'M16 7a4 4 0 11-8 0 4 4 0 018 0z',
      'M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    ],
  },
  {
    to: '/admin/projects', label: 'Projects',
    svgPaths: ['M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'],
  },
  {
    to: '/admin/certifications', label: 'Certifications',
    svgPaths: [
      'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
    ],
  },
  {
    to: '/admin/experiences', label: 'Experience',
    svgPaths: [
      'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    ],
  },
  {
    to: '/admin/tools', label: 'Tools',
    svgPaths: [
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    ],
  },
  {
    to: '/admin/messages', label: 'Messages',
    svgPaths: ['M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'],
  },
  {
    to: '/admin/settings/theme', label: 'Settings',
    svgPaths: [
      'M12 15a3 3 0 100-6 3 3 0 000 6z',
      'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-1.42 3.42h-.2a1.65 1.65 0 00-1.54 1.06 2 2 0 01-3.57 0A1.65 1.65 0 0011.6 22h-.2a2 2 0 01-1.42-3.42l.06-.06A1.65 1.65 0 0010.6 15a1.65 1.65 0 00-1.06-1.54 2 2 0 010-3.57A1.65 1.65 0 0010.6 8a1.65 1.65 0 00-.33-1.82l-.06-.06A2 2 0 0111.63 2.7h.2A1.65 1.65 0 0013.37 1.64a2 2 0 013.57 0A1.65 1.65 0 0018.4 2.7h.2a2 2 0 011.42 3.42l-.06.06A1.65 1.65 0 0019.4 8a1.65 1.65 0 001.06 1.54 2 2 0 010 3.57A1.65 1.65 0 0019.4 15z',
    ],
  },
]);

const isActive = (path: string) => {
  if (path === '/admin/dashboard') {
    return route.path === '/admin/dashboard' || route.path === '/admin';
  }
  return route.path.startsWith(path);
};

const handleLogout = () => {
  authStore.logout();
  toast.success('Logged out successfully');
  router.push('/admin/login');
};


</script>

<style scoped>
.admin-brand-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.admin-nav-link:not(.active):hover {
  background-color: var(--color-highlight);
  color: var(--color-text-primary);
  border-color: var(--color-border);
}

.logout-btn:hover {
  border-color: color-mix(in srgb, var(--color-on-sidebar) 35%, transparent 65%);
  background-color: var(--color-highlight);
}
</style>
