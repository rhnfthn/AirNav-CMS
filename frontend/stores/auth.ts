import { defineStore } from 'pinia';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    token: null,
    user: null,
    isAuthenticated: false,
  }),

  actions: {
    setAuth(token: string, user: User) {
      this.token = token;
      this.user = user;
      this.isAuthenticated = true;

      // Persist to localStorage (client-side only)
      if (import.meta.client) {
        localStorage.setItem('auth_token', token);
        localStorage.setItem('auth_user', JSON.stringify(user));
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      this.isAuthenticated = false;

      if (import.meta.client) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
      }
    },

    initAuth() {
      if (import.meta.client) {
        const token = localStorage.getItem('auth_token');
        const userStr = localStorage.getItem('auth_user');

        if (token && userStr) {
          try {
            const user = JSON.parse(userStr);
            this.token = token;
            this.user = user;
            this.isAuthenticated = true;
          } catch {
            this.logout();
          }
        }
      }
    },
  },
});
