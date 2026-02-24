import { useAuthStore } from '~/stores/auth';

type FetchOptions = Parameters<typeof $fetch>[1];

export const useApiClient = () => {
  const config = useRuntimeConfig();

  const apiFetch = <T>(path: string, options: FetchOptions = {}) => {
    const authStore = useAuthStore();

    const headers = new Headers(options.headers as HeadersInit | undefined);
    if (authStore.token) {
      headers.set('Authorization', `Bearer ${authStore.token}`);
    }

    return $fetch<T>(path, {
      baseURL: config.public.apiBase as string,
      ...options,
      headers,
    });
  };

  return { apiFetch };
};
