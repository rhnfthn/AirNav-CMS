<template>
  <div class="login-page">
    <div class="login-wrapper">
      <!-- Card -->
      <div class="login-card">
        <!-- Header -->
        <div class="login-card-header">
          <div class="login-logo">
            <img :src="LOGO_SRC" alt="Portfolio CMS" class="login-logo-image" />
          </div>
          <h3 class="login-card-title">
            <SparklesText>Welcome Back</SparklesText>
          </h3>
          <p class="login-card-desc">Sign in to your Portfolio CMS dashboard</p>
        </div>

        <!-- Content -->
        <div class="login-card-content">
          <form @submit.prevent="onLogin">
            <div class="login-fields">
              <!-- Email -->
              <div class="login-field">
                <label for="email" class="login-label">EMAIL</label>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="admin@portfolio.com"
                  class="login-input"
                  :disabled="pending"
                  required
                />
              </div>

              <!-- Password -->
              <div class="login-field">
                <div class="login-label-row">
                  <label for="password" class="login-label">PASSWORD</label>
                  <a href="#" class="login-forgot">Forgot?</a>
                </div>
                <input
                  id="password"
                  v-model="password"
                  type="password"
                  class="login-input"
                  :disabled="pending"
                  required
                />
              </div>

              <!-- Error -->
              <div v-if="error" class="login-error">{{ error }}</div>
            </div>

            <!-- Footer -->
            <div class="login-card-footer">
              <RippleButton
                type="submit"
                class="login-btn login-btn-primary"
                :disabled="pending"
                :rippleColor="LOGIN_RIPPLE_COLOR"
              >
                <span v-if="pending" class="login-btn-loading">
                  <svg class="login-spinner" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Signing in...
                </span>
                <span v-else>{{ loginButtonLabel }}</span>
              </RippleButton>
            </div>
          </form>
        </div>
      </div>

      <!-- Back link -->
      <p class="login-back">
        <NuxtLink to="/" class="login-back-link">{{ backToWebsiteText }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useToastStore } from '~/stores/toast';
import { useThemeStore } from '~/stores/theme';
import { SparklesText } from '@/registry/magicui/sparkles-text';
import { RippleButton } from '@/registry/magicui/ripple-button';

definePageMeta({ layout: false });

useSeoMeta({
  title: 'Admin Login',
  description: 'Login admin CMS portfolio',
});

const authStore = useAuthStore();
const toast = useToastStore();
const router = useRouter();
const { apiFetch } = useApiClient();
const themeStore = useThemeStore();

const LOGO_SRC = '/rhnblack.png';
const LOGIN_RIPPLE_COLOR = '#ADD8E6';

// Admin login settings are stored in the admin theme scope
await themeStore.fetchTheme('admin').catch(() => {
  // fallback to defaults
});

const loginButtonLabel = computed(() => themeStore.theme?.loginButtonLabel || 'Login');
const backToWebsiteText = computed(() => themeStore.theme?.loginBackToWebsiteText || '← Back to website');

const email = ref('');
const password = ref('');
const pending = ref(false);
const error = ref('');

// Check if already logged in
onMounted(() => {
  authStore.initAuth();
  if (authStore.isAuthenticated) {
    router.push('/admin/dashboard');
  }
});

const onLogin = async () => {
  pending.value = true;
  error.value = '';

  try {
    const response = await apiFetch<{ access_token: string; user: any }>('/auth/login', {
      method: 'POST',
      body: { email: email.value, password: password.value },
    });

    authStore.setAuth(response.access_token, response.user);
    toast.success('Login successful!');
    await router.push('/admin/dashboard');
  } catch (e: any) {
    error.value = e?.data?.message ?? e?.message ?? 'Login failed';
  } finally {
    pending.value = false;
  }
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-main);
  padding: 3rem 1rem;
  font-family: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  background-image:
    radial-gradient(circle, color-mix(in srgb, var(--color-border) 20%, transparent 80%) 1px, transparent 1px);
  background-size: 24px 24px;
}

.login-wrapper {
  width: 100%;
  max-width: 24rem;
}

.login-card {
  background: var(--login-card-bg);
  border: 3px solid var(--login-card-border);
  border-radius: 0.75rem;
  box-shadow: 8px 8px 0 0 var(--login-card-shadow);
}

.login-card-header {
  padding: 2rem 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.login-logo {
  width: 3rem;
  height: 3rem;
  background: var(--login-logo-bg);
  border: 3px solid var(--login-logo-border);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  box-shadow: 3px 3px 0 0 var(--login-logo-shadow);
}

.login-logo-letter {
  font-size: 1.25rem;
  font-weight: 900;
  color: var(--color-on-button);
}

.login-logo-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.login-card-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--login-header-text);
  margin: 0;
  text-align: center;
}

.login-card-desc {
  font-size: 0.875rem;
  color: var(--login-content-text);
  margin: 0;
  font-weight: 500;
  text-align: center;
  opacity: 0.9;
}

.login-card-content {
  padding: 1.5rem;
}

.login-fields {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.login-field {
  display: grid;
  gap: 0.5rem;
}

.login-label {
  font-size: 0.75rem;
  font-weight: 800;
  color: var(--login-label-text);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.login-label-row {
  display: flex;
  align-items: center;
}

.login-forgot {
  margin-left: auto;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-text-secondary);
  text-decoration: none;
}

.login-forgot:hover {
  text-decoration: underline;
}

.login-input {
  width: 100%;
  border: 3px solid var(--color-border);
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-text-primary);
  outline: none;
  transition: all 0.15s ease;
  box-sizing: border-box;
  box-shadow: 3px 3px 0 0 var(--color-shadow);
}

.login-input::placeholder {
  color: color-mix(in srgb, var(--color-text-secondary) 70%, transparent 30%);
  font-weight: 400;
  opacity: 0.65;
}

.login-input:focus {
  box-shadow: 5px 5px 0 0 var(--color-shadow);
  transform: translate(-1px, -1px);
}

.login-input:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.login-error {
  border: 3px solid var(--color-border);
  border-radius: 0.5rem;
  background: color-mix(in srgb, var(--bg-main) 85%, var(--color-button) 15%);
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text-primary);
  box-shadow: 3px 3px 0 0 var(--color-shadow);
}

.login-card-footer {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 1.5rem;
}

.login-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  border: 3px solid var(--login-button-border);
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: 4px 4px 0 0 var(--login-button-shadow);
}

.login-btn:hover:not(:disabled) {
  transform: translate(-1px, -1px);
  box-shadow: 5px 5px 0 0 var(--login-button-shadow);
}

.login-btn:active:not(:disabled) {
  transform: translate(3px, 3px);
  box-shadow: 0 0 0 0 var(--login-button-shadow);
}

.login-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.login-btn-primary {
  background: var(--login-button-bg);
  color: var(--login-button-on);
}

.login-btn-neutral {
  background: color-mix(in srgb, var(--bg-main) 92%, var(--color-button) 8%);
  color: var(--color-text-primary);
}

.login-btn-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.login-spinner {
  width: 1rem;
  height: 1rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.login-back {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--login-content-text);
}

.login-back-link {
  color: var(--login-content-text);
  text-decoration: none;
}

.login-back-link:hover {
  color: var(--login-content-text);
  text-decoration: underline;
}
</style>
