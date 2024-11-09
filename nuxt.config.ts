// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  css: ["~/assets/sass/app.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxtjs/strapi",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
  ],

  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  strapi: {
    url: process.env.NUXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v5",
    cookie: {},
    cookieName: "strapi_jwt",
  },

  runtimeConfig: {
    public: {},
  },
});
