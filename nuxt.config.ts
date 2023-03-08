// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-lodash",
    "@vueuse/nuxt",
    "@nuxt/image-edge",
  ],
  image: {
    domains: ["i.dummyjson.com"],
  },
  experimental: {
    componentIslands: true,
  },
  routeRules: {
    "/spa": { ssr: false },
    "/static": { static: true },
    "/swr": { swr: 2 },
  },
});
