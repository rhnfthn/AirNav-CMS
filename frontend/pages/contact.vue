<template>
  <div class="section">
    <div class="container-page">
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <p class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Get in Touch</p>
          <h1 class="section-title">Contact Me</h1>
          <p class="section-subtitle mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <!-- Contact Form -->
        <div class="card p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label for="name" class="label">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="input"
                placeholder="Your name"
                :disabled="submitting"
              />
            </div>

            <div>
              <label for="email" class="label">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="input"
                placeholder="you@example.com"
                :disabled="submitting"
              />
            </div>

            <div>
              <label for="message" class="label">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="input resize-none"
                placeholder="Your message..."
                :disabled="submitting"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="btn-primary w-full"
            >
              <span v-if="submitting" class="flex items-center justify-center gap-2">
                <div class="spinner w-4 h-4 border-white border-t-transparent"></div>
                Sending...
              </span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>

        <!-- Alternative contact -->
        <div class="mt-12 text-center">
          <p class="text-sm text-gray-500 mb-4">Or reach out directly</p>
          <div class="flex justify-center gap-6">
            <a href="mailto:contact@example.com" class="link flex items-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Email
            </a>
            <a href="https://linkedin.com" target="_blank" class="link flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" class="link flex items-center gap-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

const { apiFetch } = useApiClient();
const toast = useToastStore();

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const submitting = ref(false);

const submitForm = async () => {
  submitting.value = true;
  
  try {
    await apiFetch('/contact', {
      method: 'POST',
      body: form,
    });
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    
    // Reset form
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error: any) {
    toast.error(error?.data?.message || 'Failed to send message. Please try again.');
  } finally {
    submitting.value = false;
  }
};

useHead({
  title: 'Contact | Portfolio',
  meta: [
    { name: 'description', content: 'Get in touch with me' },
  ],
});
</script>
