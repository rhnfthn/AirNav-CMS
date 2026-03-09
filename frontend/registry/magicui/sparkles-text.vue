<template>
  <span v-bind="attrs" class="sparkles-text" :style="styleVars">
    <span class="sparkles-content"><slot /></span>
    <span aria-hidden="true" class="sparkles-layer sparkles-layer-1" />
    <span aria-hidden="true" class="sparkles-layer sparkles-layer-2" />
  </span>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });

type Props = {
  sparkleColor?: string;
};

const props = defineProps<Props>();

const attrs = useAttrs();

const styleVars = computed<Record<string, string>>(() => {
  // Default uses existing theme primitive; callers can override.
  return {
    '--sparkle-color': props.sparkleColor ?? 'var(--color-highlight)',
  };
});
</script>

<style scoped>
.sparkles-text {
  position: relative;
  display: inline-block;
}

.sparkles-content {
  position: relative;
  z-index: 1;
  display: inline-block;
  background-image: linear-gradient(
    90deg,
    var(--color-text-primary),
    var(--sparkle-color),
    var(--color-text-primary)
  );
  background-size: 220% 100%;
  background-position: 0% 50%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: sparkle-shimmer 1.8s ease-in-out infinite;
}

.sparkles-layer {
  pointer-events: none;
  position: absolute;
  inset: -0.35em;
  opacity: 0;
  transform: scale(0.98);
  animation: sparkle-pulse 1.9s ease-in-out infinite;
  mix-blend-mode: multiply;
}

.sparkles-layer::before {
  content: '';
  position: absolute;
  inset: 0;
  /* Two dot patterns; keep color from theme variable */
  background-image:
    radial-gradient(circle, var(--sparkle-color) 0 1px, transparent 1.5px),
    radial-gradient(circle, var(--sparkle-color) 0 1px, transparent 1.5px);
  background-size: 14px 14px, 18px 18px;
  background-position: 0 0, 7px 9px;
  filter: blur(0.15px);
  animation: sparkle-drift 2.6s linear infinite;
}

.sparkles-layer-2 {
  animation-delay: 0.95s;
}

@keyframes sparkle-pulse {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.98);
  }
  45% {
    opacity: 0.8;
    transform: scale(1);
  }
  55% {
    opacity: 0.35;
    transform: scale(1.01);
  }
}

@keyframes sparkle-drift {
  0% {
    background-position: 0 0, 7px 9px;
  }
  100% {
    background-position: 20px 24px, 27px 33px;
  }
}

@keyframes sparkle-shimmer {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
