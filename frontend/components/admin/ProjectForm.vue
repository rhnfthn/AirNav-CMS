<template>
  <form class="space-y-4" @submit.prevent="onSubmit">
    <div>
      <label class="label">Title</label>
      <input v-model="form.title" class="input" placeholder="Project title" />
    </div>

    <div>
      <label class="label">Description</label>
      <textarea
        v-model="form.description"
        class="input"
        rows="3"
        placeholder="Short description"
      />
    </div>

    <div>
      <label class="label">Content</label>
      <textarea
        v-model="form.content"
        class="input"
        rows="10"
        placeholder="Write content..."
      />
    </div>

    <div>
      <label class="label">Image URL</label>
      <input v-model="form.image" class="input" placeholder="https://..." />
    </div>

    <label class="flex items-center gap-2 text-sm">
      <input v-model="form.published" type="checkbox" class="h-4 w-4" />
      Published
    </label>

    <div class="flex items-center gap-3">
      <button type="submit" class="btn-primary">
        {{ submitLabel }}
      </button>
      <p v-if="error" class="text-sm text-red-600">{{ error }}</p>
    </div>
  </form>
</template>

<script setup lang="ts">
type ProjectInput = {
  title: string;
  description: string;
  content: string;
  image?: string;
  published?: boolean;
};

const props = defineProps<{ initial?: Partial<ProjectInput>; submitLabel: string }>();
const emit = defineEmits<{ (e: 'submit', value: ProjectInput): void }>();

const form = reactive<ProjectInput>({
  title: props.initial?.title ?? '',
  description: props.initial?.description ?? '',
  content: props.initial?.content ?? '',
  image: props.initial?.image ?? '',
  published: props.initial?.published ?? false,
});

const error = ref<string>('');

const onSubmit = () => {
  error.value = '';
  if (!form.title || !form.description || !form.content) {
    error.value = 'Title, description, dan content wajib diisi.';
    return;
  }
  emit('submit', { ...form });
};
</script>
