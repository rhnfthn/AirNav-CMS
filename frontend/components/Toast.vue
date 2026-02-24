<template>
  <Teleport to="body">
    <Transition name="slide">
      <div
        v-if="toast.show"
        class="fixed top-4 right-4 z-[100] max-w-sm animate-slide-down"
      >
        <div
          :class="[
            'flex items-start gap-3 rounded-xl px-4 py-3 shadow-lg border',
            toast.type === 'success' && 'bg-green-50 border-green-200 text-green-800',
            toast.type === 'error' && 'bg-red-50 border-red-200 text-red-800',
            toast.type === 'info' && 'bg-blue-50 border-blue-200 text-blue-800',
          ]"
        >
          <!-- Icon -->
          <div class="flex-shrink-0 mt-0.5">
            <svg v-if="toast.type === 'success'" class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-else-if="toast.type === 'error'" class="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <svg v-else class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          
          <!-- Message -->
          <p class="flex-1 text-sm font-medium">{{ toast.message }}</p>
          
          <!-- Close button -->
          <button
            @click="toast.hide()"
            class="flex-shrink-0 -mt-0.5 -mr-1 p-1 rounded-lg opacity-70 hover:opacity-100 transition-opacity"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/toast';

const toast = useToastStore();
</script>

<style scoped>
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
