<script setup>
defineProps({
  isHidden: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <label
    class="flex items-center justify-between gap-2 mb-1 text-sm font-semibold text-gray-900"
    :class="{ 'sr-only': isHidden }"
  >
    <slot />
  </label>
</template>
