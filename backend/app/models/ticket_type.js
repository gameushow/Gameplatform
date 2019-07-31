import bookshelf from '../lib/bookshelf'

import event from './event'
import ticket from './ticket'
import customfieldQuestion from './customfield_question'

const ticketType = bookshelf.Model.extend({
  tableName: 'ticket_types',
  hasTimestamps: true,
  tickets: () => {
    return this.hasMany(ticket)
  },
  customfieldQuestions: () => {
    return this.hasMany(customfieldQuestion)
  },
  event: () => {
    return this.belongsTo(event)
  },
})

export default ticketType