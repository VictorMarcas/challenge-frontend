<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nuxt-icon
    :name="name"
    filled
    class="inline-flex items-center justify-center [&>svg]:!w-full [&>svg]:!h-full [&>svg]:!m-0"
  />
</template>
