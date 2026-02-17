import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  app: {
    baseURL: '/products' // Set the base URL for the application
  }
})
