<script setup>
import Header from '@/components/sections/Header.vue'
import Footer from '@/components/sections/Footer.vue'
</script>
<template>
  <main class="flex flex-col h-screen min-h-screen">
    <Header />
    <div class="flex-1">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <Footer />
  </main>
</template>
