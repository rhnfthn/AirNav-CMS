<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Certifications</h2>
        <p class="text-gray-600">Manage your professional certifications.</p>
      </div>
      <button @click="openModal()" class="btn-primary">
        + Add Certification
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>

    <div v-else-if="certifications.length === 0" class="card p-12 text-center">
      <p class="text-gray-500">No certifications yet. Add your first one!</p>
    </div>

    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="cert in certifications" :key="cert.id" class="card p-5">
        <div class="flex items-start justify-between mb-3">
          <span class="badge">{{ cert.year }}</span>
          <div class="flex gap-1">
            <button @click="openModal(cert)" class="btn-ghost p-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
              </svg>
            </button>
            <button @click="deleteCert(cert.id)" class="btn-ghost p-2 text-red-600 hover:bg-red-50">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
              </svg>
            </button>
          </div>
        </div>
        <h3 class="font-semibold text-gray-900">{{ cert.title }}</h3>
        <p class="text-sm text-gray-500">{{ cert.issuer }}</p>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slide-up">
          <h3 class="text-lg font-semibold mb-4">{{ editingId ? 'Edit' : 'Add' }} Certification</h3>
          <form @submit.prevent="saveCert" class="space-y-4">
            <div>
              <label class="label">Title</label>
              <input v-model="form.title" type="text" class="input" required />
            </div>
            <div>
              <label class="label">Issuer</label>
              <input v-model="form.issuer" type="text" class="input" required />
            </div>
            <div>
              <label class="label">Year</label>
              <input v-model.number="form.year" type="number" class="input" required min="1900" />
            </div>
            <div>
              <label class="label">Credential URL (optional)</label>
              <input v-model="form.credentialUrl" type="url" class="input" />
            </div>
            <div>
              <label class="label">Image URL (optional)</label>
              <input v-model="form.imageUrl" type="url" class="input" />
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
const certifications = ref<any[]>([]);

const form = reactive({
  title: '',
  issuer: '',
  year: new Date().getFullYear(),
  credentialUrl: '',
  imageUrl: '',
});

const resetForm = () => {
  form.title = '';
  form.issuer = '';
  form.year = new Date().getFullYear();
  form.credentialUrl = '';
  form.imageUrl = '';
  editingId.value = null;
};

const openModal = (cert?: any) => {
  if (cert) {
    editingId.value = cert.id;
    form.title = cert.title;
    form.issuer = cert.issuer;
    form.year = cert.year;
    form.credentialUrl = cert.credentialUrl || '';
    form.imageUrl = cert.imageUrl || '';
  } else {
    resetForm();
  }
  showModal.value = true;
};

const fetchData = async () => {
  try {
    const data = await apiFetch<any[]>('/certifications');
    certifications.value = data;
  } catch (error) {
    toast.error('Failed to load certifications');
  } finally {
    loading.value = false;
  }
};

const saveCert = async () => {
  saving.value = true;
  try {
    const body = { ...form };
    if (!body.credentialUrl) delete (body as any).credentialUrl;
    if (!body.imageUrl) delete (body as any).imageUrl;

    if (editingId.value) {
      await apiFetch(`/certifications/${editingId.value}`, { method: 'PUT', body });
      toast.success('Certification updated!');
    } else {
      await apiFetch('/certifications', { method: 'POST', body });
      toast.success('Certification added!');
    }
    showModal.value = false;
    await fetchData();
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to save');
  } finally {
    saving.value = false;
  }
};

const deleteCert = async (id: string) => {
  if (!confirm('Delete this certification?')) return;
  try {
    await apiFetch(`/certifications/${id}`, { method: 'DELETE' });
    toast.success('Certification deleted!');
    await fetchData();
  } catch (error) {
    toast.error('Failed to delete');
  }
};

onMounted(fetchData);
</script>
