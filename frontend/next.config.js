const withCSS = require('@zeit/next-css')
const withPlugins = require('next-compose-plugins')

require('dotenv').config()

const evnconfig = {
  useFileSystemPublicRoutes: true,
  publicRuntimeConfig: {
    PATH_BE: process.env.PATH_BE,
    PATH_SOCKET: process.env.PATH_SOCKET,
    PATH_GATEWAY: process.env.PATH_GATEWAY,
    PATH_FE: process.env.PATH_FE,
    HOSTNAME: process.env.HOSTNAME,
  },
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET
  }
}

module.exports = withPlugins([
  [withCSS]
], evnconfig)