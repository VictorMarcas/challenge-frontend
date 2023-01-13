import { defineNuxtConfig } from 'nuxt/config'
import { tailwindConfig } from './config/tailwindcss'
import { googleFontsConfig } from './config/google-fonts'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icons',
    '@nuxt/image-edge',
  ],
  tailwindcss: tailwindConfig,
  googleFonts: googleFontsConfig,
  runtimeConfig: {
    public: {
      api_baseURL: process.env.API_BASE_URL,
    },
  },
})
