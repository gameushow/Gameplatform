import bookshelf from '../lib/bookshelf'

import profile from './profile'
import eventAttendee from './event_attendee'

const facultyDepartment = bookshelf.Model.extend({
  tableName: 'faculties_departments',
  hasTimestamps: true,
  profiles: () => {
    return this.hasMany(profile)
  },
  eventAttendees: () => {
    return this.hasMany(eventAttendee)
  },
})

export default facultyDepartment