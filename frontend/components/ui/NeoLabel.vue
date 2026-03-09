<template>
  <label :for="htmlFor" class="text-sm font-bold theme-text-primary">
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  htmlFor?: string
}>()
</script>
