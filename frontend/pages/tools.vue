<template>
  <div class="section">
    <div class="container-page">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Tech Stack</p>
        <h1 class="section-title">Tools & Technologies</h1>
        <p class="section-subtitle mx-auto">
          The technologies, frameworks, and tools I use to build amazing products.
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="spinner"></div>
      </div>

      <!-- Tools by Category -->
      <div v-else-if="Object.keys(groupedTools).length" class="space-y-12">
        <div v-for="(tools, category) in groupedTools" :key="category">
          <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-gray-900"></span>
            {{ category }}
          </h2>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div 
              v-for="tool in tools" 
              :key="tool.id"
              class="card p-4 text-center group hover:border-gray-300 transition-all"
            >
              <div class="w-12 h-12 mx-auto mb-3 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <img 
                  v-if="tool.iconUrl" 
                  :src="tool.iconUrl" 
                  :alt="tool.name"
                  class="w-8 h-8 object-contain"
                />
                <span v-else class="text-lg font-bold text-gray-400">
                  {{ tool.name.charAt(0) }}
                </span>
              </div>
              <p class="text-sm font-medium text-gray-700">{{ tool.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <p class="text-gray-500">No tools available yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();

const loading = ref(true);
const groupedTools = ref<Record<string, any[]>>({});

onMounted(async () => {
  try {
    const data = await apiFetch('/tools/grouped');
    groupedTools.value = data as Record<string, any[]>;
  } catch (error) {
    console.error('Error fetching tools:', error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: 'Tools & Technologies | Portfolio',
  meta: [
    { name: 'description', content: 'Technologies and tools I use' },
  ],
});
</script>
