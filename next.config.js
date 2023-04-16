const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  reactStrictMode: true,
  trailingSlash: true
}

module.exports = nextConfig

