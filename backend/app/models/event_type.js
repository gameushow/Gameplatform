import bookshelf from '../lib/bookshelf'

import event from './event'

const eventType = bookshelf.Model.extend({
  tableName: 'event_types',
  hasTimestamps: true,
  events: () => {
    return this.hasMany(event)
  },
})

export default eventType