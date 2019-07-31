import bookshelf from '../lib/bookshelf'

import organize from './organize'

const organizeType = bookshelf.Model.extend({
  tableName: 'organize_types',
  hasTimestamps: true,
  organizes: () => {
    return this.hasMany(organize)
  },
})

export default organizeType