<template>
  <form class="space-y-5" @submit.prevent="onSubmit">
    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="label">Title *</label>
        <input v-model="form.title" class="input" placeholder="Project title" required />
      </div>
      <div>
        <label class="label">Cover Image URL</label>
        <input v-model="form.coverImage" class="input" placeholder="https://..." />
      </div>
    </div>

    <div>
      <label class="label">Description *</label>
      <textarea
        v-model="form.description"
        class="input resize-none"
        rows="3"
        placeholder="Short description of the project"
        required
      />
    </div>

    <div>
      <label class="label">Content *</label>
      <textarea
        v-model="form.content"
        class="input resize-none"
        rows="8"
        placeholder="Detailed project description, features, etc."
        required
      />
    </div>

    <div>
      <label class="label">Tech Stack</label>
      <input 
        v-model="techStackInput" 
        class="input" 
        placeholder="React, TypeScript, Node.js (comma separated)"
      />
      <p class="text-xs text-gray-500 mt-1">Separate technologies with commas</p>
    </div>

    <div class="grid md:grid-cols-2 gap-4">
      <div>
        <label class="label">GitHub URL</label>
        <input v-model="form.githubUrl" type="url" class="input" placeholder="https://github.com/..." />
      </div>
      <div>
        <label class="label">Live Demo URL</label>
        <input v-model="form.liveUrl" type="url" class="input" placeholder="https://..." />
      </div>
    </div>

    <label class="flex items-center gap-3 p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
      <input v-model="form.published" type="checkbox" class="h-5 w-5 rounded text-gray-900" />
      <div>
        <span class="font-medium text-gray-900">Published</span>
        <p class="text-sm text-gray-500">Make this project visible on your portfolio</p>
      </div>
    </label>

    <div v-if="form.coverImage" class="p-4 bg-gray-50 rounded-xl">
      <label class="label mb-2">Cover Preview</label>
      <div class="aspect-video rounded-lg overflow-hidden bg-gray-200 max-w-sm">
        <img :src="form.coverImage" alt="Cover preview" class="w-full h-full object-cover" />
      </div>
    </div>

    <div class="flex items-center gap-3 pt-2">
      <button type="submit" class="btn-primary" :disabled="loading">
        <span v-if="loading" class="flex items-center gap-2">
          <div class="spinner w-4 h-4 border-white border-t-transparent"></div>
          Saving...
        </span>
        <span v-else>{{ submitLabel }}</span>
      </button>
      <NuxtLink to="/admin/projects" class="btn-secondary">Cancel</NuxtLink>
    </div>
  </form>
</template>

<script setup lang="ts">
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

watch(() => props.initial, (newVal) => {
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
}, { deep: true });

const onSubmit = () => {
  const payload = { ...form };
  if (!payload.coverImage) delete payload.coverImage;
  if (!payload.githubUrl) delete payload.githubUrl;
  if (!payload.liveUrl) delete payload.liveUrl;
  emit('submit', payload);
};
</script>
