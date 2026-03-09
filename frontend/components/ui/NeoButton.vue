<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center gap-2 rounded-md border-2 px-6 py-2.5 text-base font-bold transition-all duration-150 cursor-pointer active:translate-x-[3px] active:translate-y-[3px] active:shadow-none hover:opacity-95"
    :class="[
      variantClass,
      { 'opacity-50 cursor-not-allowed active:translate-x-0 active:translate-y-0': disabled }
    ]"
    :style="variantStyle"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'default' | 'neutral' | 'destructive'
  disabled?: boolean
}>(), {
  type: 'button',
  variant: 'default',
  disabled: false,
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'neutral':
      return ''
    case 'destructive':
      return ''
    default:
      return ''
  }
})

const variantStyle = computed(() => {
  const base: Record<string, string> = {
    borderColor: 'var(--color-border)',
    boxShadow: '4px 4px 0 0 var(--color-shadow)',
  };

  if (props.variant === 'destructive') {
    return {
      ...base,
      backgroundColor: 'var(--bg-footer)',
      color: 'var(--color-on-footer)',
    };
  }

  if (props.variant === 'neutral') {
    return {
      ...base,
      backgroundColor: 'var(--bg-main)',
      color: 'var(--color-text-primary)',
    };
  }

  return {
    ...base,
    backgroundColor: 'var(--color-button)',
    color: 'var(--color-on-button)',
  };
});
</script>
