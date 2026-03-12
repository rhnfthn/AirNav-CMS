<template>
  <div class="theme-bg-main py-16">
    <div class="max-w-6xl mx-auto px-6">
      <div class="neo-card p-8 text-center">
        <h1 class="text-2xl font-black tracking-wide uppercase theme-text-primary">{{ t('public.blog.title') }}</h1>
        <p class="mt-2 theme-text-secondary font-bold">{{ t('public.blog.comingSoon') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useT();

useSeoMeta({
  title: () => t('public.blog.headTitle'),
  description: () => t('public.blog.headDesc'),
});
</script>
