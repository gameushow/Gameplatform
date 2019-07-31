import express from 'express'
import { getAll, getById, create, update, del } from '../controllers/customfield_answers'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', del)

export default router
