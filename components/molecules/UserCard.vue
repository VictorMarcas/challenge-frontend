<script setup>
import SocialButton from '@/components/atoms/SocialButton.vue'
</script>

<template>
  <article class="flex flex-col -space-y-10">
    <img
      loading="lazy"
      src="https://static-talently.s3.amazonaws.com/1606680003693_9c9e44a1a8.jfif"
      class="relative object-cover object-center w-24 mx-auto border-4 border-white rounded-full aspect-square z-2"
      aria-label="profile photo"
    />
    <div
      class="relative px-8 pt-10 pb-6 space-y-8 text-center bg-white border border-gray-100 rounded-lg z-1"
    >
      <header>
        <h3 class="text-lg font-bold text-primary-700">Lucas Amilivia</h3>
        <span
          class="inline-block px-2 py-0.5 bg-primary-700/10 rounded text-xs font-semibold text-primary-700/60"
          aria-label="job"
          >Ingeniero de Software</span
        >
        <div
          arial-label="social network"
          class="flex items-center justify-center gap-3 py-3"
        >
          <SocialButton href="" name="social/linkedin" title="Linkedin" />
          <SocialButton href="" name="social/github" title="Github" />
          <SocialButton href="" name="social/twitter" title="Twitter" />
        </div>
      </header>
      <div class="space-y-3">
        <h4 class="text-sm font-bold text-left text-primary-700/80">
          Testimony
        </h4>
        <p class="text-sm leading-relaxed text-left text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          architecto minus similique? A deserunt ipsum voluptas est totam quod
          itaque modi architecto vel! Tenetur corrupti commodi dolorem ipsum
          consectetur. Nobis.
        </p>
      </div>
    </div>
  </article>
</template>
