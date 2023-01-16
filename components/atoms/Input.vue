<script setup>
import { onMounted, ref } from 'vue'
import { cva } from 'class-variance-authority'

const stylesInput = cva(
  'w-full px-4 py-2 text-sm text-gray-800 rounded-lg focus:outline-none border border-gray-300 focus:border-gray-400',
  {
    variants: {
      disabled: 'disabled:border-gray-200 disabled:bg-gray-100',
      readonly:
        'bg-transparent border-none border-transparent focus:border-transparent',
    },
  }
)

const input = ref(null)
defineProps({
  modelValue: {
    type: String,
    required: true,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
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
    :class="stylesInput({ disabled, readonly })"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>
