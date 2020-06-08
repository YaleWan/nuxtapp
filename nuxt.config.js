require('dotenv').config()
let baseUrl = ''
let publicPath
switch (process.env.BASE) {
  case 'dev':
    baseUrl = process.env.DEV_BASE_URL
    break
  case 'test':
    baseUrl = process.env.TEST_BASE_URL
    break
  case 'prod':
    baseUrl = process.env.PROD_BASE_URL
    publicPath = 'https://fezz.che300.com/c3-generator/'
    break
}
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  env: {
    base_env: process.env.BASE
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vconsole', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    debug: process.env.BASE === 'dev',
    baseURL: baseUrl
  },
  router: {
    base: process.env.BASE === 'dev' ? '/' : '/h5/'
    // base: '/h5/'
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    publicPath,
    extend(config, ctx) {}
  },
  server: {
    port: process.env.BASE === 'prod' ? 3333 : 3000 // default: 3000
  }
}
