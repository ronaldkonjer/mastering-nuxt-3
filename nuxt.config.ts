// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // build: {
  //   "plugins": ["@babel/plugin-proposal-throw-expressions"]
  // },
  nitro: {
    esbuild: {
      // drop: process.env.NODE_ENV !== 'production' ? '[]' : ['console', 'debugger'],
      options: {
        target: 'esnext',
        // minify: true,

      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/supabase'],
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    inlineSSRStyles: false,
  },


})
