export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'TagSW',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png'},
      { name: 'theme-color', content: '#ffffff'}
    ],
    link: [
      { rel: 'icon',type: "image/png", sizes: '16x16', href: '/favicon-16x16.png'},
      { rel: 'icon',type: "image/png", sizes: '32x32', href: '/favicon-32x32.png'},
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon-.png'},
      { rel: 'manifest', href: '/site.webmanifest'}
          ],      
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/style/reset.scss'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
  ],

  styleResources: {
    scss: ['~/assets/style/app.scss'],
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  
  i18n: {
    /* module options */
    locales: ['en', 'pt_BR'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en'
    },
    langDir: 'locales/',
    locales: [
      {
        code: 'en',
        file: 'en.json',
        iso: 'en'
      },
      {
        code: 'br',
        file: 'ptBR.json',
        iso: 'pt_BR'
      }
    ] 
  },
  
}
