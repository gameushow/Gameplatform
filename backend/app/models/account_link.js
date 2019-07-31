import bookshelf from '../lib/bookshelf'

import profile from './profile'

const accountLink = bookshelf.Model.extend({
  tableName: 'account_links',
  hasTimestamps: true,
  profile: () => {
    return this.belongsTo(profile)
  },
})

export default accountLink