const urlPrefix = process.env.NEXT_PUBLIC_URL_PREFIX ? '/' + process.env.NEXT_PUBLIC_URL_PREFIX : ''

module.exports = {
  //reactStrictMode: true,
  //experimental: { //非同期コンポーネント有効化
  //  appDir: true,
  //},

  env:{
    B_MICROCMS_SERVICE_DOMAIN : process.env.MICROCMS_SERVICE_DOMAIN,
    B_MICROCMS_API_KEY : process.env.MICROCMS_API_KEY,
    B_NEWT_SPACE_UID: process.env.NEWT_SPACE_UID,
    B_NEWT_CDN_API_TOKEN: process.env.NEWT_CDN_API_TOKEN,
  },

  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },  
}

