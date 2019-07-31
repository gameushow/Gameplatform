import express from 'express'
import { getByProviderId } from '../controllers/profiles'

const router = express.Router()

router.get('/', getByProviderId)

export default router
