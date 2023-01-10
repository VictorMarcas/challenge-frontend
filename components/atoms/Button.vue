<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
const onClick = () => emit('click')
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="onClick"
    class="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 transform scale-105 bg-purple-500 rounded-md hover:bg-purple-500/90 disabled:bg-gray-300 disabled:opacity-90 disabled:cursor-default"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
}
</script>
