//const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''
urlPrefix = "/sirefala_home"

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  publicRuntimeConfig: { urlPrefix },  // ★コレ
}

