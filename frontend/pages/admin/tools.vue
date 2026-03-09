<template>
  <div class="min-h-full">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-black uppercase tracking-wide theme-text-primary">Tools & Technologies</h2>
        <p class="mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">Manage your skills and tech stack.</p>
      </div>
      <button @click="openModal()" class="neo-btn-primary font-black">
        + Add Tool
      </button>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="neo-spinner"></div>
    </div>

    <div v-else-if="Object.keys(groupedTools).length === 0" class="neo-card p-12 text-center">
      <p class="font-bold" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">No tools yet. Add your first tech stack!</p>
    </div>

    <div v-else class="space-y-8">
      <div v-for="(tools, category) in groupedTools" :key="category">
        <h3 class="text-lg font-black theme-text-primary mb-4 flex items-center gap-2">
          <span class="w-3 h-3 rounded-sm border-2 theme-border" style="background-color: var(--color-button);"></span>
          {{ category }}
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div 
            v-for="tool in tools" 
            :key="tool.id"
            class="neo-card neo-card-hover p-4 text-center group relative"
          >
            <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
              <button
                @click="openModal(tool)"
                class="p-1 rounded-lg border-2 theme-border transition-colors"
                style="background-color: color-mix(in srgb, var(--bg-main) 90%, var(--color-button) 10%); color: var(--color-text-primary);"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </button>
              <button
                @click="deleteTool(tool.id)"
                class="p-1 rounded-lg border-2 theme-border transition-colors"
                style="background-color: color-mix(in srgb, var(--bg-main) 90%, var(--color-border) 10%); color: var(--color-text-secondary);"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                </svg>
              </button>
            </div>
            <div
              class="w-10 h-10 mx-auto mb-2 rounded-lg border-2 theme-border flex items-center justify-center"
              style="background-color: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%);"
            >
              <img v-if="tool.iconUrl" :src="tool.iconUrl" :alt="tool.name" class="w-6 h-6 object-contain" />
              <span v-else class="text-sm font-black" style="color: color-mix(in srgb, var(--color-text-secondary) 55%, transparent 45%);">{{ tool.name.charAt(0) }}</span>
            </div>
            <p class="text-sm font-bold theme-text-primary truncate">{{ tool.name }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <div v-if="showModal" class="neo-modal-overlay" @click.self="showModal = false">
        <div class="neo-modal-backdrop" @click="showModal = false"></div>
        <div class="neo-modal animate-slide-up">
          <h3 class="text-lg font-black uppercase tracking-wide mb-4">{{ editingId ? 'Edit' : 'Add' }} Tool</h3>
          <form @submit.prevent="saveTool" class="space-y-4">
            <div>
              <label class="neo-label">Name</label>
              <input v-model="form.name" type="text" class="neo-input" required placeholder="e.g., TypeScript" />
            </div>
            <div>
              <label class="neo-label">Category</label>
              <input v-model="form.category" type="text" class="neo-input" required placeholder="e.g., Language, Framework, Database" list="categories" />
              <datalist id="categories">
                <option v-for="cat in existingCategories" :key="cat" :value="cat" />
              </datalist>
            </div>
            <div>
              <label class="neo-label">Icon (attachment, optional)</label>
              <input
                type="file"
                accept="image/*"
                class="neo-input"
                :disabled="saving || uploadingIcon"
                @change="onIconSelected"
              />
              <p class="text-xs mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 75%, transparent 25%);">Upload an image file (no URL needed)</p>
            </div>

            <div v-if="uploadingIcon" class="text-sm font-bold theme-text-secondary">
              Uploading icon...
            </div>

            <div v-if="form.iconUrl" class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-lg border-2 theme-border flex items-center justify-center"
                style="background-color: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%);"
              >
                <img :src="form.iconUrl" alt="Icon preview" class="w-6 h-6 object-contain" />
              </div>
              <button type="button" class="neo-btn-secondary font-black" :disabled="saving || uploadingIcon" @click="form.iconUrl = ''">
                Remove icon
              </button>
            </div>
            <div class="flex gap-3 pt-2">
              <button type="button" @click="showModal = false" class="neo-btn-secondary flex-1 font-black">Cancel</button>
              <button type="submit" :disabled="saving" class="neo-btn-primary flex-1 font-black">
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

const { uploadFile } = useUploader();
const uploadingIcon = ref(false);

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

const onIconSelected = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  uploadingIcon.value = true;
  try {
    const url = await uploadFile(file);
    form.iconUrl = url;
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to upload icon');
  } finally {
    uploadingIcon.value = false;
    input.value = '';
  }
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
