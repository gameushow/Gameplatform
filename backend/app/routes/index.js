import express from 'express'
import testRoute from './testRoute'

const router = express.Router()

router.get('/', (req, res) => {
  res.send({ date: new Date() })
})

router.use('/testroute', testRoute)

// Generate 404s
router.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Handle errors
router.use((err, req, res) => {
  res.status(err.status || 500)
  if (err.status === 500) {
    console.log(err.stack)
  }
  res.json({
    status: err.status,
    message: err.message,
    error: err.stack,
  })
})

export default router