<script setup>
import Icon from '@/components/atoms/Icon.vue'
defineProps({
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a
    :href="href"
    class="inline-block transition-all duration-200 focus:outline-none hover:opacity-80"
    :title="title"
  >
    <Icon :name="name" class="w-full h-full" />
  </a>
</template>
