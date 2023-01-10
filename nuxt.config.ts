import { defineNuxtConfig } from 'nuxt/config'
import { tailwindConfig } from './config/tailwindcss'
import { googleFontsConfig } from './config/google-fonts'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
  tailwindcss: tailwindConfig,
  googleFonts: googleFontsConfig,
})
