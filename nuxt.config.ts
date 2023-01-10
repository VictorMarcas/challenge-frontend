import { defineNuxtConfig } from 'nuxt/config'
import { tailwindConfig } from './config/tailwindcss'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: tailwindConfig,
})
