<template>
  <div class="theme-bg-main">
    <template v-for="sectionKey in renderOrder" :key="sectionKey">
      <!-- Hero Section -->
      <section v-if="sectionKey === 'hero'" class="py-20 md:py-28 relative overflow-hidden" :style="{ backgroundColor: 'var(--pss-hero-section-bg, #FFFFFF)' }">
        <div
          class="absolute inset-0 -z-10"
          style="background-image: radial-gradient(circle, color-mix(in srgb, var(--pss-section-divider-color, var(--color-border)) 20%, transparent 80%) 1px, transparent 1px); background-size: 24px 24px;"
        ></div>

        <div class="max-w-6xl mx-auto px-6">
          <div
			class="gap-8 md:gap-10 items-center"
            :class="heroLayoutClass"
          >
            <div
              v-if="about?.photoUrl && layoutStore.layout.heroLayout !== 'text-image'"
              class="flex justify-center md:ml-8"
              :class="heroImageAlignClass"
            >
              <div 
                v-if="about?.photoUrl" 
                class="overflow-hidden rounded-xl border-[3px]" 
                :class="heroPhotoSizeClass"
                :style="{
                  backgroundColor: 'var(--pss-home-hero-card-bg, #FFFFFF)',
                  borderColor: 'var(--pss-home-hero-card-border, #B8C6DB)',
                  boxShadow: '6px 6px 0px 0px var(--pss-home-hero-card-shadow, #B8C6DB)'
                }"
              >
                <img :src="about.photoUrl" alt="Hero" class="w-full h-full object-cover" />
              </div>
            </div>

            <div :class="layoutStore.layout.heroLayout === 'centered' ? 'text-center' : ''">
              <div 
                class="inline-block px-3 py-1 border-2 rounded-full text-sm font-bold mb-6"
                :style="{
                  backgroundColor: 'var(--pss-home-hero-badge-bg, #EAF4FB)',
                  borderColor: 'var(--pss-home-hero-badge-border, #B8C6DB)',
                  color: 'var(--pss-home-hero-badge-text, #2C3E50)'
                }"
              >{{ t('public.home.hero.badge') }}</div>
              <h1 
                class="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6" 
                style="font-family: 'Space Grotesk', sans-serif;"
                :style="{ color: 'var(--pss-home-hero-header-text, #1A202C)' }"
              >
                {{ t('public.home.hero.titlePrefix') }}
                <span
                  class="px-2 border-[3px] inline-block -rotate-1"
                  :style="{
                    backgroundColor: 'var(--pss-home-hero-exp-badge-bg, #6FA8DC)',
                    borderColor: 'var(--pss-home-hero-exp-badge-border, #B8C6DB)',
                    color: 'var(--pss-home-hero-exp-badge-text, #FFFFFF)',
                    boxShadow: '4px 4px 0px 0px var(--pss-home-hero-exp-badge-shadow, #B8C6DB)'
                  }"
                >
                  {{ t('public.home.hero.titleHighlight') }}
                </span>
              </h1>
              <p 
                class="text-lg sm:text-xl mb-6 max-w-2xl" 
                :class="layoutStore.layout.heroLayout === 'centered' ? 'mx-auto' : ''"
                :style="{ color: 'var(--pss-home-hero-content-text, #4A5568)' }"
              >
                {{ t('public.home.hero.description') }}
              </p>
              <div class="flex flex-col sm:flex-row gap-4" :class="layoutStore.layout.heroLayout === 'centered' ? 'justify-center' : ''">
                <NuxtLink 
                  to="/projects" 
                  class="font-black text-lg px-8 py-3 border-[3px] rounded-xl hover:translate-x-1 hover:translate-y-1 transition-transform"
                  :style="{
                    backgroundColor: 'var(--pss-home-hero-btn-bg, #6FA8DC)',
                    color: 'var(--pss-home-hero-btn-text, #FFFFFF)',
                    borderColor: 'var(--pss-home-hero-btn-border, #B8C6DB)',
                    boxShadow: '4px 4px 0px 0px var(--pss-home-hero-btn-shadow, #B8C6DB)'
                  }"
                >
                  {{ t('public.home.hero.viewProjects') }}
                </NuxtLink>
                  <a
                    v-if="pssStore.settings.homeHeroAnotherDesignUrl"
                    :href="pssStore.settings.homeHeroAnotherDesignUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-black text-lg px-8 py-3 border-[3px] rounded-xl hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
                    :style="{
                      backgroundColor: 'var(--pss-home-hero-btn-bg, #6FA8DC)',
                      color: 'var(--pss-home-hero-btn-text, #FFFFFF)',
                      borderColor: 'var(--pss-home-hero-btn-border, #B8C6DB)',
                      boxShadow: '4px 4px 0px 0px var(--pss-home-hero-btn-shadow, #B8C6DB)'
                    }"
                  >
                    {{ t('public.home.hero.anotherDesign') }}
                  </a>
              </div>
            </div>

            <div
              v-if="about?.photoUrl && layoutStore.layout.heroLayout === 'text-image'"
              class="flex justify-center md:ml-8"
              :class="heroImageAlignClass"
            >
              <div 
                v-if="about?.photoUrl" 
                class="overflow-hidden rounded-xl border-[3px]" 
                :class="heroPhotoSizeClass"
                :style="{
                  backgroundColor: 'var(--pss-home-hero-card-bg, #FFFFFF)',
                  borderColor: 'var(--pss-home-hero-card-border, #B8C6DB)',
                  boxShadow: '6px 6px 0px 0px var(--pss-home-hero-card-shadow, #B8C6DB)'
                }"
              >
                <img :src="about.photoUrl" alt="Hero" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- About Preview Section -->
      <section 
        v-else-if="sectionKey === 'about'" 
        class="py-20 border-y-[3px]" 
        :style="{ 
          backgroundColor: 'var(--pss-about-section-bg, #FFFFFF)',
          borderColor: 'var(--pss-section-divider-color, #B8C6DB)'
        }"
      >
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div 
                class="inline-block px-3 py-1 border-2 rounded-full text-xs font-bold mb-4"
                :style="{
                  backgroundColor: 'var(--pss-home-about-badge-bg, #EAF4FB)',
                  borderColor: 'var(--pss-home-about-badge-border, #B8C6DB)',
                  color: 'var(--pss-home-about-badge-text, #2C3E50)'
                }"
              >{{ t('public.home.about.badge') }}</div>
              <h2 
                class="text-3xl font-black mb-4" 
                style="font-family: 'Space Grotesk', sans-serif;"
                :style="{ color: 'var(--pss-home-about-header-text, #1A202C)' }"
              >
                {{ about?.title || t('public.common.fullStackDeveloper') }}
              </h2>
              <p 
                class="leading-relaxed mb-6"
                :style="{ color: 'var(--pss-home-about-content-text, #4A5568)' }"
              >
                {{ (about?.description?.substring(0, 300) || t('public.home.about.fallbackDesc')) + '...' }}
              </p>

              <div v-if="about?.university || about?.major || gpaNumber !== null" class="mb-6 flex flex-wrap gap-2">
                <span 
                  v-if="about?.university" 
                  class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                  :style="{
                    backgroundColor: 'var(--pss-home-about-info-badge-bg, #EAF4FB)',
                    borderColor: 'var(--pss-home-about-info-badge-border, #B8C6DB)',
                    color: 'var(--pss-home-about-info-badge-text, #2C3E50)'
                  }"
                >{{ about.university }}</span>
                <span 
                  v-if="about?.major" 
                  class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                  :style="{
                    backgroundColor: 'var(--pss-home-about-info-badge-bg, #EAF4FB)',
                    borderColor: 'var(--pss-home-about-info-badge-border, #B8C6DB)',
                    color: 'var(--pss-home-about-info-badge-text, #2C3E50)'
                  }"
                >{{ about.major }}</span>
                <span 
                  v-if="gpaNumber !== null" 
                  class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                  :style="{
                    backgroundColor: 'var(--pss-home-about-info-badge-bg, #EAF4FB)',
                    borderColor: 'var(--pss-home-about-info-badge-border, #B8C6DB)',
                    color: 'var(--pss-home-about-info-badge-text, #2C3E50)'
                  }"
                >{{ t('public.common.gpa') }}: {{ gpaNumber.toFixed(2) }}</span>
              </div>
              <NuxtLink 
                to="/about" 
                class="font-black px-5 py-2.5 border-[3px] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
                :style="{
                  backgroundColor: 'var(--pss-home-about-btn-bg, #EAF4FB)',
                  color: 'var(--pss-home-about-btn-text, #2C3E50)',
                  borderColor: 'var(--pss-home-about-btn-border, #B8C6DB)',
                  boxShadow: '4px 4px 0px 0px var(--pss-home-about-btn-shadow, #B8C6DB)'
                }"
              >
                {{ t('public.home.about.learnMore') }}
              </NuxtLink>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div 
                class="p-6 text-center border-[3px] rounded-xl"
                :style="{
                  backgroundColor: 'var(--pss-home-about-stat-card-bg, #FFFFFF)',
                  borderColor: 'var(--pss-home-about-stat-card-border, #B8C6DB)',
                  boxShadow: '6px 6px 0px 0px var(--pss-home-about-stat-card-shadow, #B8C6DB)'
                }"
              >
                <p class="text-3xl font-black" :style="{ color: 'var(--pss-home-about-stat-number-text, #1A202C)' }">{{ stats.projects }}+</p>
                <p class="text-sm font-bold uppercase tracking-wide" :style="{ color: 'var(--pss-home-about-stat-label-text, #4A5568)' }">{{ t('public.common.projects') }}</p>
              </div>
              <div 
                class="p-6 text-center border-[3px] rounded-xl"
                :style="{
                  backgroundColor: 'var(--pss-home-about-stat-card-bg, #FFFFFF)',
                  borderColor: 'var(--pss-home-about-stat-card-border, #B8C6DB)',
                  boxShadow: '6px 6px 0px 0px var(--pss-home-about-stat-card-shadow, #B8C6DB)'
                }"
              >
                <p class="text-3xl font-black" :style="{ color: 'var(--pss-home-about-stat-number-text, #1A202C)' }">{{ stats.experience }}+</p>
                <p class="text-sm font-bold uppercase tracking-wide" :style="{ color: 'var(--pss-home-about-stat-label-text, #4A5568)' }">{{ t('public.common.experience') }}</p>
              </div>
              <div 
                class="p-6 text-center border-[3px] rounded-xl"
                :style="{
                  backgroundColor: 'var(--pss-home-about-stat-card-bg, #FFFFFF)',
                  borderColor: 'var(--pss-home-about-stat-card-border, #B8C6DB)',
                  boxShadow: '6px 6px 0px 0px var(--pss-home-about-stat-card-shadow, #B8C6DB)'
                }"
              >
                <p class="text-3xl font-black" :style="{ color: 'var(--pss-home-about-stat-number-text, #1A202C)' }">{{ stats.certifications }}+</p>
                <p class="text-sm font-bold uppercase tracking-wide" :style="{ color: 'var(--pss-home-about-stat-label-text, #4A5568)' }">{{ t('public.common.certifications') }}</p>
              </div>
              <div 
                class="p-6 text-center border-[3px] rounded-xl"
                :style="{
                  backgroundColor: 'var(--pss-home-about-stat-card-bg, #FFFFFF)',
                  borderColor: 'var(--pss-home-about-stat-card-border, #B8C6DB)',
                  boxShadow: '6px 6px 0px 0px var(--pss-home-about-stat-card-shadow, #B8C6DB)'
                }"
              >
                <p class="text-3xl font-black" :style="{ color: 'var(--pss-home-about-stat-number-text, #1A202C)' }">{{ stats.tools }}+</p>
                <p class="text-sm font-bold uppercase tracking-wide" :style="{ color: 'var(--pss-home-about-stat-label-text, #4A5568)' }">{{ t('public.common.technologies') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
      <section v-else-if="sectionKey === 'projects'" v-show="layoutStore.layout.showFeaturedProjects" class="py-20" :style="{ backgroundColor: 'var(--pss-projects-section-bg, #F4F9FD)' }">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <div 
              class="px-3 py-1 border-2 rounded-full text-xs font-bold mb-4 inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-portfolio-badge-bg, #EAF4FB)',
                borderColor: 'var(--pss-home-portfolio-badge-border, #B8C6DB)',
                color: 'var(--pss-home-portfolio-badge-text, #2C3E50)'
              }"
            >{{ t('public.common.portfolio') }}</div>
            <h2 
              class="text-3xl font-black" 
              style="font-family: 'Space Grotesk', sans-serif;"
              :style="{ color: 'var(--pss-home-portfolio-header-text, #1A202C)' }"
            >{{ t('public.home.projects.title') }}</h2>
          </div>

          <div v-if="loading" class="flex justify-center py-12">
            <div class="neo-spinner"></div>
          </div>

          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="project in featuredProjects"
              :key="project.id"
              class="overflow-hidden group border-[3px] rounded-xl hover:translate-x-1 hover:translate-y-1 transition-transform"
              :style="{
                backgroundColor: 'var(--pss-home-portfolio-card-bg, #FFFFFF)',
                borderColor: 'var(--pss-home-portfolio-card-border, #B8C6DB)',
                boxShadow: '6px 6px 0px 0px var(--pss-home-portfolio-card-shadow, #B8C6DB)'
              }"
            >
              <div 
                class="aspect-video relative overflow-hidden border-b-[3px]" 
                :style="{ 
                  backgroundColor: 'color-mix(in srgb, var(--pss-home-portfolio-card-bg, #FFFFFF) 80%, var(--pss-section-divider-color, #B8C6DB) 20%)',
                  borderColor: 'var(--pss-home-portfolio-card-border, #B8C6DB)'
                }"
              >
                <img
                  v-if="project.coverImage"
                  :src="project.coverImage"
                  :alt="project.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div v-else class="w-full h-full flex items-center justify-center" :style="{ color: 'var(--pss-home-portfolio-card-content-text, #4A5568)' }">
                  <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div class="p-5">
                <h3 class="font-bold mb-2" :style="{ color: 'var(--pss-home-portfolio-card-header-text, #1A202C)' }">{{ project.title }}</h3>
                <p class="text-sm mb-4 line-clamp-2" :style="{ color: 'var(--pss-home-portfolio-card-content-text, #4A5568)' }">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techStack?.slice(0, 3)"
                    :key="tech"
                    class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                    :style="{
                      backgroundColor: 'var(--pss-home-portfolio-tech-badge-bg, #EAF4FB)',
                      borderColor: 'var(--pss-home-portfolio-tech-badge-border, #B8C6DB)',
                      color: 'var(--pss-home-portfolio-tech-badge-text, #2C3E50)'
                    }"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-10">
            <NuxtLink 
              to="/projects" 
              class="font-black px-5 py-2.5 border-[3px] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-portfolio-btn-bg, #EAF4FB)',
                color: 'var(--pss-home-portfolio-btn-text, #2C3E50)',
                borderColor: 'var(--pss-home-portfolio-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-home-portfolio-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.home.projects.viewAll') }}
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Certifications Preview -->
      <section 
        v-else-if="sectionKey === 'certifications'" 
        class="py-20 border-t-[3px]" 
        :style="{ 
          backgroundColor: 'var(--pss-certifications-section-bg, #FFFFFF)',
          borderColor: 'var(--pss-section-divider-color, #B8C6DB)'
        }"
      >
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <div 
              class="px-3 py-1 border-2 rounded-full text-xs font-bold mb-4 inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-cert-badge-bg, #EAF4FB)',
                borderColor: 'var(--pss-home-cert-badge-border, #B8C6DB)',
                color: 'var(--pss-home-cert-badge-text, #2C3E50)'
              }"
            >{{ t('public.home.certifications.badge') }}</div>
            <h2 
              class="text-3xl font-black" 
              style="font-family: 'Space Grotesk', sans-serif;"
              :style="{ color: 'var(--pss-home-cert-header-text, #1A202C)' }"
            >{{ t('public.common.certifications') }}</h2>
          </div>

          <div v-if="loading" class="flex justify-center py-12">
            <div class="neo-spinner"></div>
          </div>

          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="cert in featuredCertifications" 
              :key="cert.id" 
              class="overflow-hidden border-[3px] rounded-xl"
              :style="{
                backgroundColor: 'var(--pss-home-cert-card-bg, #FFFFFF)',
                borderColor: 'var(--pss-home-cert-card-border, #B8C6DB)',
                boxShadow: '6px 6px 0px 0px var(--pss-home-cert-card-shadow, #B8C6DB)'
              }"
            >
              <div 
                v-if="cert.imageUrl" 
                class="aspect-[16/9] border-b-[3px]"
                :style="{ 
                  borderColor: 'var(--pss-home-cert-card-border, #B8C6DB)',
                  backgroundColor: 'var(--pss-home-cert-card-bg, #FFFFFF)'
                }"
              >
                <img 
                  :src="cert.imageUrl" 
                  :alt="cert.title"
                  class="w-full h-full object-cover"
                />
              </div>

              <div class="p-6">
                <h3 class="font-black mb-2" :style="{ color: 'var(--pss-home-cert-card-header-text, #1A202C)' }">{{ cert.title }}</h3>
                <p class="text-sm font-bold" :style="{ color: 'var(--pss-home-cert-card-content-text, #4A5568)' }">{{ cert.issuer }} • {{ cert.year }}</p>
                <div v-if="cert.credentialUrl" class="mt-4">
                  <a 
                    :href="cert.credentialUrl" 
                    target="_blank" 
                    class="font-black px-4 py-2 border-[3px] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-transform inline-flex"
                    :style="{
                      backgroundColor: 'var(--pss-home-cert-view-btn-bg, #EAF4FB)',
                      color: 'var(--pss-home-cert-view-btn-text, #2C3E50)',
                      borderColor: 'var(--pss-home-cert-view-btn-border, #B8C6DB)',
                      boxShadow: '3px 3px 0px 0px var(--pss-home-cert-view-btn-shadow, #B8C6DB)'
                    }"
                  >
                    {{ t('public.home.certifications.viewCredential') }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="text-center mt-10">
            <NuxtLink 
              to="/certifications" 
              class="font-black px-5 py-2.5 border-[3px] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-cert-all-btn-bg, #EAF4FB)',
                color: 'var(--pss-home-cert-all-btn-text, #2C3E50)',
                borderColor: 'var(--pss-home-cert-all-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-home-cert-all-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.home.certifications.viewAll') }}
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Experience Preview -->
      <section 
        v-else-if="sectionKey === 'experience'" 
        class="py-20 border-t-[3px]" 
        :style="{ 
          backgroundColor: 'var(--pss-experience-section-bg, #F4F9FD)',
          borderColor: 'var(--pss-section-divider-color, #B8C6DB)'
        }"
      >
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <div 
              class="px-3 py-1 border-2 rounded-full text-xs font-bold mb-4 inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-exp-badge-bg, #EAF4FB)',
                borderColor: 'var(--pss-home-exp-badge-border, #B8C6DB)',
                color: 'var(--pss-home-exp-badge-text, #2C3E50)'
              }"
            >{{ t('public.home.experience.badge') }}</div>
            <h2 
              class="text-3xl font-black" 
              style="font-family: 'Space Grotesk', sans-serif;"
              :style="{ color: 'var(--pss-home-exp-header-text, #1A202C)' }"
            >{{ t('public.common.experience') }}</h2>
          </div>

          <div v-if="loading" class="flex justify-center py-12">
            <div class="neo-spinner"></div>
          </div>

          <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="exp in featuredExperiences" 
              :key="exp.id" 
              class="p-6 border-[3px] rounded-xl"
              :style="{
                backgroundColor: 'var(--pss-home-exp-card-bg, #FFFFFF)',
                borderColor: 'var(--pss-home-exp-card-border, #B8C6DB)',
                boxShadow: '6px 6px 0px 0px var(--pss-home-exp-card-shadow, #B8C6DB)'
              }"
            >
              <h3 class="font-black mb-2" :style="{ color: 'var(--pss-home-exp-card-header-text, #1A202C)' }">{{ exp.position }}</h3>
              <p class="text-sm font-bold mb-3" :style="{ color: 'var(--pss-home-exp-card-content-text, #4A5568)' }">{{ exp.company }}</p>
              <p class="text-sm line-clamp-3" :style="{ color: 'var(--pss-home-exp-card-content-text, #4A5568)' }">{{ exp.description }}</p>
            </div>
          </div>

          <div class="text-center mt-10">
            <NuxtLink 
              to="/experience" 
              class="font-black px-5 py-2.5 border-[3px] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-exp-btn-bg, #EAF4FB)',
                color: 'var(--pss-home-exp-btn-text, #2C3E50)',
                borderColor: 'var(--pss-home-exp-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-home-exp-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.home.experience.viewAll') }}
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- Tools Preview -->
      <section 
        v-else-if="sectionKey === 'tools'" 
        class="py-20 border-t-[3px]" 
        :style="{ 
          backgroundColor: 'var(--pss-tools-section-bg, #FFFFFF)',
          borderColor: 'var(--pss-section-divider-color, #B8C6DB)'
        }"
      >
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-12">
            <div 
              class="px-3 py-1 border-2 rounded-full text-xs font-bold mb-4 inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-tools-badge-bg, #EAF4FB)',
                borderColor: 'var(--pss-home-tools-badge-border, #B8C6DB)',
                color: 'var(--pss-home-tools-badge-text, #2C3E50)'
              }"
            >{{ t('public.home.tools.badge') }}</div>
            <h2 
              class="text-3xl font-black" 
              style="font-family: 'Space Grotesk', sans-serif;"
              :style="{ color: 'var(--pss-home-tools-header-text, #1A202C)' }"
            >{{ t('public.home.tools.title') }}</h2>
          </div>

          <div v-if="loading" class="flex justify-center py-12">
            <div class="neo-spinner"></div>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="group in toolPreviewCategories" 
              :key="group.category" 
              class="p-6 border-[3px] rounded-xl"
              :style="{
                backgroundColor: 'var(--pss-home-tools-card-bg, #FFFFFF)',
                borderColor: 'var(--pss-home-tools-card-border, #B8C6DB)',
                boxShadow: '6px 6px 0px 0px var(--pss-home-tools-card-shadow, #B8C6DB)'
              }"
            >
              <h3 class="text-lg font-black" :style="{ color: 'var(--pss-home-tools-card-header-text, #1A202C)' }">{{ group.category }}</h3>
              <div class="mt-4 flex flex-wrap gap-2">
                <span 
                  v-for="tool in group.tools" 
                  :key="tool.id" 
                  class="px-3 py-1 border-2 rounded-full text-xs font-bold"
                  :style="{
                    backgroundColor: 'var(--pss-home-tools-tool-badge-bg, #EAF4FB)',
                    borderColor: 'var(--pss-home-tools-tool-badge-border, #B8C6DB)',
                    color: 'var(--pss-home-tools-tool-badge-text, #2C3E50)'
                  }"
                >
                  {{ tool.name }}
                </span>
              </div>
            </div>
          </div>

          <div class="text-center mt-10">
            <NuxtLink 
              to="/tools" 
              class="font-black px-5 py-2.5 border-[3px] rounded-lg hover:translate-x-1 hover:translate-y-1 transition-transform inline-block"
              :style="{
                backgroundColor: 'var(--pss-home-tools-btn-bg, #EAF4FB)',
                color: 'var(--pss-home-tools-btn-text, #2C3E50)',
                borderColor: 'var(--pss-home-tools-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-home-tools-btn-shadow, #B8C6DB)'
              }"
            >
              {{ t('public.home.tools.viewAll') }}
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section 
        v-else-if="sectionKey === 'contact'" 
        class="py-20 border-t-[3px]" 
        :style="{ 
          backgroundColor: 'var(--pss-cta-section-bg, #FFFFFF)',
          borderColor: 'var(--pss-section-divider-color, #B8C6DB)'
        }"
      >
        <div class="max-w-4xl mx-auto px-6 text-center">
          <h2 
            class="text-3xl sm:text-4xl font-black mb-4" 
            style="font-family: 'Space Grotesk', sans-serif;"
            :style="{ color: 'var(--pss-home-cta-header-text, #1A202C)' }"
          >{{ t('public.home.cta.title') }}</h2>
          <p 
            class="mb-8 max-w-xl mx-auto"
            :style="{ color: 'var(--pss-home-cta-content-text, #4A5568)' }"
          >
            {{ t('public.home.cta.description') }}
          </p>
          <NuxtLink
            to="/contact"
            class="inline-block px-8 py-3 rounded-xl font-black text-lg border-[3px] hover:translate-x-1 hover:translate-y-1 transition-transform"
            :style="{
              backgroundColor: 'var(--pss-home-cta-btn-bg, #6FA8DC)',
              color: 'var(--pss-home-cta-btn-text, #FFFFFF)',
              borderColor: 'var(--pss-home-cta-btn-border, #B8C6DB)',
              boxShadow: '4px 4px 0px 0px var(--pss-home-cta-btn-shadow, #B8C6DB)'
            }"
          >
            {{ t('public.home.cta.button') }}
          </NuxtLink>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useLayoutStore } from '~/stores/layout';
import { usePublicSiteSettingsStore } from '~/stores/publicSiteSettings';

const { apiFetch } = useApiClient();
const { t } = useT();

const layoutStore = useLayoutStore();
const pssStore = usePublicSiteSettingsStore();

const loading = ref(true);
const about = ref<any>(null);
const featuredProjects = ref<any[]>([]);
const featuredExperiences = ref<any[]>([]);
const featuredCertifications = ref<any[]>([]);
const toolPreviewCategories = ref<Array<{ category: string; tools: any[] }>>([]);
const certificationsTotal = ref(0);
const toolsTotal = ref(0);

const certificationsCount = computed(() => certificationsTotal.value);
const toolsCount = computed(() => toolsTotal.value);

const renderOrder = computed(() => {
  const valid: Array<'hero' | 'about' | 'projects' | 'certifications' | 'experience' | 'tools' | 'contact'> = ['hero', 'about', 'projects', 'certifications', 'experience', 'tools', 'contact'];
  const order = (layoutStore.layout.sectionsOrder || []).filter((k) => valid.includes(k));
  return Array.from(new Set(order));
});

const heroLayoutClass = computed(() => {
  const layout = layoutStore.layout.heroLayout;
  if (layout === 'centered') return 'max-w-3xl mx-auto text-center';
  return 'grid md:grid-cols-2';
});

const heroImageAlignClass = computed(() => {
  const pos = layoutStore.layout.heroImagePosition;
  if (pos === 'left') return 'md:justify-start';
  if (pos === 'right') return 'md:justify-end';
  return 'md:justify-center';
});

const heroPhotoSizeClass = computed(() => pssStore.homeHeroCardWidthClass);

const gpaNumber = computed<number | null>(() => {
  const raw = about.value?.gpa;
  if (raw === null || raw === undefined || raw === '') return null;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : null;
});

const stats = computed(() => ({
  projects: featuredProjects.value.length || 5,
  experience: featuredExperiences.value.length || 3,
  certifications: certificationsCount.value || 2,
  tools: toolsCount.value || 10,
}));

const load = async () => {
  loading.value = true;
  try {
    const [aboutData, projectsData, experiencesData, certificationsData, toolsGroupedData] = await Promise.all([
      apiFetch('/about').catch(() => null),
      apiFetch('/projects/published').catch(() => []),
      apiFetch('/experiences').catch(() => []),
      apiFetch('/certifications').catch(() => []),
      apiFetch('/tools/grouped').catch(() => ({})),
    ]);
    about.value = aboutData;
    featuredProjects.value = (projectsData as any[]).slice(0, 3);
    featuredExperiences.value = (experiencesData as any[]).slice(0, 3);

    const certList = (certificationsData as any[]) || [];
    certificationsTotal.value = certList.length;
    featuredCertifications.value = certList.slice(0, 3);

    const grouped = (toolsGroupedData || {}) as Record<string, any[]>;
    toolsTotal.value = Object.values(grouped).reduce(
      (sum, list) => sum + (Array.isArray(list) ? list.length : 0),
      0,
    );
    const entries = Object.entries(grouped)
      .sort(([a], [b]) => a.localeCompare(b))
      .slice(0, 3)
      .map(([category, tools]) => ({
        category,
        tools: (tools || []).slice(0, 6),
      }));
    toolPreviewCategories.value = entries;
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    loading.value = false;
  }
};

onMounted(load);

useHead(() => ({
  title: t('public.home.headTitle'),
  meta: [{ name: 'description', content: t('public.home.headDesc') }],
}));
</script>
