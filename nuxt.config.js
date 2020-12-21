export default {
  publicRuntimeConfig: {
    GOOGLE_MAPS_API_KEY: 'AIzaSyAfPkflOKXzxU1Aa33mDp_Bw3AnFoLwhV4'
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global pag  modules: ['@nuxtjs/axios']
  head: {
    title: 'vidriera-front-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    `~/plugins/services.server.js`,
    `~/plugins/directives/scrollanimation.client.js`,
    '@plugins/vuetify'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/axios', '@nuxt/image'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
