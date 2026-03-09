<template>
  <div class="flex gap-3 items-end">
    <div class="flex-1 min-w-0">
      <label class="neo-label">{{ label }}</label>
      <input
        class="neo-input"
        :value="modelValue"
        placeholder="RRGGBB"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>

    <input
      type="color"
      class="h-12 w-12 rounded-lg border-[3px] cursor-pointer"
      :style="{ borderColor: 'var(--color-border)' }"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  modelValue: string;
}>();

defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>
