<template>
  <slot />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();
const { cssText, theme } = storeToRefs(themeStore);

useHead(() => ({
  style: [
    {
      id: 'theme-vars',
      children: cssText.value,
    },
  ],
  meta: [
    {
      name: 'theme-color',
      content: theme.value.headerBackgroundColor || theme.value.primaryBackgroundColor,
    },
  ],
}));

onMounted(() => {
  themeStore.applyToDom();
});
</script>
