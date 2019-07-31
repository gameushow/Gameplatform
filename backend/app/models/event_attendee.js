import bookshelf from '../lib/bookshelf'

import event from './event'
import facultyDepartment from './faculty_department'

const eventAttendee = bookshelf.Model.extend({
  tableName: 'event_attendees',
  hasTimestamps: true,
  event: () => {
    return this.belongsTo(event)
  },
  facultyDepartment: () => {
    return this.belongsTo(facultyDepartment)
  },
})

export default eventAttendee