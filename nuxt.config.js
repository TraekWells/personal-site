import getMetaData from './config/getMetaData.js'

const meta = getMetaData()

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Traek Wells',
    titleTemplate: ' %s | Front-End UI/UX Developer',
    meta: [
      ...meta,
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Traek is a front-end web developer skilled in HTML, CSS, JavaScript and user interface design. More importantly, he is a good person.',
      },

      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: '@TraekWells' },
      { name: 'twitter:card', content: 'summary' },
    ],
    script: [],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        hid: 'canonical',
        rel: 'canonical',
        href: 'https://traekwells.com',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/formatDate.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@/modules/sitemapRouteGenerator',
    'vue-plausible',
    '@nuxt/image',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/sitemap',
  ],
  plausible: {
    domain: 'traekwells.com',
    trackLocalHost: false,
  },
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
  build: {
    babel: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              esmodules: true,
            },
            loose: true,
            shippedProposals: true,
          },
        ],
      ],
    },
  },
  sitemap: {
    hostname: 'https://traekwells.com',
  },
}
