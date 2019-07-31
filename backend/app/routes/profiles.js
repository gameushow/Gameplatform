import express from 'express'
import { getAll, getById, create, update, del, getMe, getOrganizesByProfileId, getProfileEventStats } from '../controllers/profiles'
import authMiddleware from '../middlewares/authorization'

const router = express.Router()

router.get('/me', getMe)
router.get('/', getAll)
router.get('/:id', getById)
router.get('/:id/event_stats', authMiddleware, getProfileEventStats)
router.get('/:id/profiles_organizes/:orgId', getOrganizesByProfileId)
router.post('/', create)
router.patch('/:id', authMiddleware, update)
router.delete('/:id', authMiddleware, del)

export default router
