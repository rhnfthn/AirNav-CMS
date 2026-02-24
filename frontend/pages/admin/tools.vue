<template>
  <div>
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-xl font-semibold text-gray-900">Tools & Technologies</h2>
        <p class="text-gray-600">Manage your skills and tech stack.</p>
      </div>
      <button @click="openModal()" class="btn-primary">
        + Add Tool
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>

    <div v-else-if="Object.keys(groupedTools).length === 0" class="card p-12 text-center">
      <p class="text-gray-500">No tools yet. Add your first tech stack!</p>
    </div>

    <div v-else class="space-y-8">
      <div v-for="(tools, category) in groupedTools" :key="category">
        <h3 class="text-lg font-medium text-gray-900 mb-4 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-gray-900"></span>
          {{ category }}
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="tool in tools" 
            :key="tool.id"
            class="card p-4 text-center group relative"
          >
            <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
              <button @click="openModal(tool)" class="p-1 bg-white rounded shadow hover:bg-gray-50">
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </button>
              <button @click="deleteTool(tool.id)" class="p-1 bg-white rounded shadow hover:bg-red-50">
                <svg class="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
            <div class="w-10 h-10 mx-auto mb-2 rounded-lg bg-gray-100 flex items-center justify-center">
              <img v-if="tool.iconUrl" :src="tool.iconUrl" :alt="tool.name" class="w-6 h-6 object-contain" />
              <span v-else class="text-sm font-bold text-gray-400">{{ tool.name.charAt(0) }}</span>
            </div>
            <p class="text-sm font-medium text-gray-700 truncate">{{ tool.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4" @click.self="showModal = false">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slide-up">
          <h3 class="text-lg font-semibold mb-4">{{ editingId ? 'Edit' : 'Add' }} Tool</h3>
          <form @submit.prevent="saveTool" class="space-y-4">
            <div>
              <label class="label">Name</label>
              <input v-model="form.name" type="text" class="input" required placeholder="e.g., TypeScript" />
            </div>
            <div>
              <label class="label">Category</label>
              <input v-model="form.category" type="text" class="input" required placeholder="e.g., Language, Framework, Database" list="categories" />
              <datalist id="categories">
                <option v-for="cat in existingCategories" :key="cat" :value="cat" />
              </datalist>
            </div>
            <div>
              <label class="label">Icon URL (optional)</label>
              <input v-model="form.iconUrl" type="url" class="input" placeholder="https://..." />
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
const groupedTools = ref<Record<string, any[]>>({});

const form = reactive({
  name: '',
  category: '',
  iconUrl: '',
});

const existingCategories = computed(() => Object.keys(groupedTools.value));

const resetForm = () => {
  form.name = '';
  form.category = '';
  form.iconUrl = '';
  editingId.value = null;
};

const openModal = (tool?: any) => {
  if (tool) {
    editingId.value = tool.id;
    form.name = tool.name;
    form.category = tool.category;
    form.iconUrl = tool.iconUrl || '';
  } else {
    resetForm();
  }
  showModal.value = true;
};

const fetchData = async () => {
  try {
    const data = await apiFetch<Record<string, any[]>>('/tools/grouped');
    groupedTools.value = data;
  } catch (error) {
    toast.error('Failed to load tools');
  } finally {
    loading.value = false;
  }
};

const saveTool = async () => {
  saving.value = true;
  try {
    const body = { ...form };
    if (!body.iconUrl) delete (body as any).iconUrl;

    if (editingId.value) {
      await apiFetch(`/tools/${editingId.value}`, { method: 'PUT', body });
      toast.success('Tool updated!');
    } else {
      await apiFetch('/tools', { method: 'POST', body });
      toast.success('Tool added!');
    }
    showModal.value = false;
    await fetchData();
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to save');
  } finally {
    saving.value = false;
  }
};

const deleteTool = async (id: string) => {
  if (!confirm('Delete this tool?')) return;
  try {
    await apiFetch(`/tools/${id}`, { method: 'DELETE' });
    toast.success('Tool deleted!');
    await fetchData();
  } catch (error) {
    toast.error('Failed to delete');
  }
};

onMounted(fetchData);
</script>
