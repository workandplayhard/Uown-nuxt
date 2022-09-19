import webpack from 'webpack'
import axios from 'axios'

export default {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    titleTemplate: `%s | ${process.env.npm_package_name.toUpperCase()}`,
    htmlAttrs: {
      lang: 'en-GB'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'UOWN is the new way to invest in and finance property, all made possible by our property crowdfunding platform. Click to invest or secure finance now.' },
      { name: "theme-color", content: "#71e5bd" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://connect.facebook.net', rel: 'preconnect' },
      { href: 'https://www.facebook.com', rel: 'preconnect' },
      { href: 'https://www.google-analytics.com', rel: 'preconnect' },
      { href: 'https://googleads.g.doubleclick.net', rel: 'preconnect' },
      { href: 'https://www.googletagmanager.com', rel: 'preconnect' },
      { href: 'https://www.google.com', rel: 'preconnect' },
      { href: 'https://www.googleadservices.com', rel: 'preconnect' },

      // { rel: 'preload', href: '/fonts/CircularStd-Black.woff2', as: 'font' },
      // { rel: 'preload', href: '/fonts/CircularStd-Book.woff2', as: 'font' },
      // { rel: 'preload', href: '/fonts/CircularStd-Bold.woff2', as: 'font' },
      // { rel: 'preload', href: '/fonts/CircularStd-Black.otf', as: 'font' },
      // { rel: 'preload', href: '/fonts/CircularStd-Book.otf', as: 'font' },
      // { rel: 'preload', href: '/fonts/CircularStd-Bold.ttf', as: 'font' },
    ],
    script: [
      // { src: 'segment.js', defer: true },
      { src: "/hammer.min.js", defer: true }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-carousel-3d', mode: "client" },
    { src: '~/plugins/vue-mq' },
    // { src: '~/plugins/directives', mode: 'client' },
    { src: '~/plugins/filters' },
    { src: '~/plugins/localStorage.js', mode: 'client' },
    { src: '~/plugins/js-cookie', mode: 'client' },
    { src: '~/plugins/lazysizes', mode: 'client' },
    // { src: '~/plugins/segment', mode: 'client' },
    { src: '~/plugins/modernizr', mode: 'client' },
    { src: '~/plugins/cloudinary-vue' },
    { src: '~/plugins/jsonld' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/pwa',
  ],

  optimizedImages: {
    inlineImageLimit: -1,
    mozjpeg: {
      quality: 85
    },
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8]
    },
    webp: {
      quality: 85
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['vue-scrollto/nuxt', { offset: -56, duration: 1000 }],
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == 'production' ? 'W7dzRkbNVkoPKhCzUNP2fwtt' : 'p8Lj84KwyomLrKvw1v6q7Att',
      cacheProvider: 'memory'
    }],
    'vue-social-sharing/nuxt',
    'nuxt-interpolation',
    '@nuxtjs/component-cache',
    '@nuxtjs/gtm',
    '@nuxtjs/proxy',
    '@nuxtjs/axios',
    'portal-vue/nuxt',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        '_': 'lodash'
      })
    ],
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    // }
    extend(config, { isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },

    html: {
      minify: {
        collapseBooleanAttributes: true,
        decodeEntities: true,
        minifyCSS: false,
        minifyJS: false,
        processConditionalComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },

  analyze: {
    analyzerMode: 'static'
  },

  purgeCSS: {
    whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],
    extractors: () => [
      {
        extractor(content) {
          return content.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
        },
        extensions: ['html', 'vue', 'js']
      },
    ]
  },

  generate: {
    routes: function (callback) {
      const token = `W7dzRkbNVkoPKhCzUNP2fwtt`
      const version = 'published'
      let cache_version = 0

      let toIgnore = ['home', 'en/settings', 'category', 'authors', 'topic', 'tag', 'unused']

      // other routes that are not in Storyblok with their slug.
      let routes = ['/'] // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

        // timestamp of latest publish
        cache_version = space_res.data.space.version

        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
        axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
          Object.keys(res.data.links).forEach((key) => {
            if (!toIgnore.includes(res.data.links[key].slug) && !res.data.links[key].slug.includes('authors/')) {
              routes.push('/' + res.data.links[key].slug)
            }
          })

          callback(null, routes)
        })
      })
    },
    fallback: '404.html',
    subFolders: false,
    exclude: ['/invest/property-bonds-sdlfSknK', '/blank']
  },

  env: {
    AWS_SES_REGION: 'eu-west-2',
    AWS_SES_ACCESS_KEY_ID: 'AKIAQDF5WVI3GLVVW44V',
    AWS_SES_SECRET_ACCESS_KEY: '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'
  },

  render: {
    resourceHints: false
  },

  target: 'static',

  pwa: {
    meta: {
      theme_color: "#71e5bd",
      lang: "en-GB"
    },
    manifest: {
      short_name: "UOWN",
      name: "UOWN",
      lang: "en-GB"
    },
    icon: {
      purpose: 'maskable'
    }
  },

  sitemap: {
    hostname: 'https://www.uown.co/',
    exclude: [
      '/todson-house-ain'
    ],
  },

  robots: {
    UserAgent: '*',
    Disallow: '/todson-house-ain'
  },

  gtm: {
    id: 'GTM-WXD5GDR',
    pageTracking: true
  },

  server: {
    host: '0.0.0.0' // default: localhost
  },

  // axios: {
  //   proxy: true
  // },

  proxy: {
    "/sms": {
      target: "https://ot43qmzasf.execute-api.eu-west-2.amazonaws.com",
      // target: "https://jsonplaceholder.typicode.com",
      pathRewrite: { "^/sms": "localhost:3000" }
    }
  },
}
