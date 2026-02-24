export const useAuth = () => {
  const token = useCookie<string | null>('token', {
    sameSite: 'lax',
  });

  const isAuthenticated = computed(() => Boolean(token.value));
  const { apiFetch } = useApiClient();

  const login = async (email: string, password: string) => {
    const res = await apiFetch<{ access_token: string }>('/auth/login', {
      method: 'POST',
      body: { email, password },
    });

    token.value = res.access_token;
  };

  const logout = async () => {
    token.value = null;
    await navigateTo('/admin/login');
  };

  return { token, isAuthenticated, login, logout };
};
