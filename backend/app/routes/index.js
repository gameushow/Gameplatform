import express from 'express'
import facultyDepartment from './faculties_departments'
import accountLink from './account_links'
import customfieldAnswer from './customfield_answers'
import customfieldQuestion from './customfield_questions'
import eventAttendee from './event_attendees'
import eventRequiredData from './event_required_data'
import eventType from './event_types'
import event from './events'
import eventsTag from './events_tags'
import organizeType from './organize_types'
import organize from './organizes'
import position from './positions'
import profile from './profiles'
import profileOrganize from './profiles_organizes'
import tag from './tags'
import ticketType from './ticket_types'
import ticket from './tickets'
import accounts from './accounts'
import authMiddleware from '../middlewares/authorization'

const router = express.Router()

router.get('/', (req, res) => {
  res.send({ date: new Date() })
})

router.use('/faculties_departments', facultyDepartment)
router.use('/account_links', accountLink)
router.use('/customfield_answers', authMiddleware, customfieldAnswer)
router.use('/customfield_questions', authMiddleware, customfieldQuestion)
router.use('/event_attendees', eventAttendee)
router.use('/event_required_data', eventRequiredData)
router.use('/event_types', eventType)
router.use('/events', event)
router.use('/events_tags', eventsTag)
router.use('/organize_types', organizeType)
router.use('/organizes', organize)
router.use('/positions', authMiddleware, position)
router.use('/profiles', profile)
router.use('/profiles_organizes', authMiddleware, profileOrganize)
router.use('/tags', tag)
router.use('/ticket_types', ticketType)
router.use('/tickets', ticket)
router.use('/accounts', authMiddleware, accounts)

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
