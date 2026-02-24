export default defineNuxtRouteMiddleware((to) => {
  const token = useCookie<string | null>('token').value;

  // Allow login page without token
  if (to.path === '/admin/login') {
    if (token) {
      return navigateTo('/admin/dashboard');
    }
    return;
  }

  // Protect every /admin route
  if (to.path.startsWith('/admin')) {
    if (!token) {
      return navigateTo('/admin/login');
    }
  }
});
