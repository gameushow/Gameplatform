import logger from '../lib/logger'

require('dotenv').config()

const securedHTTPRequest = ['POST', 'PUT', 'DELETE', 'PATCH']
const loggerPrefix = '[AUTHORIZATION]'

export default async (req, res, next) => {
  if (req && req.headers && req.headers.authorization) {
    const token = req.headers.authorization
    try {
      const redisClient = require('../lib/redis')
      redisClient.get(token, (err, reply) => {
        if (err) {
          // Logger
          logger.error(`${loggerPrefix} Redis error while getting data`, {
            headers: req.headers,
            code: 401,
            err: err,
          })
          // ----
          res.status(401).send('Unauthorized')
          return
        }
        if (reply) {
          const formattedReply = JSON.parse(reply)
          if (securedHTTPRequest.includes(req.method)) {
            // Add profile_id to request body
            req.body.profile_id = formattedReply.profile.id
          } else {
            // Add profile_id to query string
            req.query.profile_id = formattedReply.profile.id
          }
          // Logger
          logger.info(`${loggerPrefix} User authorized (${formattedReply.profile.id})`, {
            headers: req.headers,
          })
          // ----
          next()
        } else {
          // Logger
          logger.error(`${loggerPrefix} Redis error, key does not match`, {
            headers: req.headers,
            code: 401,
            err: err,
          })
          // ----
          res.status(401).send('Unauthorized')
        }
      })
    } catch (err) {
      // Logger
      logger.error(`${loggerPrefix} Redis error`, {
        headers: req.headers,
        code: 401,
        err: err,
      })
      // ----
      res.status(401).send('Unauthorized')
    }
  } else {
    // Logger
    logger.error(`${loggerPrefix} Authorization header is not provided`, {
      headers: req.headers,
      code: 401,
    })
    // ----
    res.status(401).send('Unauthorized')
  }
}
