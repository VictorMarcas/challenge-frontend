<script setup>
import { defineAsyncComponent } from 'vue'
import { buttonStyles } from '@/shared/button-styles.js'
defineProps({
  intent: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'minimal'].includes(value),
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value),
  },
  alignment: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value),
  },
})

const Icon = defineAsyncComponent(() => import('@/components/atoms/Icon.vue'))
</script>
<template>
  <button
    :disabled="disabled"
    :class="
      buttonStyles({
        intent,
        fullWidth,
        size,
        alignment,
        disabled,
        iconPosition,
      })
    "
  >
    <template v-if="icon">
      <Icon :name="icon" class="shrink-0" />
    </template>
    <slot />
  </button>
</template>
