<template>
  <div class="py-16" :style="{ backgroundColor: 'var(--pss-experience-section-bg, #F4F9FD)' }">
    <div class="max-w-6xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16">
        <div 
          class="mb-4 text-xs inline-block px-3 py-1 border-2 rounded-full font-bold"
          :style="{
            backgroundColor: 'var(--pss-exp-badge-bg, #EAF4FB)',
            borderColor: 'var(--pss-exp-badge-border, #B8C6DB)',
            color: 'var(--pss-exp-badge-text, #2C3E50)'
          }"
        >Career</div>
        <h1
          class="text-3xl font-black"
          style="font-family: 'Space Grotesk', sans-serif; color: var(--pss-experience-section-header-text, #1A202C);"
        >
          Work Experience
        </h1>
        <p class="mt-2 max-w-xl mx-auto" :style="{ color: 'var(--pss-experience-section-content-text, #4A5568)' }">
          My professional journey and the companies I've had the pleasure to work with.
        </p>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="neo-spinner"></div>
      </div>

      <!-- Timeline -->
      <div v-else-if="experiences.length" class="max-w-3xl mx-auto">
        <div class="relative">
          <!-- Vertical line -->
          <div 
            class="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-1"
            :style="{ backgroundColor: 'var(--pss-exp-timeline-line-bg, var(--color-border))' }"
          ></div>

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
                'absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-md border-[3px]'
              ]"
              :style="{
                borderColor: 'var(--pss-exp-timeline-dot-border, var(--color-border))',
                backgroundColor: exp.endDate
                  ? 'color-mix(in srgb, var(--bg-main) 75%, var(--bg-header) 25%)'
                  : 'var(--pss-exp-timeline-dot-bg, var(--color-button))',
                boxShadow: '2px 2px 0px 0px var(--pss-exp-card-shadow, var(--color-shadow))',
              }"
            ></div>

            <!-- Card -->
            <div 
              :class="[
                'p-6 ml-8 md:ml-0 border-[3px] rounded-xl transition-transform hover:-translate-y-1',
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              ]"
              :style="{
                backgroundColor: 'var(--pss-exp-card-bg, #FFFFFF)',
                borderColor: 'var(--pss-exp-card-border, #B8C6DB)',
                boxShadow: '6px 6px 0px 0px var(--pss-exp-card-shadow, #B8C6DB)'
              }"
            >
              <div class="flex items-center gap-2 mb-2" :class="index % 2 === 0 ? 'md:justify-end' : ''">
                <span 
                  class="text-xs px-2 py-0.5 border-2 rounded-full font-bold"
                  :style="{
                    backgroundColor: 'var(--pss-exp-card-badge-bg, #EAF4FB)',
                    borderColor: 'var(--pss-exp-card-badge-border, #B8C6DB)',
                    color: 'var(--pss-exp-card-badge-text, #2C3E50)'
                  }"
                >
                  {{ formatDate(exp.startDate) }} - {{ exp.endDate ? formatDate(exp.endDate) : 'Present' }}
                </span>
              </div>
              <h3 class="font-black text-lg" :style="{ color: 'var(--pss-exp-card-header-text, #1A202C)' }">{{ exp.position }}</h3>
              <p class="font-bold mb-3" :style="{ color: 'var(--pss-exp-card-sub-header-text, #4A5568)' }">{{ exp.company }}</p>
              <p
                class="text-sm leading-relaxed"
                :class="index % 2 === 0 ? 'md:text-right' : ''"
                :style="{ color: 'var(--pss-exp-card-content-text, #4A5568)' }"
              >
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="neo-card p-16 text-center">
        <p class="theme-text-secondary font-bold">No work experience available yet.</p>
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
