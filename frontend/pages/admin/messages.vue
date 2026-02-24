<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Contact Messages</h2>
        <p class="text-gray-600">Messages from your website visitors.</p>
      </div>
      <div v-if="unreadCount > 0" class="badge bg-red-100 text-red-700">
        {{ unreadCount }} unread
      </div>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>

    <div v-else-if="messages.length === 0" class="card p-12 text-center">
      <p class="text-gray-500">No messages yet.</p>
    </div>

    <div v-else class="card overflow-hidden">
      <div class="divide-y divide-gray-100">
        <div 
          v-for="msg in messages" 
          :key="msg.id"
          :class="['p-5 hover:bg-gray-50 transition-colors cursor-pointer', !msg.read && 'bg-blue-50/50']"
          @click="openMessage(msg)"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4 flex-1 min-w-0">
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <span class="text-sm font-medium text-gray-600">{{ msg.name.charAt(0) }}</span>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <p class="font-medium text-gray-900 truncate">{{ msg.name }}</p>
                  <span v-if="!msg.read" class="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></span>
                </div>
                <p class="text-sm text-gray-500 truncate">{{ msg.email }}</p>
                <p class="text-sm text-gray-600 mt-1 line-clamp-1">{{ msg.message }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <p class="text-xs text-gray-400">{{ formatDate(msg.createdAt) }}</p>
              <button 
                @click.stop="deleteMessage(msg.id)" 
                class="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div v-if="totalPages > 1" class="p-4 border-t border-gray-100 flex items-center justify-between">
        <p class="text-sm text-gray-500">
          Page {{ currentPage }} of {{ totalPages }}
        </p>
        <div class="flex gap-2">
          <button 
            @click="changePage(currentPage - 1)" 
            :disabled="currentPage === 1"
            class="btn-secondary text-sm"
          >
            Previous
          </button>
          <button 
            @click="changePage(currentPage + 1)" 
            :disabled="currentPage === totalPages"
            class="btn-secondary text-sm"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Message Detail Modal -->
    <Teleport to="body">
      <div v-if="selectedMessage" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="selectedMessage = null">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 animate-slide-up">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-lg font-semibold text-gray-900">{{ selectedMessage.name }}</h3>
              <p class="text-sm text-gray-500">{{ selectedMessage.email }}</p>
            </div>
            <button @click="selectedMessage = null" class="p-2 text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p class="text-xs text-gray-400 mb-4">{{ formatDate(selectedMessage.createdAt) }}</p>
          <div class="bg-gray-50 rounded-xl p-4">
            <p class="text-gray-700 whitespace-pre-wrap">{{ selectedMessage.message }}</p>
          </div>
          <div class="mt-6 flex gap-3">
            <a 
              :href="'mailto:' + selectedMessage.email" 
              class="btn-primary flex-1 justify-center"
            >
              Reply via Email
            </a>
            <button @click="selectedMessage = null" class="btn-secondary">
              Close
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const { apiFetch } = useApiClient();
const toast = useToastStore();

const loading = ref(true);
const messages = ref<any[]>([]);
const selectedMessage = ref<any>(null);
const currentPage = ref(1);
const totalPages = ref(1);
const unreadCount = ref(0);

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const fetchData = async (page = 1) => {
  loading.value = true;
  try {
    const [data, unread] = await Promise.all([
      apiFetch<{ data: any[]; meta: { total: number; totalPages: number } }>(`/contact?page=${page}&limit=10`),
      apiFetch<{ unreadCount: number }>('/contact/unread-count'),
    ]);
    messages.value = data.data;
    totalPages.value = data.meta.totalPages;
    currentPage.value = page;
    unreadCount.value = unread.unreadCount;
  } catch (error) {
    toast.error('Failed to load messages');
  } finally {
    loading.value = false;
  }
};

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    fetchData(page);
  }
};

const openMessage = async (msg: any) => {
  selectedMessage.value = msg;
  
  if (!msg.read) {
    try {
      await apiFetch(`/contact/${msg.id}/read`, { method: 'PATCH' });
      msg.read = true;
      unreadCount.value = Math.max(0, unreadCount.value - 1);
    } catch (error) {
      console.error('Failed to mark as read:', error);
    }
  }
};

const deleteMessage = async (id: string) => {
  if (!confirm('Delete this message?')) return;
  try {
    await apiFetch(`/contact/${id}`, { method: 'DELETE' });
    toast.success('Message deleted!');
    await fetchData(currentPage.value);
  } catch (error) {
    toast.error('Failed to delete');
  }
};

onMounted(() => fetchData());
</script>
