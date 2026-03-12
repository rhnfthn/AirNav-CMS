<template>
  <div class="py-16" :style="{ backgroundColor: 'var(--pss-contact-section-bg, #F4F9FD)' }">
    <div class="max-w-6xl mx-auto px-6">
      <div class="max-w-2xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-12">
          <div 
            class="mb-4 text-xs inline-block px-3 py-1 border-2 rounded-full font-bold"
            :style="{
              backgroundColor: 'var(--pss-contact-badge-bg, #EAF4FB)',
              borderColor: 'var(--pss-contact-badge-border, #B8C6DB)',
              color: 'var(--pss-contact-badge-text, #2C3E50)'
            }"
          >{{ t('public.contact.badgeText') }}</div>
          <h1
            class="text-3xl font-black"
            style="font-family: 'Space Grotesk', sans-serif; color: var(--pss-contact-header-text, #1A202C);"
          >
            {{ t('public.contact.title') }}
          </h1>
          <p class="mt-2 max-w-xl mx-auto" :style="{ color: 'var(--pss-contact-content-text, #4A5568)' }">
            {{ t('public.contact.description') }}
          </p>
        </div>

        <!-- Contact Form -->
        <div 
          class="p-8 border-[3px] rounded-xl"
          :style="{
            backgroundColor: 'var(--pss-contact-card-bg, #FFFFFF)',
            borderColor: 'var(--pss-contact-card-border, #B8C6DB)',
            boxShadow: '6px 6px 0px 0px var(--pss-contact-card-shadow, #B8C6DB)'
          }"
        >
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label 
                for="name" 
                class="block text-sm font-bold mb-2"
                :style="{ color: 'var(--pss-contact-label-color, #2C3E50)' }"
              >{{ t('public.contact.fieldName') }}</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border-[3px] rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-1"
                :style="{
                  backgroundColor: 'var(--pss-contact-input-bg, #FFFFFF)',
                  borderColor: 'var(--pss-contact-input-border, #B8C6DB)',
                  color: 'var(--pss-contact-input-text, #2C3E50)'
                }"
                :placeholder="t('public.contact.placeholderName')"
                :disabled="submitting"
              />
            </div>

            <div>
              <label 
                for="email" 
                class="block text-sm font-bold mb-2"
                :style="{ color: 'var(--pss-contact-label-color, #2C3E50)' }"
              >{{ t('public.contact.fieldEmail') }}</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border-[3px] rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-1"
                :style="{
                  backgroundColor: 'var(--pss-contact-input-bg, #FFFFFF)',
                  borderColor: 'var(--pss-contact-input-border, #B8C6DB)',
                  color: 'var(--pss-contact-input-text, #2C3E50)'
                }"
                :placeholder="t('public.contact.placeholderEmail')"
                :disabled="submitting"
              />
            </div>

            <div>
              <label 
                for="message" 
                class="block text-sm font-bold mb-2"
                :style="{ color: 'var(--pss-contact-label-color, #2C3E50)' }"
              >{{ t('public.contact.fieldMessage') }}</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="5"
                required
                class="w-full px-4 py-3 border-[3px] rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-1 resize-none"
                :style="{
                  backgroundColor: 'var(--pss-contact-input-bg, #FFFFFF)',
                  borderColor: 'var(--pss-contact-input-border, #B8C6DB)',
                  color: 'var(--pss-contact-input-text, #2C3E50)'
                }"
                :placeholder="t('public.contact.placeholderMessage')"
                :disabled="submitting"
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="submitting"
              class="w-full font-black text-lg px-6 py-3 border-[3px] rounded-lg transition-all hover:-translate-y-0.5"
              :style="{
                backgroundColor: 'var(--pss-contact-btn-bg, #FFD93D)',
                color: 'var(--pss-contact-btn-text, #2C3E50)',
                borderColor: 'var(--pss-contact-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-contact-btn-shadow, #B8C6DB)'
              }"
            >
              <span v-if="submitting" class="flex items-center justify-center gap-2">
                <div class="neo-spinner w-4 h-4" style="border-top-color: var(--color-on-button)"></div>
                {{ t('public.contact.submitting') }}
              </span>
              <span v-else>{{ t('public.contact.submitBtn') }}</span>
            </button>
          </form>
        </div>

        <!-- Alternative contact -->
        <div class="mt-12 text-center">
          <p class="text-sm font-bold mb-4 uppercase tracking-wide" :style="{ color: 'var(--pss-contact-direct-text, #4A5568)' }">{{ t('public.contact.directText') }}</p>
          <div class="flex justify-center gap-4 flex-wrap">
            <a 
              :href="WHATSAPP_LINK"
              target="_blank"
              rel="noopener noreferrer"
              class="font-bold inline-flex items-center gap-2 text-sm px-4 py-2 border-[3px] rounded-lg transition-all hover:-translate-y-0.5"
              :style="{
                backgroundColor: 'var(--pss-contact-social-btn-bg, #FFFFFF)',
                color: 'var(--pss-contact-social-btn-text, #2C3E50)',
                borderColor: 'var(--pss-contact-social-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-contact-social-btn-shadow, #B8C6DB)'
              }"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0012.06 0C5.48 0 .12 5.36.12 11.94c0 2.1.55 4.16 1.59 5.98L0 24l6.25-1.64a11.9 11.9 0 005.8 1.49h.01c6.58 0 11.94-5.36 11.94-11.94 0-3.19-1.24-6.18-3.48-8.43zm-8.46 18.35h-.01a9.92 9.92 0 01-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.9 9.9 0 01-1.52-5.29C2.16 6.46 6.59 2.03 12.06 2.03c2.65 0 5.14 1.03 7 2.9a9.83 9.83 0 012.9 7c0 5.47-4.44 9.9-9.9 9.9zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47a8.9 8.9 0 01-1.65-2.05c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.47 0 1.45 1.06 2.85 1.2 3.05.15.2 2.09 3.19 5.06 4.47.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35z"/>
              </svg>
              {{ t('public.contact.social.whatsapp') }}
            </a>
            <a 
              :href="MAILTO_LINK"
              @click="openEmail"
              class="font-bold inline-flex items-center gap-2 text-sm px-4 py-2 border-[3px] rounded-lg transition-all hover:-translate-y-0.5"
              :style="{
                backgroundColor: 'var(--pss-contact-social-btn-bg, #FFFFFF)',
                color: 'var(--pss-contact-social-btn-text, #2C3E50)',
                borderColor: 'var(--pss-contact-social-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-contact-social-btn-shadow, #B8C6DB)'
              }"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              {{ t('public.contact.social.email') }}
            </a>
            <a 
              href="https://linkedin.com/in/raihanfathan" 
              target="_blank" 
              rel="noopener noreferrer"
              class="font-bold inline-flex items-center gap-2 text-sm px-4 py-2 border-[3px] rounded-lg transition-all hover:-translate-y-0.5"
              :style="{
                backgroundColor: 'var(--pss-contact-social-btn-bg, #FFFFFF)',
                color: 'var(--pss-contact-social-btn-text, #2C3E50)',
                borderColor: 'var(--pss-contact-social-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-contact-social-btn-shadow, #B8C6DB)'
              }"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              {{ t('public.contact.social.linkedin') }}
            </a>
            <a 
              :href="INSTAGRAM_LINK"
              target="_blank"
              rel="noopener noreferrer"
              @click="openInstagram"
              class="font-bold inline-flex items-center gap-2 text-sm px-4 py-2 border-[3px] rounded-lg transition-all hover:-translate-y-0.5"
              :style="{
                backgroundColor: 'var(--pss-contact-social-btn-bg, #FFFFFF)',
                color: 'var(--pss-contact-social-btn-text, #2C3E50)',
                borderColor: 'var(--pss-contact-social-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-contact-social-btn-shadow, #B8C6DB)'
              }"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.75A4 4 0 003.75 7.75v8.5a4 4 0 004 4h8.5a4 4 0 004-4v-8.5a4 4 0 00-4-4h-8.5zm8.94 1.31a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.75A3.25 3.25 0 1015.25 12 3.25 3.25 0 0012 8.75z"/>
              </svg>
              {{ t('public.contact.social.instagram') }}
            </a>
            <a 
              href="https://github.com/rhnfthn" 
              target="_blank" 
              rel="noopener noreferrer"
              class="font-bold inline-flex items-center gap-2 text-sm px-4 py-2 border-[3px] rounded-lg transition-all hover:-translate-y-0.5"
              :style="{
                backgroundColor: 'var(--pss-contact-social-btn-bg, #FFFFFF)',
                color: 'var(--pss-contact-social-btn-text, #2C3E50)',
                borderColor: 'var(--pss-contact-social-btn-border, #B8C6DB)',
                boxShadow: '4px 4px 0px 0px var(--pss-contact-social-btn-shadow, #B8C6DB)'
              }"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              {{ t('public.contact.social.github') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';
import { useT } from '~/composables/useT';

const { apiFetch } = useApiClient();
const toast = useToastStore();
const { t } = useT();
const WHATSAPP_LINK = 'https://wa.me/6281328511954';
const MAILTO_LINK = 'mailto:raihanfathan11@gmail.com';
const INSTAGRAM_LINK = 'https://instagram.com/rhn_fthn';

const openEmail = (event: MouseEvent) => {
  event.preventDefault();
  window.location.href = MAILTO_LINK;
};

const openInstagram = (event: MouseEvent) => {
  event.preventDefault();
  window.open(INSTAGRAM_LINK, '_blank', 'noopener,noreferrer');
};

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

    toast.success(t('public.contact.successMsg'));
    
    // Reset form
    form.name = '';
    form.email = '';
    form.message = '';
  } catch (error: any) {
    toast.error(error?.data?.message || t('public.contact.errorMsg'));
  } finally {
    submitting.value = false;
  }
};

useHead(() => ({
  title: t('public.contact.headTitle'),
  meta: [{ name: 'description', content: t('public.contact.headDesc') }],
}));
</script>
