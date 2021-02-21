export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'UI Developer',
    titleTemplate: ' %s | Traek Wells',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Personal developer website for Traek Wells, a Front-end Developer and UI Designer',
      },
      // Twitter card preview
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@TraekWells' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://traek.dev',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Traek Wells',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Personal developer website for Traek Wells, a Front-end Developer and UI Designer',
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://traek.dev/img/default-card-image.png',
      },

      // Facebook card preview
      // Test on: https://developers.facebook.com/tools/debug/
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'https://traek.dev',
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://traek.dev',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Traek Wells',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Personal developer website for Traek Wells, a Front-end Developer and UI Designer',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://traek.dev/img/default-card-image.png',
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://traek.dev/img/default-card-image.png',
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'NuxtJS',
      },
    ],
    script: [],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: ['~/assets/scss/_mixins.scss'],
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-dracula.css',
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
