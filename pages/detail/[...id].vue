<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onBeforeUnmount } from 'vue'
import SocialButton from '@/components/atoms/SocialButton.vue'
import Icon from '@/components/atoms/Icon.vue'
import { useUsers } from '@/composables/useUsers'
const route = useRoute()
const { user, detailUser } = useUsers()

onMounted(async () => {
  await detailUser(route.params.id)
})

onBeforeUnmount(() => {
  user.value = {}
})
</script>

<template>
  <section class="py-12">
    <div class="container">
      <div class="w-full max-w-screen-md mx-auto">
        <header>
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
          >
            <Icon name="interface/arrow-left" class="w-5 h-5" /> Regresar a
            listado</NuxtLink
          >
          <div
            aria-label="hero"
            class="h-40 mt-1 overflow-hidden bg-gray-100 rounded-t-lg"
          >
            <img
              src="https://source.unsplash.com/random/800×300?travel"
              class="object-cover object-center w-full h-full"
              alt="hero"
            />
          </div>
          <div
            class="flex flex-col items-center justify-between gap-6 p-6 md:flex-row"
          >
            <div
              class="flex flex-col items-center justify-center gap-6 text-center md:text-left md:justify-start md:flex-row"
            >
              <img
                loading="lazy"
                :src="user.avatar"
                class="relative object-cover object-center w-32 mx-auto -mt-12 border-4 border-white rounded-full md:mx-0 aspect-square z-2"
                aria-label="profile photo"
                :alt="user.name"
              />
              <div>
                <h1 class="text-lg font-bold text-gray-900">
                  {{ user.name }} {{ user.last_name }}
                </h1>
                <span
                  class="inline-block px-2 py-0.5 bg-primary-700/10 rounded text-xs font-semibold text-primary-700/60"
                  aria-label="job"
                  >{{ user.profession }}</span
                >
              </div>
            </div>
            <div
              arial-label="social network"
              class="flex items-center justify-center gap-3 py-3"
            >
              <SocialButton
                v-if="user.linkedin"
                :href="user.linkedin"
                class="w-6 h-6"
                name="social/linkedin"
                title="Linkedin"
              />
              <SocialButton
                v-if="user.github"
                :href="user.github"
                class="w-6 h-6"
                name="social/github"
                title="Github"
              />
              <SocialButton
                v-if="user.twitter"
                :href="user.twitter"
                class="w-6 h-6"
                name="social/twitter"
                title="Twitter"
              />
            </div>
          </div>
        </header>
        <section>
          <div class="space-y-3">
            <h4 class="text-sm font-bold text-left text-primary-700/80">
              Testimony
            </h4>
            <p class="text-sm leading-relaxed text-left text-gray-500">
              {{ user.testimony }}
            </p>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>
