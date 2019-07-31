import bookshelf from '../lib/bookshelf'

import event from './event'

const eventRequiredData = bookshelf.Model.extend({
  tableName: 'event_required_data',
  hasTimestamps: true,
  event: () => {
    return this.belongsTo(event)
  },
})

export default eventRequiredData