<template>
  <div class="section">
    <div class="container-page">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Achievements</p>
        <h1 class="section-title">Certifications</h1>
        <p class="section-subtitle mx-auto">
          Professional certifications and credentials I've earned throughout my career.
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="spinner"></div>
      </div>

      <!-- Certifications Grid -->
      <div v-else-if="certifications.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="cert in certifications" 
          :key="cert.id" 
          class="card card-hover overflow-hidden"
        >
          <div v-if="cert.imageUrl" class="aspect-[16/9] bg-gray-100">
            <img 
              :src="cert.imageUrl" 
              :alt="cert.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge">{{ cert.year }}</span>
            </div>
            <h3 class="font-semibold text-gray-900 mb-1">{{ cert.title }}</h3>
            <p class="text-sm text-gray-500 mb-4">{{ cert.issuer }}</p>
            <a 
              v-if="cert.credentialUrl" 
              :href="cert.credentialUrl" 
              target="_blank"
              class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors link-underline"
            >
              View Credential →
            </a>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
        </svg>
        <p class="text-gray-500">No certifications available yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();

const loading = ref(true);
const certifications = ref<any[]>([]);

onMounted(async () => {
  try {
    const data = await apiFetch('/certifications');
    certifications.value = data as any[];
  } catch (error) {
    console.error('Error fetching certifications:', error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: 'Certifications | Portfolio',
  meta: [
    { name: 'description', content: 'My professional certifications and credentials' },
  ],
});
</script>
