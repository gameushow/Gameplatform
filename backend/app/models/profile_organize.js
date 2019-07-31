import bookshelf from '../lib/bookshelf'

import profile from './profile'
import organize from './organize'
import position from './position'

const organizeType = bookshelf.Model.extend({
  tableName: 'profiles_organizes',
  hasTimestamps: true,
  profile: () => {
    return this.belongsTo(profile)
  },
  organize: () => {
    return this.belongsTo(organize)
  },
  position: () => {
    return this.belongsTo(position)
  },
})

export default organizeType