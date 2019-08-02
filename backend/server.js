import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

import morgan from 'morgan'
import logger from './app/lib/logger'

import appRouters from './app/routes/'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet())
app.use(morgan('combined', { stream: logger.stream }))

app.get('/', (req, res) => {
  res.send({ staus: 'server is running' })
})

app.use('/api', appRouters)

app.listen(process.env.PORT || 8000, err => {
  if (err) throw new Error(err)

  logger.info(`> express server is running on http://localhost:${process.env.PORT || 8000}`)
})

app.use('*', (req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

if (process.env.NODE_ENV === 'development') {
  // development specific functionality

  // development error handler
  app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      error: err,
    })
  })
}

// production error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
})
