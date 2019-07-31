import bookshelf from '../lib/bookshelf'

import ticketType from './ticket_type'
import customfieldAnswer from './customfield_answer'

const customfieldQuestion = bookshelf.Model.extend({
  tableName: 'customfield_questions',
  hasTimestamps: true,
  customfieldAnswers: () => {
    return this.hasMany(customfieldAnswer)
  },
  ticketType: () => {
    return this.belongsTo(ticketType)
  },
})

export default customfieldQuestion