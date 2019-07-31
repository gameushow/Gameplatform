require('dotenv').config({ path: '../.env' })

module.exports = {
  client: process.env.DB_TYPE,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
  },
}