const urlPrefix = process.env.NEXT_PUBLIC_URL_PREFIX ? '/' + process.env.NEXT_PUBLIC_URL_PREFIX : ''

module.exports = {
  reactStrictMode: true,
  experimental: { //非同期コンポーネント有効化
    appDir: true,
  },

  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },  
}

