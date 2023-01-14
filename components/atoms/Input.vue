<script setup>
import { onMounted, ref } from 'vue'
const input = ref(null)
defineProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
})
onMounted(() => {
  if (input.value.hasAttribute('autofocus')) {
    input.value.focus()
  }
})
</script>

<template>
  <input
    class="w-full px-4 py-2 text-sm text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 disabled:border-gray-200 disabled:bg-gray-100"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>
