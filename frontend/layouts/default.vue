<template>
  <div class="min-h-screen flex flex-col">
    <!-- Fixed Navbar -->
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-lg">
      <div class="container-page flex h-16 items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold tracking-tight text-gray-900">
          Portfolio
        </NuxtLink>
        
        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors link-underline"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-4">
          <NuxtLink to="/contact" class="btn-primary hidden sm:inline-flex">
            Contact Me
          </NuxtLink>
          
          <!-- Mobile menu button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            class="md:hidden p-2 text-gray-600 hover:text-gray-900"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white">
        <nav class="container-page py-4 flex flex-col gap-2">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.to" 
            :to="link.to" 
            class="py-2 text-gray-600 hover:text-gray-900"
            @click="mobileMenuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary mt-2 text-center" @click="mobileMenuOpen = false">
            Contact Me
          </NuxtLink>
        </nav>
      </div>
    </header>

    <!-- Main content with top padding for fixed navbar -->
    <main class="flex-1 pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-100 bg-gray-50">
      <div class="container-page py-12">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="font-semibold text-gray-900">Portfolio</p>
            <p class="text-sm text-gray-600 mt-1">Building modern web experiences</p>
          </div>
          <div class="flex items-center gap-6">
            <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-gray-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-gray-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
        <div class="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {{ year }} Portfolio. All rights reserved.
        </div>
      </div>
    </footer>

    <!-- Toast notifications -->
    <ToastContainer />
  </div>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
const mobileMenuOpen = ref(false);

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/certifications', label: 'Certifications' },
  { to: '/experience', label: 'Experience' },
  { to: '/tools', label: 'Tools' },
];

// Close mobile menu on route change
const route = useRoute();
watch(() => route.path, () => {
  mobileMenuOpen.value = false;
});
</script>
