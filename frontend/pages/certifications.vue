<template>
  <div class="py-16" :style="{ backgroundColor: 'var(--pss-certifications-section-bg, #FFFFFF)' }">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-12">
        <div 
          class="mb-4 text-xs inline-block px-3 py-1 border-2 rounded-full font-bold"
          :style="{
            backgroundColor: 'var(--pss-cert-badge-bg, #EAF4FB)',
            borderColor: 'var(--pss-cert-badge-border, #B8C6DB)',
            color: 'var(--pss-cert-badge-text, #2C3E50)'
          }"
        >Achievements</div>
        <h1 class="text-3xl font-black theme-text-primary" style="font-family: 'Space Grotesk', sans-serif;">Certifications</h1>
        <p class="theme-text-secondary mt-2 max-w-xl mx-auto">
          Professional certifications and credentials I've earned throughout my career.
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <!-- Certifications Grid -->
      <div v-else-if="certifications.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="cert in certifications" 
          :key="cert.id" 
          class="overflow-hidden border-[3px] rounded-xl transition-transform hover:-translate-y-1"
          :style="{
            backgroundColor: 'var(--pss-cert-card-bg, #FFFFFF)',
            borderColor: 'var(--pss-cert-card-border, #B8C6DB)',
            boxShadow: '6px 6px 0px 0px var(--pss-cert-card-shadow, #B8C6DB)'
          }"
        >
          <div 
            v-if="cert.imageUrl" 
            class="aspect-[16/9] border-b-[3px]" 
            :style="{ 
              borderColor: 'var(--pss-cert-card-border, #B8C6DB)',
              backgroundColor: 'color-mix(in srgb, var(--bg-main) 85%, var(--bg-header) 15%)'
            }"
          >
            <img 
              :src="cert.imageUrl" 
              :alt="cert.title"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-2">
              <span 
                class="px-2 py-0.5 border-2 rounded-full text-xs font-bold"
                :style="{
                  backgroundColor: 'var(--pss-cert-year-badge-bg, #EAF4FB)',
                  borderColor: 'var(--pss-cert-year-badge-border, #B8C6DB)',
                  color: 'var(--pss-cert-year-badge-text, #2C3E50)'
                }"
              >{{ cert.year }}</span>
            </div>
            <h3 class="font-bold theme-text-primary mb-1" :style="{ color: 'var(--pss-cert-card-header-text, var(--color-text-primary))' }">{{ cert.title }}</h3>
            <p class="text-sm theme-text-secondary mb-4 font-medium" :style="{ color: 'var(--pss-cert-card-content-text, var(--color-text-secondary))' }">{{ cert.issuer }}</p>
            <a 
              v-if="cert.credentialUrl" 
              :href="cert.credentialUrl" 
              target="_blank"
              class="cert-credential-link text-sm font-bold border-b-[3px] transition-colors pb-0.5"
              :style="{
                '--cert-link-text': 'var(--pss-cert-btn-text, var(--color-text-primary))',
                '--cert-link-border': 'var(--pss-cert-btn-bg, var(--color-button))',
                '--cert-link-hover-text': 'var(--pss-cert-btn-hover-text, var(--pss-cert-btn-text, var(--color-text-primary)))',
                '--cert-link-hover-border': 'var(--pss-cert-btn-border, var(--color-button))'
              }"
            >
              View Credential →
            </a>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="neo-card p-16 text-center">
        <p class="theme-text-secondary font-bold">No certifications available yet.</p>
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

<style scoped>
.cert-credential-link {
  color: var(--cert-link-text);
  border-color: var(--cert-link-border);
}

.cert-credential-link:hover {
  color: var(--cert-link-hover-text);
  border-color: var(--cert-link-hover-border);
}
</style>
