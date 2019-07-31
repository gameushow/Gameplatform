import bookshelf from '../lib/bookshelf'

import organizeType from './organize_type'
import profileOrganize from './profile_organize'
import event from './event'

const organize = bookshelf.Model.extend({
  tableName: 'organizes',
  hasTimestamps: true,
  profilesOrganizes: () => {
    return this.hasMany(profileOrganize)
  },
  events: () => {
    return this.hasMany(event)
  },
  organizeType: () => {
    return this.belongsTo(organizeType)
  },
})

export default organize