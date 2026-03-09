<template>
  <div class="min-h-full">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Contact Messages</h2>
        <p class="theme-text-secondary mt-1 font-medium">Messages from your website visitors.</p>
      </div>
      <div v-if="unreadCount > 0" class="neo-badge">
        {{ unreadCount }} unread
      </div>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="neo-spinner"></div>
    </div>

    <div v-else-if="messages.length === 0" class="neo-card p-12 text-center">
      <p class="theme-text-secondary font-bold">No messages yet.</p>
    </div>

    <div v-else class="neo-card overflow-hidden">
      <div>
        <div 
          v-for="(msg, idx) in messages" 
          :key="msg.id"
          class="message-row p-5 transition-colors cursor-pointer"
          :class="[
            !msg.read && 'is-unread',
            idx !== messages.length - 1 && 'border-b-2'
          ]"
          style="border-color: color-mix(in srgb, var(--color-border) 55%, transparent 45%);"
          @click="openMessage(msg)"
        >
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-4 flex-1 min-w-0">
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
                    class="w-2.5 h-2.5 rounded-sm border-2 flex-shrink-0"
                    style="background-color: var(--color-button); border-color: var(--color-border);"
                  ></span>
                </div>
                <p class="text-sm theme-text-secondary truncate font-medium" style="opacity: 0.9;">{{ msg.email }}</p>
                <p class="text-sm theme-text-secondary mt-1 line-clamp-1" style="opacity: 0.95;">{{ msg.message }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <p class="text-xs font-bold" style="color: color-mix(in srgb, var(--color-text-secondary) 70%, transparent 30%);">{{ formatDate(msg.createdAt) }}</p>
              <button 
                @click.stop="deleteMessage(msg.id)" 
                class="neo-btn-ghost p-2 message-delete"
                aria-label="Delete message"
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
      <div v-if="totalPages > 1" class="p-4 border-t-[3px] theme-border flex items-center justify-between">
        <p class="text-sm font-bold" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">
          Page {{ currentPage }} of {{ totalPages }}
        </p>
        <div class="flex gap-2">
          <button 
            @click="changePage(currentPage - 1)" 
            :disabled="currentPage === 1"
            class="neo-btn-secondary text-sm font-black"
          >
            Previous
          </button>
          <button 
            @click="changePage(currentPage + 1)" 
            :disabled="currentPage === totalPages"
            class="neo-btn-secondary text-sm font-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- Message Detail Modal -->
    <Teleport to="body">
      <div v-if="selectedMessage" class="neo-modal-overlay" @click.self="selectedMessage = null">
        <div class="neo-modal-backdrop" @click="selectedMessage = null"></div>
        <div class="neo-modal neo-modal-lg animate-slide-up">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="text-lg font-black theme-text-primary">{{ selectedMessage.name }}</h3>
              <p class="text-sm theme-text-secondary font-medium" style="opacity: 0.9;">{{ selectedMessage.email }}</p>
            </div>
            <button @click="selectedMessage = null" class="neo-btn-ghost p-2" aria-label="Close">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <p class="text-xs font-bold mb-4" style="color: color-mix(in srgb, var(--color-text-secondary) 70%, transparent 30%);">{{ formatDate(selectedMessage.createdAt) }}</p>
          <div
            class="border-[3px] theme-border rounded-xl p-4"
            style="background-color: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%); box-shadow: 3px 3px 0px 0px var(--color-shadow);"
          >
            <p class="theme-text-primary whitespace-pre-wrap" style="opacity: 0.95;">{{ selectedMessage.message }}</p>
          </div>
          <div class="mt-6 flex gap-3">
            <a 
              :href="'mailto:' + selectedMessage.email" 
              class="neo-btn-primary flex-1 justify-center text-center font-black"
            >
              Reply via Email
            </a>
            <button @click="selectedMessage = null" class="neo-btn-secondary font-black">
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

<style scoped>
.message-row:hover {
  background-color: color-mix(in srgb, var(--bg-main) 86%, var(--color-button) 14%);
}

.message-row.is-unread {
  background-color: color-mix(in srgb, var(--bg-main) 88%, var(--color-button) 12%);
}

.message-row.is-unread:hover {
  background-color: color-mix(in srgb, var(--bg-main) 82%, var(--color-button) 18%);
}

.message-delete {
  color: var(--bg-header);
}

.message-delete:hover {
  border-color: var(--color-border);
  background-color: color-mix(in srgb, var(--bg-main) 85%, var(--bg-header) 15%);
}
</style>
