import express from 'express'
import { getAll, getById, create, update, del } from '../controllers/account_links'
import authMiddleware from '../middlewares/authorization'
const router = express.Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.patch('/:id', authMiddleware, update)
router.delete('/:id', authMiddleware, del)

export default router
