<template>
  <button
    v-bind="attrs"
    :type="type"
    :disabled="disabled"
    class="ripple-btn"
    :style="styleVars"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

type Props = {
  rippleColor?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
});

const emit = defineEmits<{ (e: 'click', ev: MouseEvent): void }>();

const attrs = useAttrs();

const styleVars = computed<Record<string, string>>(() => ({
  '--ripple-color': props.rippleColor ?? 'var(--color-highlight)',
}));

const onClick = (ev: MouseEvent) => {
  if (props.disabled) return;

  const button = ev.currentTarget as HTMLButtonElement | null;
  if (!button) return;

  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = ev.clientX - rect.left - size / 2;
  const y = ev.clientY - rect.top - size / 2;

  const ripple = document.createElement('span');
  ripple.className = 'ripple-ink';
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  button.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 650);

  emit('click', ev);
};
</script>

<style>
.ripple-btn {
  position: relative;
  overflow: hidden;
  appearance: none;
  -webkit-appearance: none;
  font: inherit;
  color: inherit;
  line-height: inherit;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ripple-ink {
  pointer-events: none;
  position: absolute;
  border-radius: 9999px;
  background: var(--ripple-color);
  opacity: 0.35;
  transform: scale(0);
  animation: ripple 650ms ease-out;
}

@keyframes ripple {
  to {
    transform: scale(2.2);
    opacity: 0;
  }
}
</style>
