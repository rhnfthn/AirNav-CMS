<template>
  <div>
    <!-- Hero Section -->
    <section class="section relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-white -z-10"></div>
      <div class="container-page">
        <div class="max-w-3xl mx-auto text-center animate-fade-in">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Full Stack Developer
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Building modern web
            <span class="bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
              experiences
            </span>
          </h1>
          <p class="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {{ about?.description?.substring(0, 150) || 'Crafting clean, efficient, and scalable web applications with passion and precision.' }}...
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/projects" class="btn-gradient">
              View Projects
            </NuxtLink>
            <NuxtLink to="/contact" class="btn-secondary">
              Get in Touch
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview Section -->
    <section class="section bg-white">
      <div class="container-page">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-up">
            <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">About Me</p>
            <h2 class="section-title">{{ about?.title || 'Full Stack Developer' }}</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              {{ about?.description?.substring(0, 300) || 'Passionate developer with expertise in building modern web applications.' }}...
            </p>
            <NuxtLink to="/about" class="link-underline font-medium">
              Learn more about me →
            </NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="card p-6 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ stats.projects }}+</p>
              <p class="text-sm text-gray-500">Projects</p>
            </div>
            <div class="card p-6 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ stats.experience }}+</p>
              <p class="text-sm text-gray-500">Years Exp.</p>
            </div>
            <div class="card p-6 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ stats.certifications }}+</p>
              <p class="text-sm text-gray-500">Certifications</p>
            </div>
            <div class="card p-6 text-center">
              <p class="text-3xl font-bold text-gray-900">{{ stats.tools }}+</p>
              <p class="text-sm text-gray-500">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section bg-gray-50">
      <div class="container-page">
        <div class="text-center mb-12">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Portfolio</p>
          <h2 class="section-title">Featured Projects</h2>
        </div>
        
        <div v-if="loading" class="flex justify-center py-12">
          <div class="spinner"></div>
        </div>
        
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="project in featuredProjects" 
            :key="project.id" 
            class="card card-hover overflow-hidden group"
          >
            <div class="aspect-video bg-gray-100 relative overflow-hidden">
              <img 
                v-if="project.imageUrl" 
                :src="project.imageUrl" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
            </div>
            <div class="p-5">
              <h3 class="font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack?.slice(0, 3)" 
                  :key="tech" 
                  class="badge"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-10">
          <NuxtLink to="/projects" class="btn-secondary">
            View All Projects →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gray-900 text-white">
      <div class="container-page text-center">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Let's work together</h2>
        <p class="text-gray-400 mb-8 max-w-xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
        </p>
        <NuxtLink to="/contact" class="btn bg-white text-gray-900 hover:bg-gray-100">
          Get in Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();

const loading = ref(true);
const about = ref<any>(null);
const featuredProjects = ref<any[]>([]);

const stats = computed(() => ({
  projects: featuredProjects.value.length || 5,
  experience: 3,
  certifications: 2,
  tools: 10,
}));

onMounted(async () => {
  try {
    const [aboutData, projectsData] = await Promise.all([
      apiFetch('/about').catch(() => null),
      apiFetch('/projects/published').catch(() => []),
    ]);
    about.value = aboutData;
    featuredProjects.value = (projectsData as any[]).slice(0, 3);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: 'Home | Portfolio',
  meta: [
    { name: 'description', content: 'Full Stack Developer Portfolio - Building modern web experiences' },
  ],
});
</script>
