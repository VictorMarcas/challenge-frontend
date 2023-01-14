<script setup>
import { computed } from 'vue'
import { cva } from 'class-variance-authority'
const stylesSkeleton = cva(
  [
    'inline-block',
    'bg-gray-200',
    'relative',
    'overflow-hidden',
    'after:content-[""]',
    'after:bg-gradient-to-r',
    'after:-translate-x-full',
    'after:from-transparent',
    ' after:via-gray-50/50',
    'after:to-transparent',
    'after:h-full',
    'after:absolute',
    'after:inset-0',
    'after:animate-shimmer',
    'after:ease-in-out',
  ],
  {
    variants: {
      size: {
        small: 'h-3',
        medium: 'h-5',
        large: 'h-8',
      },
      rounded: {
        full: ['rounded-full'],
        small: ['rounded'],
        medium: ['rounded-lg'],
      },
    },
    defaultVariants: {
      rounded: 'full',
      size: 'small',
    },
  }
)
const props = defineProps({
  size: {
    type: String,
    default: 'small',
  },
  rounded: {
    type: String,
    default: 'full',
  },
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  maxWidth: {
    type: Number,
    default: 100,
  },
  minWidth: {
    type: Number,
    default: 50,
  },
})

const dinamicWidth = computed(
  () =>
    props.width ||
    `${
      Math.floor(Math.random() * (props.maxWidth - props.minWidth)) +
      props.minWidth
    }%`
)
</script>

<template>
  <span
    :style="{ width: width || dinamicWidth }"
    :class="[
      width,
      height,
      stylesSkeleton({
        size: height || size,
        rounded,
      }),
    ]"
  ></span>
</template>
