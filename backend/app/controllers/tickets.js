import TicketModel from '../models/ticket'
import TicketTypeModel from '../models/ticket_type'
import _ from 'lodash'

import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED, TICKET_FULL, DUPLICATE_TICKET } from '../config/error'
import genCode from '../utils/randomCode'
import handleError from '../utils/handleError'

export const getAll = async (req, res) => {
  let { where, offset, limit, order } = req.query

  try {
    const data = await TicketModel
      .where(where ? JSON.parse(where) : defaultWhere)
      .query(qb => {
        qb.innerJoin('ticket_types', 'tickets.ticket_type_id', 'ticket_types.id')
          .innerJoin('events', 'ticket_types.event_id', 'events.id')
          .column('tickets.*', 'events.name', 'events.image_url', 'events.slug', 'events.location', 'events.event_start_at', 'events.event_end_at', 'profile_id')
          .offset(offset ? +offset : defaultOffset)
          .limit(limit ? +limit : defaultLimit)
      })
      .orderBy(
        order ? order[0] : defaultOrderDesc[0],
        order ? _.toUpper(order[1]) : defaultOrderDesc[1])
      .fetchAll()
    return res.status(200).json(data)
  } catch (error) {
    return handleError(res, error)
  }
}

export const getById = async (req, res) => {
  const id = req.params.id

  try {
    const data = await TicketModel
      .query(qb => {
        qb.innerJoin('ticket_types', 'tickets.ticket_type_id', 'ticket_types.id')
          .innerJoin('events', 'ticket_types.event_id', 'events.id')
          .column('tickets.*', 'events.name', 'events.slug', 'events.location', 'events.event_start_at', 'events.event_end_at')
      })
      .where('tickets.id', id)
      .fetch()
    return res.status(200).json(data)
  } catch (error) {
    return handleError(res, error)
  }
}

export const create = async (req, res) => {
  const body = req.body
  if (
    _.isUndefined(body.profile_id) ||
    _.isUndefined(body.ticket_type_id)
  ) {
    return res.status(500).json(REQUIRED)
  }

  try {
    const ticketType = await TicketTypeModel
      .where('id', body.ticket_type_id)
      .fetch()
    if (ticketType.attributes.max_amount) {
      const countTicket = await TicketModel
        .where('ticket_type_id', body.ticket_type_id)
        .count()
      if (ticketType.attributes.max_amount <= countTicket) {
        return res.status(TICKET_FULL.code).json(TICKET_FULL)
      }
    }

    const ticketEvent = await TicketModel
      .query(qb => {
        qb.innerJoin('ticket_types', 'tickets.ticket_type_id', 'ticket_types.id')
          .where({
            'tickets.profile_id': body.profile_id,
            'ticket_types.event_id': ticketType.attributes.event_id
          })
          .column('tickets.id', 'tickets.profile_id', 'tickets.ticket_type_id', 'ticket_types.event_id')
      })
      .fetch()
    if (ticketEvent) {
      return res.status(DUPLICATE_TICKET.code).json(DUPLICATE_TICKET)
    }

    const ticket = await TicketModel
      .where({
        'profile_id': body.profile_id,
        'ticket_type_id': body.ticket_type_id,
      })
      .fetch()
    if (ticket) {
      return res.status(DUPLICATE_TICKET.code).json(DUPLICATE_TICKET)
    }

    const result = await TicketModel.forge(body).save()
    result.set({ code: `T${result.id}${genCode()}` })
    await result.save()
    return res.status(200).json(result)
  } catch (error) {
    return handleError(res, error)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  const body = req.body

  try {
    const model = await TicketModel.where('id', id).fetch({ require: true })
    model.set(body)
    await model.save()
    return res.status(200).json(model)
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      return res.status(200).json(NOT_FOUND)
    }
    return handleError(res, error)
  }
}

export const del = async (req, res) => {
  const id = req.params.id

  try {
    const model = await TicketModel.where('id', id).fetch({ require: true })
    await model.destroy()
    return res.status(200).json({
      delete: true,
    })
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      return res.status(200).json(NOT_FOUND)
    }
    return handleError(res, error)
  }
}

export const countTicket = async (req, res) => {
  const ticketTypeId = req.params.ticketTypeId
  try {
    const countTicket = await TicketModel
      .where('ticket_type_id', ticketTypeId)
      .count()
    return res.status(200).json({
      ticket_type_id: parseInt(ticketTypeId),
      amount: countTicket,
    })
  } catch (err) {
    return handleError(res, err)
  }
}
