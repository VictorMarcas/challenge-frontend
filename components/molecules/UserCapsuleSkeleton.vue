<script setup>
import Skeleton from '@/components/shared/Skeleton.vue'
</script>
<template>
  <article class="flex items-center w-full gap-6 p-3 rounded-md bg-gray-100/50">
    <div class="flex items-center flex-1 w-full gap-3">
      <Skeleton width="w-20" height="h-20" />
      <div aria-label="description" class="flex-1 w-full">
        <Skeleton size="medium" />
        <Skeleton />
        <div class="flex items-center gap-2 mt-3">
          <Skeleton width="w-5" height="h-5" />
          <Skeleton width="w-5" height="h-5" />
          <Skeleton width="w-5" height="h-5" />
        </div>
      </div>
    </div>
    <div
      aria-label="settings"
      class="relative shrink-0 flex items-center gap-0.5 pr-3"
    >
      <Skeleton width="w-6" height="h-6" />
      <Skeleton width="w-2" height="h-2" />
    </div>
  </article>
</template>
