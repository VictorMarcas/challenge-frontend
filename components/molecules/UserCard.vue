<script setup>
import { onMounted } from 'vue'
import SocialButton from '@/components/atoms/SocialButton.vue'
import { useUsers } from '@/composables/useUsers'

const { detailUser, user } = useUsers()

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

onMounted(() => {
  detailUser(props.id)
})
</script>

<template>
  <article class="flex flex-col -space-y-10">
    <img
      loading="lazy"
      :src="user.avatar"
      class="relative object-cover object-center w-24 mx-auto border-4 border-white rounded-full aspect-square z-2"
      aria-label="profile photo"
      :alt="user.name"
    />
    <div
      class="relative px-8 pt-10 pb-6 space-y-8 text-center bg-white border border-gray-100 rounded-lg z-1"
    >
      <header>
        <h3 class="text-lg font-bold text-primary-700">{{ user.name }}</h3>
        <span
          class="inline-block px-2 py-0.5 bg-primary-700/10 rounded text-xs font-semibold text-primary-700/60"
          aria-label="job"
          >{{ user.profession }}</span
        >
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
      </header>
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-left text-primary-700/80">
          Testimony
        </h4>
        <p class="text-sm leading-relaxed text-left text-gray-500">
          {{ user.testimony }}
        </p>
      </div>
    </div>
  </article>
</template>
