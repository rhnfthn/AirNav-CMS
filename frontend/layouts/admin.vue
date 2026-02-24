<template>
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-20 w-64 bg-gray-900 text-white transform transition-transform lg:translate-x-0" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <div class="flex h-16 items-center justify-between px-6 border-b border-gray-800">
        <NuxtLink to="/admin/dashboard" class="text-xl font-bold">
          Admin Panel
        </NuxtLink>
        <button @click="sidebarOpen = false" class="lg:hidden text-gray-400 hover:text-white">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      
      <nav class="p-4 space-y-1">
        <NuxtLink 
          v-for="item in menuItems" 
          :key="item.to" 
          :to="item.to"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors"
          :class="isActive(item.to) ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/5 hover:text-white'"
        >
          <component :is="item.icon" class="w-5 h-5" />
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
        <div class="flex items-center gap-3 px-4 py-3 mb-2">
          <div class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <span class="text-lg font-semibold">{{ authStore.user?.name?.charAt(0) || 'A' }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium truncate">{{ authStore.user?.name || 'Admin' }}</p>
            <p class="text-xs text-gray-400 truncate">{{ authStore.user?.email }}</p>
          </div>
        </div>
        <button 
          @click="handleLogout" 
          class="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- Mobile overlay -->
    <div 
      v-if="sidebarOpen" 
      @click="sidebarOpen = false"
      class="fixed inset-0 bg-black/50 z-10 lg:hidden"
    ></div>

    <!-- Main content -->
    <div class="flex-1 lg:ml-64">
      <!-- Top bar -->
      <header class="sticky top-0 z-10 h-16 bg-white border-b border-gray-200 flex items-center px-6">
        <button @click="sidebarOpen = true" class="lg:hidden text-gray-500 hover:text-gray-700 mr-4">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        <h1 class="text-lg font-semibold text-gray-900">{{ pageTitle }}</h1>
      </header>

      <!-- Page content -->
      <main class="p-6">
        <slot />
      </main>
    </div>

    <!-- Toast notifications -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useToastStore } from '~/stores/toast';

const authStore = useAuthStore();
const toast = useToastStore();
const router = useRouter();
const route = useRoute();

const sidebarOpen = ref(false);

const pageTitle = computed(() => {
  const path = route.path;
  if (path.includes('/dashboard')) return 'Dashboard';
  if (path.includes('/projects')) return 'Projects';
  if (path.includes('/about')) return 'About';
  if (path.includes('/certifications')) return 'Certifications';
  if (path.includes('/experiences')) return 'Experience';
  if (path.includes('/tools')) return 'Tools';
  if (path.includes('/messages')) return 'Contact Messages';
  return 'Admin';
});

const menuItems = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: 'IconDashboard' },
  { to: '/admin/about', label: 'About', icon: 'IconUser' },
  { to: '/admin/projects', label: 'Projects', icon: 'IconFolder' },
  { to: '/admin/certifications', label: 'Certifications', icon: 'IconCertificate' },
  { to: '/admin/experiences', label: 'Experience', icon: 'IconBriefcase' },
  { to: '/admin/tools', label: 'Tools', icon: 'IconTools' },
  { to: '/admin/messages', label: 'Messages', icon: 'IconMail' },
];

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

// Simple icon components
const IconDashboard = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>`
};
const IconUser = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
};
const IconFolder = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>`
};
const IconCertificate = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`
};
const IconBriefcase = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};
const IconTools = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
};
const IconMail = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};
</script>
