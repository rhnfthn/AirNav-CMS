<template>
  <div class="section">
    <div class="container-page">
      <!-- Header -->
      <div class="max-w-3xl mb-16">
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">About Me</p>
        <h1 class="section-title">{{ about?.title || 'Full Stack Developer' }}</h1>
      </div>

      <!-- Content -->
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Photo & Info -->
        <div class="lg:col-span-1">
          <div class="card p-6 sticky top-24">
            <div class="aspect-square rounded-xl bg-gray-100 overflow-hidden mb-6">
              <img 
                v-if="about?.photoUrl" 
                :src="about.photoUrl" 
                alt="Profile photo"
                class="w-full h-full object-cover"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                <svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
            <div class="text-center">
              <h3 class="font-semibold text-lg text-gray-900">Portfolio Owner</h3>
              <p class="text-sm text-gray-500">{{ about?.title || 'Full Stack Developer' }}</p>
            </div>
          </div>
        </div>

        <!-- Description -->
        <div class="lg:col-span-2">
          <div class="prose prose-gray max-w-none">
            <p class="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {{ about?.description || 'No description available.' }}
            </p>
          </div>

          <!-- Skills Highlight -->
          <div class="mt-12">
            <h3 class="text-xl font-semibold text-gray-900 mb-6">Skills & Technologies</h3>
            <div v-if="loadingTools" class="flex justify-center py-8">
              <div class="spinner"></div>
            </div>
            <div v-else class="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div 
                v-for="(tools, category) in groupedTools" 
                :key="category"
                class="card p-4"
              >
                <p class="text-xs text-gray-500 uppercase tracking-wider mb-2">{{ category }}</p>
                <div class="flex flex-wrap gap-1">
                  <span 
                    v-for="tool in tools.slice(0, 4)" 
                    :key="tool.id" 
                    class="badge text-xs"
                  >
                    {{ tool.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="mt-12 flex flex-wrap gap-4">
            <NuxtLink to="/projects" class="btn-primary">
              View My Projects
            </NuxtLink>
            <NuxtLink to="/experience" class="btn-secondary">
              Work Experience
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-ghost">
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();

const loading = ref(true);
const loadingTools = ref(true);
const about = ref<any>(null);
const groupedTools = ref<Record<string, any[]>>({});

onMounted(async () => {
  try {
    const [aboutData, toolsData] = await Promise.all([
      apiFetch('/about').catch(() => null),
      apiFetch('/tools/grouped').catch(() => ({})),
    ]);
    about.value = aboutData;
    groupedTools.value = toolsData as Record<string, any[]>;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
    loadingTools.value = false;
  }
});

useHead({
  title: 'About Me | Portfolio',
  meta: [
    { name: 'description', content: 'Learn more about me - Full Stack Developer' },
  ],
});
</script>
