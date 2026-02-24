<template>
  <div>
    <div class="mb-6">
      <h2 class="text-xl font-semibold text-gray-900">Edit About Section</h2>
      <p class="text-gray-600">Update your profile information displayed on the website.</p>
    </div>

    <div v-if="loading" class="flex justify-center py-12">
      <div class="spinner"></div>
    </div>

    <div v-else class="card p-6 max-w-2xl">
      <form @submit.prevent="saveAbout" class="space-y-6">
        <div>
          <label class="label">Title / Role</label>
          <input
            v-model="form.title"
            type="text"
            class="input"
            placeholder="e.g., Full Stack Developer"
            :disabled="saving"
          />
        </div>

        <div>
          <label class="label">Description</label>
          <textarea
            v-model="form.description"
            rows="8"
            class="input resize-none"
            placeholder="Write about yourself..."
            :disabled="saving"
          ></textarea>
        </div>

        <div>
          <label class="label">Photo URL</label>
          <input
            v-model="form.photoUrl"
            type="url"
            class="input"
            placeholder="https://example.com/photo.jpg"
            :disabled="saving"
          />
          <p class="text-xs text-gray-500 mt-1">Enter a URL to your profile photo</p>
        </div>

        <!-- Preview -->
        <div v-if="form.photoUrl" class="mt-4">
          <label class="label mb-2">Preview</label>
          <div class="w-32 h-32 rounded-xl bg-gray-100 overflow-hidden">
            <img :src="form.photoUrl" alt="Preview" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="flex gap-3 pt-4">
          <button type="submit" :disabled="saving" class="btn-primary">
            <span v-if="saving" class="flex items-center gap-2">
              <div class="spinner w-4 h-4 border-white border-t-transparent"></div>
              Saving...
            </span>
            <span v-else>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: 'admin', middleware: 'admin-auth' });

const { apiFetch } = useApiClient();
const toast = useToastStore();

const loading = ref(true);
const saving = ref(false);
const form = reactive({
  title: '',
  description: '',
  photoUrl: '',
});

onMounted(async () => {
  try {
    const data = await apiFetch<any>('/about');
    if (data) {
      form.title = data.title || '';
      form.description = data.description || '';
      form.photoUrl = data.photoUrl || '';
    }
  } catch (error) {
    console.error('Error fetching about:', error);
  } finally {
    loading.value = false;
  }
});

const saveAbout = async () => {
  saving.value = true;
  try {
    await apiFetch('/about', {
      method: 'PUT',
      body: form,
    });
    toast.success('About section updated successfully!');
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to update');
  } finally {
    saving.value = false;
  }
};
</script>
