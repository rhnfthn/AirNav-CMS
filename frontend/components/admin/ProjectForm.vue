<template>
  <form class="space-y-5" @submit.prevent="onSubmit">
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="neo-label">Title *</label>
        <input v-model="form.title" class="neo-input" placeholder="Project title" required />
      </div>
      <div>
        <label class="neo-label">Cover Image (attachment)</label>
        <input
          type="file"
          accept="image/*"
          class="neo-input"
          :disabled="loading || uploadingCover"
          @change="onCoverSelected"
        />
        <p class="text-xs mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 75%, transparent 25%);">
          Upload an image file (no URL needed)
        </p>
      </div>
    </div>

    <div>
      <label class="neo-label">Description *</label>
      <textarea
        v-model="form.description"
        class="neo-input resize-none"
        rows="3"
        placeholder="Short description of the project"
        required
      />
    </div>

    <div>
      <label class="neo-label">Content *</label>
      <textarea
        v-model="form.content"
        class="neo-input resize-none"
        rows="8"
        placeholder="Detailed project description, features, etc."
        required
      />
    </div>

    <div>
      <label class="neo-label">Tech Stack</label>
      <input 
        v-model="techStackInput" 
        class="neo-input" 
        placeholder="React, TypeScript, Node.js (comma separated)"
      />
      <p class="text-xs mt-1" style="color: color-mix(in srgb, var(--color-text-secondary) 75%, transparent 25%);">Separate technologies with commas</p>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="neo-label">GitHub URL</label>
        <input v-model="form.githubUrl" type="url" class="neo-input" placeholder="https://github.com/..." />
      </div>
      <div>
        <label class="neo-label">Live Demo URL</label>
        <input v-model="form.liveUrl" type="url" class="neo-input" placeholder="https://..." />
      </div>
    </div>

    <label class="published-toggle flex items-center gap-3 p-4 border-[3px] theme-border rounded-xl cursor-pointer transition-colors">
      <input v-model="form.published" type="checkbox" class="h-5 w-5 rounded border-2 theme-border" style="accent-color: var(--color-button);" />
      <div>
        <span class="font-bold theme-text-primary">Published</span>
        <p class="text-sm" style="color: color-mix(in srgb, var(--color-text-secondary) 85%, transparent 15%);">Make this project visible on your portfolio</p>
      </div>
    </label>

    <div v-if="uploadingCover" class="text-sm font-bold theme-text-secondary">
      Uploading cover...
    </div>

    <div v-if="form.coverImage" class="cover-preview p-4 border-[3px] theme-border rounded-xl">
      <label class="neo-label mb-2">Cover Preview</label>
      <div
        class="aspect-video rounded-lg overflow-hidden border-2 theme-border max-w-sm"
        style="background-color: color-mix(in srgb, var(--bg-main) 85%, var(--color-button) 15%);"
      >
        <img :src="form.coverImage" alt="Cover preview" class="w-full h-full object-cover" />
      </div>
      <button
        type="button"
        class="mt-3 neo-btn-secondary font-black"
        :disabled="loading || uploadingCover"
        @click="form.coverImage = ''"
      >
        Remove cover
      </button>
    </div>

    <div class="flex items-center gap-3 pt-2">
      <button type="submit" class="neo-btn-primary font-black" :disabled="loading">
        <span v-if="loading" class="flex items-center gap-2">
          <div class="neo-spinner w-4 h-4"></div>
          Saving...
        </span>
        <span v-else>{{ submitLabel }}</span>
      </button>
      <NuxtLink to="/admin/projects" class="neo-btn-secondary font-black">Cancel</NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from 'vue';
import { useToastStore } from '~/stores/toast';
import { useUploader } from '~/composables/useUploader';

type ProjectInput = {
  title: string;
  description: string;
  content: string;
  coverImage?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  published?: boolean;
};

const props = defineProps<{ 
  initial?: Partial<ProjectInput>; 
  submitLabel: string;
  loading?: boolean;
}>();
const emit = defineEmits<{ (e: 'submit', value: ProjectInput): void }>();

const toast = useToastStore();
const { uploadFile } = useUploader();
const uploadingCover = ref(false);

const form = reactive<ProjectInput>({
  title: props.initial?.title ?? '',
  description: props.initial?.description ?? '',
  content: props.initial?.content ?? '',
  coverImage: props.initial?.coverImage ?? '',
  techStack: props.initial?.techStack ?? [],
  githubUrl: props.initial?.githubUrl ?? '',
  liveUrl: props.initial?.liveUrl ?? '',
  published: props.initial?.published ?? false,
});

const techStackInput = computed({
  get: () => form.techStack.join(', '),
  set: (val: string) => {
    form.techStack = val.split(',').map(s => s.trim()).filter(Boolean);
  }
});

watch(
  () => props.initial,
  (newVal: Partial<ProjectInput> | undefined) => {
    if (newVal) {
      form.title = newVal.title ?? '';
      form.description = newVal.description ?? '';
      form.content = newVal.content ?? '';
      form.coverImage = newVal.coverImage ?? '';
      form.techStack = newVal.techStack ?? [];
      form.githubUrl = newVal.githubUrl ?? '';
      form.liveUrl = newVal.liveUrl ?? '';
      form.published = newVal.published ?? false;
    }
  },
  { deep: true },
);

const onSubmit = () => {
  const payload = { ...form };
  if (!payload.coverImage) delete payload.coverImage;
  if (!payload.githubUrl) delete payload.githubUrl;
  if (!payload.liveUrl) delete payload.liveUrl;
  emit('submit', payload);
};

const onCoverSelected = async (event: Event) => {
  const input = event.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  uploadingCover.value = true;
  try {
    const url = await uploadFile(file);
    form.coverImage = url;
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to upload cover image');
  } finally {
    uploadingCover.value = false;
    input.value = '';
  }
};
</script>

<style scoped>
.published-toggle {
  background-color: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%);
  box-shadow: 3px 3px 0px 0px var(--color-shadow);
}

.published-toggle:hover {
  background-color: color-mix(in srgb, var(--bg-main) 85%, var(--color-button) 15%);
}

.cover-preview {
  background-color: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%);
  box-shadow: 3px 3px 0px 0px var(--color-shadow);
}
</style>
