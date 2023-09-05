// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    strict: true
  },
  modules: [
    'nuxt-icon',
    '@nuxtjs/eslint-module'
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'httpshttps://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})
