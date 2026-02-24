<template>
  <div>
    <!-- Welcome message -->
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-gray-900">Welcome back! 👋</h1>
      <p class="text-gray-600">Here's an overview of your portfolio content.</p>
    </div>

    <!-- Stats Grid -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>
    
    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div v-for="stat in stats" :key="stat.label" class="card p-6">
        <div class="flex items-center justify-between mb-4">
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center', stat.bgColor]">
            <component :is="stat.icon" :class="['w-6 h-6', stat.iconColor]" />
          </div>
          <span :class="['text-xs font-medium px-2 py-1 rounded-full', stat.badgeClass]">
            {{ stat.badge }}
          </span>
        </div>
        <p class="text-3xl font-bold text-gray-900">{{ stat.value }}</p>
        <p class="text-sm text-gray-500">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <h2 class="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <NuxtLink 
        v-for="action in quickActions" 
        :key="action.to" 
        :to="action.to"
        class="card p-5 flex items-center gap-4 hover:border-gray-300 transition-colors group"
      >
        <div :class="['w-10 h-10 rounded-lg flex items-center justify-center', action.bgColor]">
          <component :is="action.icon" :class="['w-5 h-5', action.iconColor]" />
        </div>
        <div class="flex-1">
          <p class="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            {{ action.label }}
          </p>
          <p class="text-sm text-gray-500">{{ action.description }}</p>
        </div>
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </NuxtLink>
    </div>

    <!-- Recent Messages -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-semibold text-gray-900">Recent Messages</h2>
      <NuxtLink to="/admin/messages" class="text-sm text-gray-500 hover:text-gray-700">
        View all →
      </NuxtLink>
    </div>
    <div class="card overflow-hidden">
      <div v-if="loadingMessages" class="p-8 text-center">
        <div class="spinner mx-auto"></div>
      </div>
      <div v-else-if="recentMessages.length === 0" class="p-8 text-center text-gray-500">
        No messages yet
      </div>
      <div v-else class="divide-y divide-gray-100">
        <div 
          v-for="msg in recentMessages" 
          :key="msg.id"
          class="p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors"
        >
          <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <span class="text-sm font-medium text-gray-600">{{ msg.name.charAt(0) }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <p class="font-medium text-gray-900 truncate">{{ msg.name }}</p>
              <span v-if="!msg.read" class="w-2 h-2 rounded-full bg-blue-500"></span>
            </div>
            <p class="text-sm text-gray-500 truncate">{{ msg.email }}</p>
            <p class="text-sm text-gray-600 mt-1 line-clamp-1">{{ msg.message }}</p>
          </div>
          <p class="text-xs text-gray-400 flex-shrink-0">{{ formatDate(msg.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

useSeoMeta({
  title: 'Admin Dashboard',
  description: 'Dashboard admin CMS portfolio',
});

const authStore = useAuthStore();
const { apiFetch } = useApiClient();

const loading = ref(true);
const loadingMessages = ref(true);
const statsData = ref({
  projects: 0,
  certifications: 0,
  experiences: 0,
  tools: 0,
  messages: 0,
  unreadMessages: 0,
});
const recentMessages = ref<any[]>([]);

const stats = computed(() => [
  {
    label: 'Projects',
    value: statsData.value.projects,
    icon: IconFolder,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    badge: 'Total',
    badgeClass: 'bg-blue-50 text-blue-600',
  },
  {
    label: 'Certifications',
    value: statsData.value.certifications,
    icon: IconCertificate,
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    badge: 'Total',
    badgeClass: 'bg-green-50 text-green-600',
  },
  {
    label: 'Experiences',
    value: statsData.value.experiences,
    icon: IconBriefcase,
    bgColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
    badge: 'Total',
    badgeClass: 'bg-purple-50 text-purple-600',
  },
  {
    label: 'Messages',
    value: statsData.value.messages,
    icon: IconMail,
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    badge: `${statsData.value.unreadMessages} unread`,
    badgeClass: statsData.value.unreadMessages > 0 ? 'bg-red-50 text-red-600' : 'bg-gray-50 text-gray-600',
  },
]);

const quickActions = [
  { to: '/admin/projects/new', label: 'New Project', description: 'Create a new project', icon: IconPlus, bgColor: 'bg-blue-100', iconColor: 'text-blue-600' },
  { to: '/admin/about', label: 'Edit About', description: 'Update your profile', icon: IconUser, bgColor: 'bg-green-100', iconColor: 'text-green-600' },
  { to: '/', label: 'View Website', description: 'See your public site', icon: IconEye, bgColor: 'bg-gray-100', iconColor: 'text-gray-600' },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);
  
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
};

onMounted(async () => {
  authStore.initAuth();
  
  try {
    const [projects, certifications, experiences, tools, messages, unread] = await Promise.all([
      apiFetch<{ items: any[] }>('/projects').catch(() => ({ items: [] })),
      apiFetch<any[]>('/certifications').catch(() => []),
      apiFetch<any[]>('/experiences').catch(() => []),
      apiFetch<any[]>('/tools').catch(() => []),
      apiFetch<{ data: any[]; meta: { total: number } }>('/contact?limit=5').catch(() => ({ data: [], meta: { total: 0 } })),
      apiFetch<{ unreadCount: number }>('/contact/unread-count').catch(() => ({ unreadCount: 0 })),
    ]);
    
    statsData.value = {
      projects: (projects as any).pagination?.total || (projects as any).items?.length || 0,
      certifications: (certifications as any[]).length,
      experiences: (experiences as any[]).length,
      tools: (tools as any[]).length,
      messages: (messages as any).meta?.total || 0,
      unreadMessages: (unread as any).unreadCount || 0,
    };
    
    recentMessages.value = (messages as any).data || [];
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
  } finally {
    loading.value = false;
    loadingMessages.value = false;
  }
});

// Icon components
const IconFolder = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>`
};
const IconCertificate = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`
};
const IconBriefcase = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};
const IconMail = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
};
const IconPlus = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`
};
const IconUser = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`
};
const IconEye = {
  template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`
};
</script>
