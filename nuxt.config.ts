// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
  ],
  googleFonts: {
    families: {
      "Noto Sans Thai": [400, 700],
    },
  },
});
