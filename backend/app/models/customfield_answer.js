import bookshelf from '../lib/bookshelf'

import ticket from './ticket'
import customfieldQuestion from './customfield_question'

const customfieldAnswer = bookshelf.Model.extend({
  tableName: 'customfield_answers',
  hasTimestamps: true,
  ticket: () => {
    return this.belongsTo(ticket)
  },
  customfieldQuestion: () => {
    return this.belongsTo(customfieldQuestion)
  },
})

export default customfieldAnswer