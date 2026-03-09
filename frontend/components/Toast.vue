<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[100] max-w-sm space-y-3">
      <TransitionGroup name="slide">
        <div
          v-for="t in toastStore.toasts"
          :key="t.id"
          class="toast-item flex items-start gap-3 px-4 py-3 border-[3px] theme-border rounded-lg font-bold text-sm"
          :style="toastStyle(t.type)"
        >
          <div class="flex-shrink-0 mt-0.5">
            <svg v-if="t.type === 'success'" class="w-5 h-5" :style="toastIconStyle(t.type)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-else-if="t.type === 'error'" class="w-5 h-5" :style="toastIconStyle(t.type)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-else-if="t.type === 'warning'" class="w-5 h-5" :style="toastIconStyle(t.type)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
            </svg>
            <svg v-else class="w-5 h-5" :style="toastIconStyle(t.type)" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <p class="flex-1 text-sm font-bold theme-text-primary">{{ t.message }}</p>

          <button
            @click="toastStore.remove(t.id)"
            class="toast-dismiss flex-shrink-0 -mt-0.5 -mr-1 p-1 rounded-lg transition-colors"
            aria-label="Dismiss"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

const toastStore = useToastStore();

const toastStyle = (type: string) => {
  const colors: Record<string, string> = {
    success: 'color-mix(in srgb, var(--bg-main) 84%, var(--color-button) 16%)',
    info: 'color-mix(in srgb, var(--bg-main) 90%, var(--color-button) 10%)',
    warning: 'color-mix(in srgb, var(--bg-main) 78%, var(--color-button) 22%)',
    error: 'color-mix(in srgb, var(--bg-main) 74%, var(--color-border) 26%)',
  };
  return {
    backgroundColor: colors[type] || 'var(--bg-main)',
    boxShadow: '4px 4px 0px 0px var(--color-shadow)',
  };
};

const toastIconStyle = (type: string) => {
  const colors: Record<string, string> = {
    success: 'var(--color-button)',
    info: 'var(--color-button)',
    warning: 'var(--color-border)',
    error: 'var(--bg-header)',
  };
  return {
    color: colors[type] || 'var(--color-text-primary)',
  };
};
</script>

<style scoped>
.toast-dismiss {
  color: var(--color-text-primary);
}

.toast-dismiss:hover {
  background-color: color-mix(in srgb, var(--color-text-primary) 10%, transparent 90%);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
