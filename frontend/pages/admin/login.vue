<template>
  <div class="container-page py-12">
    <div class="mx-auto max-w-md">
      <div class="card p-6">
        <h1 class="text-xl font-semibold tracking-tight">Admin Login</h1>
        <p class="mt-1 text-sm text-gray-600">Masuk untuk mengelola konten.</p>

        <form class="mt-5 space-y-4" @submit.prevent="onLogin">
          <div>
            <label class="label">Email</label>
            <input v-model="email" type="email" class="input" placeholder="admin@mail.com" />
          </div>
          <div>
            <label class="label">Password</label>
            <input v-model="password" type="password" class="input" placeholder="••••••••" />
          </div>

          <button class="btn-primary w-full" type="submit" :disabled="pending">
            {{ pending ? 'Loading...' : 'Login' }}
          </button>

          <p v-if="error" class="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
            {{ error }}
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'admin-auth' });

useSeoMeta({
  title: 'Admin Login',
  description: 'Login admin CMS portfolio',
});

const { login } = useAuth();
const email = ref('');
const password = ref('');
const pending = ref(false);
const error = ref('');

const onLogin = async () => {
  pending.value = true;
  error.value = '';
  try {
    await login(email.value, password.value);
    await navigateTo('/admin/dashboard');
  } catch (e: any) {
    error.value = e?.data?.message ?? e?.message ?? 'Login gagal';
  } finally {
    pending.value = false;
  }
};
</script>
