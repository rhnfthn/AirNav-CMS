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

const AUTH_LAST_ACTIVE_KEY = 'auth_last_active_at';
// Auto-logout if the app hasn't been opened/used for this long.
// Adjust as needed.
const AUTH_IDLE_TIMEOUT_MS = 24 * 60 * 60 * 1000; // 24h

const decodeJwtPayload = (token: string): Record<string, any> | null => {
  const parts = token.split('.');
  if (parts.length < 2) return null;
  const base64Url = parts[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  // Pad base64 if needed
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
  try {
    const json = atob(padded);
    return JSON.parse(json);
  } catch {
    return null;
  }
};

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
        localStorage.setItem(AUTH_LAST_ACTIVE_KEY, String(Date.now()));
      }
    },

    touch() {
      if (!import.meta.client) return;
      try {
        localStorage.setItem(AUTH_LAST_ACTIVE_KEY, String(Date.now()));
      } catch {
        // ignore storage errors
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      this.isAuthenticated = false;

      if (import.meta.client) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_user');
        localStorage.removeItem(AUTH_LAST_ACTIVE_KEY);
      }
    },

    initAuth() {
      if (import.meta.client) {
        const token = localStorage.getItem('auth_token');
        const userStr = localStorage.getItem('auth_user');

        // Idle-timeout check
        const lastActiveRaw = localStorage.getItem(AUTH_LAST_ACTIVE_KEY);
        if (lastActiveRaw) {
          const lastActive = Number(lastActiveRaw);
          if (!Number.isNaN(lastActive) && Date.now() - lastActive > AUTH_IDLE_TIMEOUT_MS) {
            this.logout();
            return;
          }
        }

        // Token expiry check (JWT exp)
        if (token) {
          const payload = decodeJwtPayload(token);
          const exp = payload?.exp;
          if (typeof exp === 'number') {
            const nowSec = Math.floor(Date.now() / 1000);
            if (nowSec >= exp) {
              this.logout();
              return;
            }
          }
        }

        if (token && userStr) {
          try {
            const user = JSON.parse(userStr);
            this.token = token;
            this.user = user;
            this.isAuthenticated = true;
            this.touch();
          } catch {
            this.logout();
          }
        }
      }
    },
  },
});
