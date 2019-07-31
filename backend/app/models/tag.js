import bookshelf from '../lib/bookshelf'

import eventTag from './event_tag'

const tag = bookshelf.Model.extend({
  tableName: 'tags',
  hasTimestamps: true,
  eventTags: () => {
    return this.hasMany(eventTag)
  },
})

export default tag