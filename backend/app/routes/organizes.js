import express from 'express'
import { getAll, getById, create, update, del, getByProfileId, getByNameOrCode } from '../controllers/organizes'
import authMiddleware from '../middlewares/authorization'

const router = express.Router()

router.get('/', getAll)
router.get('/find', getByNameOrCode)
router.get('/:id', getById)
router.get('/:id/accounts', getByProfileId)
router.post('/', authMiddleware, create)
router.patch('/:id', authMiddleware, update)
router.delete('/:id', authMiddleware, del)

export default router
