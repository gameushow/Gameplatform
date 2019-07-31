import express from 'express'
import { getAll, getById, create, update, del } from '../controllers/event_types'
import authMiddleware from '../middlewares/authorization'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', authMiddleware, create)
router.patch('/:id', authMiddleware, update)
router.delete('/:id', authMiddleware, del)

export default router
