module.exports = {
  // some nuxt config...
  plugins: [
        { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false }
      ],

  css: [
        'swiper/dist/css/swiper.css'
      ],
  /*
  ** Headers of the page
  */
  head: {
    title: '谷粒学院',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'keywords', name: 'keywords', content: '谷粒学院' },
      { hid: 'description', name: 'description', content: '谷粒学院' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
  //  extend (config, { isDev, isClient }) {
  //    if (isDev && isClient) {
  //      config.module.rules.push({
  //        enforce: 'pre',
  //        test: /\.(js|vue)$/,
  //        loader: 'eslint-loader',
  //       exclude: /(node_modules)/
  //      })
  //    }
  //  },
    babel:{
      plugins:[
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
   }
  }
}

