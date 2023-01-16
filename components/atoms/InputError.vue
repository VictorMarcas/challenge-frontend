<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <span class="block text-sm text-red-500 leading-thign">{{ label }}</span>
</template>
