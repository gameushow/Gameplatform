require('babel-register')({
  presets: [
    'env',
  ],
})
require('babel-polyfill')
require('dotenv').config()

module.exports = require('./server')