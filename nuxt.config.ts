// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
  ],

  app: {
    head: {
      link: [
        {rel: 'icon', type: 'image/png', href: '/favicon.png'}
      ],
    }
  },

  i18n: {
    lazy: false, // disable lazy loading to test
    langDir: 'locales',
    locales: [
      {code: 'en', iso: 'en-US', name: 'English', file: 'en.json', dir: 'ltr'},
    ],
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'ebms_locale',
      redirectOn: 'root'
    },
    vueI18n: './i18n.config.ts'
  },

  build: {
    transpile: ['vue-i18n']
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  pageTransition: { name: 'page', mode: 'out-in' },
  layoutTransition: { name: 'layout', mode: 'out-in' },
})
