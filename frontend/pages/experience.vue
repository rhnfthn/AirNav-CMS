<template>
  <div class="section">
    <div class="container-page">
      <!-- Header -->
      <div class="text-center mb-16">
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Career</p>
        <h1 class="section-title">Work Experience</h1>
        <p class="section-subtitle mx-auto">
          My professional journey and the companies I've had the pleasure to work with.
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="spinner"></div>
      </div>

      <!-- Timeline -->
      <div v-else-if="experiences.length" class="max-w-3xl mx-auto">
        <div class="relative">
          <!-- Vertical line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gray-200"></div>

          <!-- Timeline items -->
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            :class="[
              'relative mb-12 md:mb-16',
              index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
            ]"
          >
            <!-- Dot -->
            <div 
              :class="[
                'absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow',
                exp.endDate ? 'bg-gray-400' : 'bg-green-500'
              ]"
            ></div>

            <!-- Card -->
            <div 
              :class="[
                'card p-6 ml-8 md:ml-0',
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              ]"
            >
              <div class="flex items-center gap-2 mb-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                <span class="badge">
                  {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}
                </span>
              </div>
              <h3 class="font-semibold text-lg text-gray-900">{{ exp.position }}</h3>
              <p class="text-gray-600 font-medium mb-3">{{ exp.company }}</p>
              <p class="text-sm text-gray-500 leading-relaxed" :class="index % 2 === 0 ? 'md:text-right' : ''">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <p class="text-gray-500">No work experience available yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();

const loading = ref(true);
const experiences = ref<any[]>([]);

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

onMounted(async () => {
  try {
    const data = await apiFetch('/experiences');
    experiences.value = data as any[];
  } catch (error) {
    console.error('Error fetching experiences:', error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: 'Experience | Portfolio',
  meta: [
    { name: 'description', content: 'My professional work experience' },
  ],
});
</script>
