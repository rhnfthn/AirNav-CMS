<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
    <div class="max-w-md w-full">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-900">Admin Login</h1>
        <p class="mt-2 text-gray-600">Sign in to manage your portfolio</p>
      </div>

      <div class="card p-8">
        <form class="space-y-5" @submit.prevent="onLogin">
          <div>
            <label class="label">Email</label>
            <input 
              v-model="email" 
              type="email" 
              class="input" 
              placeholder="admin@portfolio.com"
              :disabled="pending"
              required
            />
          </div>
          <div>
            <label class="label">Password</label>
            <input 
              v-model="password" 
              type="password" 
              class="input" 
              placeholder="••••••••"
              :disabled="pending"
              required
            />
          </div>

          <button class="btn-primary w-full" type="submit" :disabled="pending">
            <span v-if="pending" class="flex items-center justify-center gap-2">
              <div class="spinner w-4 h-4 border-white border-t-transparent"></div>
              Signing in...
            </span>
            <span v-else>Sign In</span>
          </button>

          <p v-if="error" class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {{ error }}
          </p>
        </form>
      </div>

      <p class="mt-6 text-center text-sm text-gray-500">
        <NuxtLink to="/" class="link-underline">← Back to website</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth';
import { useToastStore } from '~/stores/toast';

definePageMeta({ layout: false });

useSeoMeta({
  title: 'Admin Login',
  description: 'Login admin CMS portfolio',
});

const authStore = useAuthStore();
const toast = useToastStore();
const router = useRouter();
const { apiFetch } = useApiClient();

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
