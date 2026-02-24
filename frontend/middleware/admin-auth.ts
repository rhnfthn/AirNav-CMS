import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();
  
  // Initialize auth from localStorage on client
  if (import.meta.client) {
    authStore.initAuth();
  }

  // Allow login page without token
  if (to.path === '/admin/login') {
    if (authStore.isAuthenticated) {
      return navigateTo('/admin/dashboard');
    }
    return;
  }

  // Protect every /admin route
  if (to.path.startsWith('/admin')) {
    if (!authStore.isAuthenticated) {
      return navigateTo('/admin/login');
    }
  }
});
