import { useAuthStore } from '~/stores/auth';

type FetchOptions = Parameters<typeof $fetch>[1];

export const useApiClient = () => {
  const config = useRuntimeConfig();

  const apiFetch = <T>(path: string, options: FetchOptions = {}) => {
    const authStore = useAuthStore();

    // Ensure auth state is up-to-date (handles idle timeout / expired token)
    authStore.initAuth();
    if (authStore.isAuthenticated) {
      authStore.touch();
    }

    const headers = new Headers(options.headers as HeadersInit | undefined);
    if (authStore.token) {
      headers.set('Authorization', `Bearer ${authStore.token}`);
    }

    return $fetch<T>(path, {
      baseURL: config.public.apiBase as string,
      ...options,
      headers,
      onResponseError(ctx) {
        // preserve caller handler if provided
        const status = ctx.response?.status;
        if (status === 401) {
          authStore.logout();
          if (import.meta.client) {
            // Avoid looping if already on login
            const route = useRoute();
            if (route.path !== '/admin/login') {
              navigateTo('/admin/login');
            }
          }
        }

        if (typeof options.onResponseError === 'function') {
          // @ts-expect-error - ofetch context types are compatible
          return options.onResponseError(ctx);
        }
      },
    });
  };

  return { apiFetch };
};
