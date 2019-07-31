import bookshelf from '../lib/bookshelf'

import ticketType from './ticket_type'
import profile from './profile'
import customfieldAnswer from './customfield_answer'

const ticket = bookshelf.Model.extend({
  tableName: 'tickets',
  hasTimestamps: true,
  customfieldAnswers: () => {
    return this.hasMany(customfieldAnswer)
  },
  ticketType: () => {
    return this.belongsTo(ticketType)
  },
  profile: () => {
    return this.belongsTo(profile)
  },
})

export default ticket