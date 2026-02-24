type FetchOptions = Parameters<typeof $fetch>[1];

export const useApiClient = () => {
  const config = useRuntimeConfig();
  const token = useCookie<string | null>('token');

  const apiFetch = <T>(path: string, options: FetchOptions = {}) => {
    const headers = new Headers(options.headers as HeadersInit | undefined);
    if (token.value) {
      headers.set('Authorization', `Bearer ${token.value}`);
    }

    return $fetch<T>(path, {
      baseURL: config.public.apiBase,
      ...options,
      headers,
    });
  };

  return { apiFetch };
};
