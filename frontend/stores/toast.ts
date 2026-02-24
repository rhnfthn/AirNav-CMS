import { defineStore } from 'pinia';

interface ToastMessage {
  id: number;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

export const useToastStore = defineStore('toast', {
  state: () => ({
    toasts: [] as ToastMessage[],
    nextId: 1,
  }),

  actions: {
    show(type: ToastMessage['type'], message: string, duration = 4000) {
      const id = this.nextId++;
      this.toasts.push({ id, type, message });

      setTimeout(() => {
        this.remove(id);
      }, duration);
    },

    success(message: string) {
      this.show('success', message);
    },

    error(message: string) {
      this.show('error', message, 6000);
    },

    warning(message: string) {
      this.show('warning', message);
    },

    info(message: string) {
      this.show('info', message);
    },

    remove(id: number) {
      const index = this.toasts.findIndex((t) => t.id === id);
      if (index !== -1) {
        this.toasts.splice(index, 1);
      }
    },
  },
});
