import { defineNuxtConfig } from 'nuxt/config'
import { tailwindConfig } from './config/tailwindcss'
import { googleFontsConfig } from './config/google-fonts'
import { head } from './config/head'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head,
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxt/image-edge',
    '@pinia/nuxt',
  ],
  tailwindcss: tailwindConfig,
  googleFonts: googleFontsConfig,
  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://api-challenge-talently.vercel.app/api',
    },
  },
})
