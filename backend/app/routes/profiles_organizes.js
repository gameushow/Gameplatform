import express from 'express'
import { getAll, getById, create, update, del, getProfile, updateToMember } from '../controllers/profiles_organizes'

const router = express.Router()

router.get('/', getAll)
router.get('/profiles', getProfile)
router.get('/:id', getById)
router.post('/', create)
router.patch('/:id/approve', updateToMember)
router.patch('/:id', update)
router.delete('/:id', del)

export default router
