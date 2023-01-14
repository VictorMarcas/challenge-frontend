<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="mt-1 text-xs text-gray-400" aria-label="helper">{{
    label
  }}</span>
</template>
