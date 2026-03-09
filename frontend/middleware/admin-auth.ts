import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  // Auth state is persisted in localStorage (client-only).
  // During SSR we can't read it, so don't hard-redirect on the server.
  // Use Nuxt runtime flags to avoid SSR redirects.
  // (Admin auth is localStorage-based, so it must be enforced client-side.)
  if (process.server) {
    return;
  }

  // Initialize auth from localStorage on client
  authStore.initAuth();

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
