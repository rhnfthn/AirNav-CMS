<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Work Experience</h2>
        <p class="text-gray-600">Manage your work history.</p>
      </div>
      <button @click="openModal()" class="btn-primary">
        + Add Experience
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>

    <div v-else-if="experiences.length === 0" class="card p-12 text-center">
      <p class="text-gray-500">No experience yet. Add your work history!</p>
    </div>

    <div v-else class="space-y-4">
      <div v-for="exp in experiences" :key="exp.id" class="card p-5">
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-1">
              <h3 class="font-semibold text-gray-900">{{ exp.position }}</h3>
              <span v-if="!exp.endDate" class="badge bg-green-100 text-green-700">Current</span>
            </div>
            <p class="text-gray-600">{{ exp.company }}</p>
            <p class="text-sm text-gray-500 mt-1">
              {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}
            </p>
            <p class="text-sm text-gray-600 mt-2 line-clamp-2">{{ exp.description }}</p>
          </div>
          <div class="flex gap-1 ml-4">
            <button @click="openModal(exp)" class="btn-ghost p-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
            <button @click="deleteExp(exp.id)" class="btn-ghost p-2 text-red-600 hover:bg-red-50">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slide-up max-h-[90vh] overflow-y-auto">
          <h3 class="text-lg font-semibold mb-4">{{ editingId ? 'Edit' : 'Add' }} Experience</h3>
          <form @submit.prevent="saveExp" class="space-y-4">
            <div>
              <label class="label">Company</label>
              <input v-model="form.company" type="text" class="input" required />
            </div>
            <div>
              <label class="label">Position</label>
              <input v-model="form.position" type="text" class="input" required />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="label">Start Date</label>
                <input v-model="form.startDate" type="date" class="input" required />
              </div>
              <div>
                <label class="label">End Date</label>
                <input v-model="form.endDate" type="date" class="input" />
                <p class="text-xs text-gray-500 mt-1">Leave empty if current</p>
              </div>
            </div>
            <div>
              <label class="label">Description</label>
              <textarea v-model="form.description" rows="4" class="input resize-none" required></textarea>
            </div>
            <div class="flex gap-3 pt-2">
              <button type="button" @click="showModal = false" class="btn-secondary flex-1">Cancel</button>
              <button type="submit" :disabled="saving" class="btn-primary flex-1">
                {{ saving ? 'Saving...' : 'Save' }}
              </button>
            </div>
          </form>
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
const saving = ref(false);
const showModal = ref(false);
const editingId = ref<string | null>(null);
const experiences = ref<any[]>([]);

const form = reactive({
  company: '',
  position: '',
  startDate: '',
  endDate: '',
  description: '',
});

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const formatDateForInput = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toISOString().split('T')[0];
};

const resetForm = () => {
  form.company = '';
  form.position = '';
  form.startDate = '';
  form.endDate = '';
  form.description = '';
  editingId.value = null;
};

const openModal = (exp?: any) => {
  if (exp) {
    editingId.value = exp.id;
    form.company = exp.company;
    form.position = exp.position;
    form.startDate = formatDateForInput(exp.startDate);
    form.endDate = exp.endDate ? formatDateForInput(exp.endDate) : '';
    form.description = exp.description;
  } else {
    resetForm();
  }
  showModal.value = true;
};

const fetchData = async () => {
  try {
    const data = await apiFetch<any[]>('/experiences');
    experiences.value = data;
  } catch (error) {
    toast.error('Failed to load experiences');
  } finally {
    loading.value = false;
  }
};

const saveExp = async () => {
  saving.value = true;
  try {
    const body = { ...form };
    if (!body.endDate) delete (body as any).endDate;

    if (editingId.value) {
      await apiFetch(`/experiences/${editingId.value}`, { method: 'PUT', body });
      toast.success('Experience updated!');
    } else {
      await apiFetch('/experiences', { method: 'POST', body });
      toast.success('Experience added!');
    }
    showModal.value = false;
    await fetchData();
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to save');
  } finally {
    saving.value = false;
  }
};

const deleteExp = async (id: string) => {
  if (!confirm('Delete this experience?')) return;
  try {
    await apiFetch(`/experiences/${id}`, { method: 'DELETE' });
    toast.success('Experience deleted!');
    await fetchData();
  } catch (error) {
    toast.error('Failed to delete');
  }
};

onMounted(fetchData);
</script>
