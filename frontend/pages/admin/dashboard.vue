<template>
  <div>
    <!-- Welcome message -->
    <div class="mb-8">
      <h1 class="text-2xl font-black theme-text-primary">{{ t('admin.dashboard.welcome') }}</h1>
      <p class="theme-text-secondary font-medium mt-1">{{ t('admin.dashboard.overview') }}</p>
    </div>

    <!-- Stats Grid -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="neo-spinner"></div>
    </div>

    <div v-else class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="neo-card neo-card-hover p-5"
      >
        <div class="flex items-center justify-between mb-3">
          <div
            class="w-11 h-11 rounded-lg border-[3px] theme-border flex items-center justify-center"
            style="background-color: var(--color-button); color: var(--color-on-button); box-shadow: 3px 3px 0px 0px var(--color-shadow);"
          >
            <component :is="stat.icon" class="w-5 h-5" />
          </div>
          <span
            class="text-xs font-black px-2.5 py-1 rounded-full border-2 theme-border"
            :style="stat.badgeStyle"
          >
            {{ stat.badge }}
          </span>
        </div>
        <p class="text-3xl font-black theme-text-primary">{{ stat.value }}</p>
        <p class="text-sm theme-text-secondary font-bold uppercase tracking-wide mt-1">{{ stat.label }}</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <h2 class="text-lg font-black theme-text-secondary mb-4 uppercase tracking-wide">{{ t('admin.dashboard.quickActions') }}</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      <NuxtLink
        v-for="action in quickActions"
        :key="action.to"
        :to="action.to"
        class="neo-card neo-card-hover p-5 flex items-center gap-4 group"
      >
        <div
          class="w-10 h-10 rounded-lg border-[3px] theme-border flex items-center justify-center"
          style="background-color: var(--color-button); color: var(--color-on-button); box-shadow: 2px 2px 0px 0px var(--color-shadow);"
        >
          <component :is="action.icon" class="w-5 h-5" />
        </div>
        <div class="flex-1">
          <p class="font-black theme-text-primary text-sm">{{ action.label }}</p>
          <p class="text-xs theme-text-secondary font-medium">{{ action.description }}</p>
        </div>
        <svg class="w-5 h-5 theme-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Recent Messages -->
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-lg font-black theme-text-secondary uppercase tracking-wide">{{ t('admin.dashboard.recentMessages') }}</h2>
      <NuxtLink
        to="/admin/messages"
        class="text-sm font-bold transition-colors hover:underline"
        style="color: var(--color-text-secondary);"
      >
        {{ t('admin.dashboard.viewAll') }} &rarr;
      </NuxtLink>
    </div>
    <div class="neo-card overflow-hidden">
      <div v-if="loadingMessages" class="p-8 text-center">
        <div class="neo-spinner mx-auto"></div>
      </div>
      <div v-else-if="recentMessages.length === 0" class="p-8 text-center">
        <p class="theme-text-secondary font-bold">{{ t('admin.dashboard.noMessages') }}</p>
      </div>
      <div v-else>
        <div
          v-for="(msg, idx) in recentMessages"
          :key="msg.id"
          class="recent-message p-4 flex items-start gap-4 transition-colors"
          :class="idx !== 0 ? 'border-t-2 theme-border' : ''"
        >
          <div
            class="w-10 h-10 rounded-lg border-2 theme-border flex items-center justify-center flex-shrink-0"
            style="background-color: var(--color-button); color: var(--color-on-button);"
          >
            <span class="text-sm font-black">{{ msg.name.charAt(0) }}</span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <p class="font-bold theme-text-primary truncate">{{ msg.name }}</p>
              <span
                v-if="!msg.read"
                class="w-2.5 h-2.5 rounded-full border"
                style="background-color: var(--color-button); border-color: var(--color-border);"
              ></span>
            </div>
            <p class="text-sm truncate font-medium" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">{{ msg.email }}</p>
            <p class="text-sm mt-1 line-clamp-1" style="color: color-mix(in srgb, var(--color-text-secondary) 92%, transparent 8%);">{{ msg.message }}</p>
          </div>
          <p class="text-xs flex-shrink-0 font-bold" style="color: color-mix(in srgb, var(--color-text-secondary) 70%, transparent 30%);">{{ formatDate(msg.createdAt) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue';
import { useAuthStore } from '~/stores/auth';
import { useT } from '~/composables/useT';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

useSeoMeta({
  title: 'Admin Dashboard',
  description: 'Dashboard admin CMS portfolio',
});

const authStore = useAuthStore();
const { apiFetch } = useApiClient();
const { t } = useT();

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

// Icon components (render functions to work with runtime-only Vue)
const IconFolder = defineComponent({
  name: 'IconFolder',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
      ],
    );
  },
});

const IconCertificate = defineComponent({
  name: 'IconCertificate',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M9 12l2 2 4-4',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
      ],
    );
  },
});

const IconBriefcase = defineComponent({
  name: 'IconBriefcase',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M12 12h.01',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
      ],
    );
  },
});

const IconMail = defineComponent({
  name: 'IconMail',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
      ],
    );
  },
});

const IconPlus = defineComponent({
  name: 'IconPlus',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M12 4v16m8-8H4',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2.5',
        }),
      ],
    );
  },
});

const IconPencil = defineComponent({
  name: 'IconPencil',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M16.862 3.487a2.1 2.1 0 012.97 2.97L8.25 18.04 4 19l.96-4.25L16.862 3.487z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M15 5l4 4',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
      ],
    );
  },
});

const IconEye = defineComponent({
  name: 'IconEye',
  render() {
    return h(
      'svg',
      { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
      [
        h('path', {
          d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
        h('path', {
          d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': '2',
        }),
      ],
    );
  },
});

const stats = computed(() => [
  {
    label: t('admin.stats.projects'),
    value: statsData.value.projects,
    icon: IconFolder,
    badge: t('admin.stats.total'),
    badgeStyle: { backgroundColor: 'color-mix(in srgb, var(--bg-main) 88%, var(--color-border) 12%)', color: 'var(--color-text-primary)' },
  },
  {
    label: t('admin.stats.certifications'),
    value: statsData.value.certifications,
    icon: IconCertificate,
    badge: t('admin.stats.total'),
    badgeStyle: { backgroundColor: 'color-mix(in srgb, var(--bg-main) 88%, var(--color-border) 12%)', color: 'var(--color-text-primary)' },
  },
  {
    label: t('admin.stats.experiences'),
    value: statsData.value.experiences,
    icon: IconBriefcase,
    badge: t('admin.stats.total'),
    badgeStyle: { backgroundColor: 'color-mix(in srgb, var(--bg-main) 88%, var(--color-border) 12%)', color: 'var(--color-text-primary)' },
  },
  {
    label: t('admin.stats.messages'),
    value: statsData.value.messages,
    icon: IconMail,
    badge: `${statsData.value.unreadMessages} ${t('admin.stats.unread')}`,
    badgeStyle: statsData.value.unreadMessages > 0
      ? { backgroundColor: 'color-mix(in srgb, var(--color-button) 35%, var(--bg-main) 65%)', color: 'var(--color-text-primary)' }
      : { backgroundColor: 'color-mix(in srgb, var(--bg-main) 88%, var(--color-border) 12%)', color: 'var(--color-text-primary)' },
  },
]);

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}${t('time.m')} ${t('time.ago')}`;
  if (diffHours < 24) return `${diffHours}${t('time.h')} ${t('time.ago')}`;
  if (diffDays < 7) return `${diffDays}${t('time.d')} ${t('time.ago')}`;
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

const quickActions = computed(() => [
  { to: '/admin/projects/new', label: t('admin.action.newProject'), description: t('admin.action.newProject.desc'), icon: IconPlus },
  { to: '/admin/about', label: t('admin.action.editAbout'), description: t('admin.action.editAbout.desc'), icon: IconPencil },
  { to: '/', label: t('admin.action.viewWebsite'), description: t('admin.action.viewWebsite.desc'), icon: IconEye },
]);
</script>

<style scoped>
.recent-message:hover {
  background-color: color-mix(in srgb, var(--bg-main) 85%, var(--color-button) 15%);
}
</style>
