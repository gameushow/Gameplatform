import bookshelf from '../lib/bookshelf'

import facultyDepartment from './faculty_department'
import profileOrganize from './profile_organize'
import ticket from './ticket'
import accountLink from './account_link'

const profile = bookshelf.Model.extend({
  tableName: 'profiles',
  hasTimestamps: true,
  profilesOrganizes: () => {
    return this.hasMany(profileOrganize)
  },
  tickets: () => {
    return this.hasMany(ticket)
  },
  accountLinks: function () {
    return this.hasMany(accountLink)
  },
  facultyDepartment: () => {
    return this.belongsTo(facultyDepartment)
  },
})

export default profile
