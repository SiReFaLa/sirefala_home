const urlPrefix = process.env.NEXT_PUBLIC_URL_PREFIX ? '/' + process.env.NEXT_PUBLIC_URL_PREFIX : ''
//urlPrefix = "/sirefala_home"

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },  // ★コレ
}

