<script setup>
import { onMounted, ref } from 'vue'
const textarea = ref(null)
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})
onMounted(() => {
  if (textarea.value.hasAttribute('autofocus')) {
    textarea.value.focus()
  }
})
</script>

<template>
  <textarea
    class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg resize-y focus:outline-none focus:border-gray-400 disabled:border-gray-200 disabled:bg-gray-100"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="textarea"
  />
</template>
