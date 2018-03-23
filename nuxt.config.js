const pkg = require('./package')
const glob = require('glob');
const path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json'
});

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      /* 1 a) - first version - Working * / 
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js'},
      /* 1 a) - first version END */

      /* 1 b) - first version b) - updated */ 
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js', body:true }
      /* 1 b) - first version b) END */  

      /* 1 c.1) - first version c.1) - NOT WorKING  * / 
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TweenMax.min.js'}
      /* 1 c.1) - first version c.1) END */
      /* 1 c.2) - first version c.2) - NOT WorKING * / 
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.4/TimelineMax.min.js'}
      /* 1 c.2) - first version c.2) END */ 

      /* 2) - Another lib - not working - check https://cdnjs.com/ "tween"* / 
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.2.0/Tween.min.js'}
      /* 2) - Another lib END */ 
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },

  generate: {
    routes: dynamicRoutes
  },

  /*
  ** Global CSS
  */
  css: [
    // 'vue-flex/dist/vue-flex.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/plugin-vue-moment',
    '~/plugins/plugin-vue-flex'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    vendor: ['vue-moment','axios','vue-flex'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        // Source: https://github.com/kisenka/svg-sprite-loader/issues/233#issuecomment-356260447
        // For svg check : https://github.com/kisenka/svg-sprite-loader

        // const rule = config.module.rules.find(r => r.test.toString() === '/\\.(png|jpe?g|gif|svg)$/')
        // config.module.rules.splice(config.module.rules.indexOf(rule), 1)

        // add it again, but now without 'assets\/svg'
        // config.module.rules.push({
        //   test: /\.(png|jpe?g|gif)$/,
        //   loader: 'url-loader',
        //   query: {
        //     limit: 1000, // 1KO
        //     name: 'img/[name].[hash:7].[ext]'
        //   }
        // })

        // config.module.rules.push({
        //   test: /\.svg$/,
        //   use: 'svg-sprite-loader'
        // })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
