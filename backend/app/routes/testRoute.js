import express from 'express'
import { gettest } from '../controllers/gettest'

const router = express.Router()

router.get('/', gettest)

export default router
