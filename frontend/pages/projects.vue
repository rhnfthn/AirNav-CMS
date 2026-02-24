<template>
  <div class="section">
    <div class="container-page">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Portfolio</p>
        <h1 class="section-title">My Projects</h1>
        <p class="section-subtitle mx-auto">
          A collection of projects I've worked on, showcasing various technologies and solutions.
        </p>
      </div>

      <!-- Tech Stack Filter -->
      <div class="flex flex-wrap justify-center gap-2 mb-10">
        <button
          v-for="tech in allTechStacks"
          :key="tech"
          @click="toggleFilter(tech)"
          :class="[
            'badge cursor-pointer transition-all',
            selectedTech.includes(tech) ? 'badge-primary' : 'hover:bg-gray-200'
          ]"
        >
          {{ tech }}
        </button>
        <button
          v-if="selectedTech.length > 0"
          @click="selectedTech = []"
          class="badge bg-red-100 text-red-700 hover:bg-red-200 cursor-pointer"
        >
          Clear filters
        </button>
      </div>

      <!-- Loading state -->
      <div v-if="loading" class="flex justify-center py-12">
        <div class="spinner"></div>
      </div>

      <!-- Projects Grid -->
      <div v-else-if="filteredProjects.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id" 
          class="card card-hover overflow-hidden group cursor-pointer"
          @click="openModal(project)"
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
            <h3 class="font-semibold text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-600 mb-4 line-clamp-2">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.techStack?.slice(0, 3)" 
                :key="tech" 
                class="badge"
              >
                {{ tech }}
              </span>
              <span v-if="project.techStack?.length > 3" class="badge">
                +{{ project.techStack.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-16">
        <svg class="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
        </svg>
        <p class="text-gray-500">No projects found with the selected filters.</p>
      </div>
    </div>

    <!-- Project Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="selectedProject = null"
      >
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div class="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
          <button 
            @click="selectedProject = null"
            class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="aspect-video bg-gray-100">
            <img 
              v-if="selectedProject.imageUrl" 
              :src="selectedProject.imageUrl" 
              :alt="selectedProject.title"
              class="w-full h-full object-cover"
            />
          </div>
          
          <div class="p-6">
            <h2 class="text-2xl font-bold text-gray-900 mb-2">{{ selectedProject.title }}</h2>
            <p class="text-gray-600 mb-6">{{ selectedProject.description }}</p>
            
            <div class="mb-6">
              <p class="text-sm font-medium text-gray-500 mb-2">Technologies</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in selectedProject.techStack" :key="tech" class="badge">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="flex flex-wrap gap-3">
              <a 
                v-if="selectedProject.githubUrl" 
                :href="selectedProject.githubUrl" 
                target="_blank"
                class="btn-secondary"
              >
                <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                GitHub
              </a>
              <a 
                v-if="selectedProject.liveUrl" 
                :href="selectedProject.liveUrl" 
                target="_blank"
                class="btn-primary"
              >
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const { apiFetch } = useApiClient();

const loading = ref(true);
const projects = ref<any[]>([]);
const selectedProject = ref<any>(null);
const selectedTech = ref<string[]>([]);

const allTechStacks = computed(() => {
  const techs = new Set<string>();
  projects.value.forEach((p) => {
    p.techStack?.forEach((t: string) => techs.add(t));
  });
  return Array.from(techs).sort();
});

const filteredProjects = computed(() => {
  if (selectedTech.value.length === 0) return projects.value;
  return projects.value.filter((p) =>
    selectedTech.value.some((t) => p.techStack?.includes(t))
  );
});

const toggleFilter = (tech: string) => {
  const index = selectedTech.value.indexOf(tech);
  if (index === -1) {
    selectedTech.value.push(tech);
  } else {
    selectedTech.value.splice(index, 1);
  }
};

const openModal = (project: any) => {
  selectedProject.value = project;
};

onMounted(async () => {
  try {
    const data = await apiFetch('/projects/published');
    projects.value = data as any[];
  } catch (error) {
    console.error('Error fetching projects:', error);
  } finally {
    loading.value = false;
  }
});

useHead({
  title: 'Projects | Portfolio',
  meta: [
    { name: 'description', content: 'View my portfolio of projects' },
  ],
});
</script>
