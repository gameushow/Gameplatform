import EventAttendeeModel from '../models/event_attendee'
import _ from 'lodash'

import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED } from '../config/error'
import handleError from '../utils/handleError'

export const getAll = async (req, res) => {
  let { where, offset, limit, order } = req.query

  try {
    const data = await EventAttendeeModel
      .where(where ? JSON.parse(where) : defaultWhere)
      .query(qb => {
        qb.offset(offset ? +offset : defaultOffset)
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
    const data = await EventAttendeeModel
      .where('id', id)
      .fetch()
    return res.status(200).json(data)
  } catch (error) {
    return handleError(res, error)
  }
}

export const create = async (req, res) => {
  const body = req.body
  if (
    _.isUndefined(body.faculty_department_id) ||
    _.isUndefined(body.event_id)
  ) {
    return res.status(500).json(REQUIRED)
  }

  try {
    const result = await EventAttendeeModel.forge(body).save()
    return res.status(200).json(result)
  } catch (error) {
    return handleError(res, error)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  const body = req.body

  try {
    const model = await EventAttendeeModel.where('id', id).fetch({ require: true })
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
    const model = await EventAttendeeModel.where('id', id).fetch({ require: true })
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

export const getByEventSlug = async (req, res) => {
  const slug = req.params.slug
  try {
    const data = await EventAttendeeModel
      .query(qb => {
        qb.innerJoin('events', 'event_attendees.event_id', 'events.id')
          .innerJoin('faculties_departments', 'event_attendees.faculty_department_id', 'faculties_departments.id')
          .where('events.slug', slug)
          .column('faculties_departments.id', 'faculty', 'department', 'event_id')
      })
      .fetchAll()
    return res.status(200).json(data)
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      return res.status(200).json(NOT_FOUND)
    }
    return res.status(500).send(error)
  }
}
