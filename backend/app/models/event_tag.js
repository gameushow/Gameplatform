import bookshelf from '../lib/bookshelf'

import event from './event'
import tag from './tag'

const eventTag = bookshelf.Model.extend({
  tableName: 'events_tags',
  hasTimestamps: true,
  event: () => {
    return this.belongsTo(event)
  },
  tag: () => {
    return this.belongsTo(tag)
  },
})

export default eventTag