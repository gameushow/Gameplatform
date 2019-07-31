import bookshelf from '../lib/bookshelf'

import eventType from './event_type'
import organize from './organize'
import ticketType from './ticket_type'
import eventAttendee from './event_attendee'
import eventTag from './event_tag'
import eventRequiredData from './event_required_data'

const event = bookshelf.Model.extend({
  tableName: 'events',
  hasTimestamps: true,
  ticketTypes: () => {
    return this.hasMany(ticketType)
  },
  eventAttendees: () => {
    return this.hasMany(eventAttendee)
  },
  eventTags: () => {
    return this.hasMany(eventTag)
  },
  eventRequiredDatas: () => {
    return this.hasMany(eventRequiredData)
  },
  eventType: () => {
    return this.belongsTo(eventType)
  },
  organize: () => {
    return this.belongsTo(organize)
  },
})

export default event