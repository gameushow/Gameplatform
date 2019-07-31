import bookshelf from '../lib/bookshelf'

import profileOrganize from './profile_organize'

const position = bookshelf.Model.extend({
  tableName: 'positions',
  hasTimestamps: true,
  profilesOrganizes: () => {
    return this.hasMany(profileOrganize)
  },
})

export default position