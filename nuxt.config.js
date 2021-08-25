
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    title: 'svenpanel - theshrine',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { name: 'theme-color', content: '#949494' },
      { property: 'og:title', name: 'og:title', content: `svenpanel - theshrine` },
      { property: 'og:description', name: 'og:description', content: process.env.npm_package_description || '' },
      { property: 'og:type', name: 'og:type', content: 'website' },
      { property: 'og:url', name: 'og:url', content: `https://svenpanel.de` },
      { property: 'og:image', name: 'og:image', content: `/og_image.jpg`},
      { property: 'og:audio', name: 'og:audio', content: `/sounds/30_laune1.mp3`},
      { property: 'og:site_name', name: 'og:site_name', content: `Svenpanel - TheShrine v3` },
      { property: 'twitter:card', name: 'twitter:card', content: `@kidzki` },
      { property: 'twitter:site', name: 'twitter:site', content: process.env.npm_package_description || '' },
      { property: 'twitter:title', name: 'twitter:title', content: `svenpanel - theshrine` },
      { property: 'twitter:description', name: 'twitter:description', content: process.env.npm_package_description || '' },
      { property: 'twitter:image', name: 'twitter:image', content: `/og_image.jpg` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=VT323&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          esModule: false
        }
      })
    }
  }
}
