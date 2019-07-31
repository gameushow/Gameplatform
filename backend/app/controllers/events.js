import EventModel from '../models/event'
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
    const data = await EventModel
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
    const data = await EventModel
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
    _.isUndefined(body.name) ||
    _.isUndefined(body.slug) ||
    _.isUndefined(body.activity_hour) ||
    _.isUndefined(body.event_start_at) ||
    _.isUndefined(body.event_end_at) ||
    _.isUndefined(body.is_public) ||
    _.isUndefined(body.publish_date) ||
    _.isUndefined(body.organize_id) 
  ) {
    return res.status(500).json(REQUIRED)
  }

  try {
    const result = await EventModel.forge(body).save()
    return res.status(200).json(result)
  } catch (error) {
    return handleError(res, error)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  const body = req.body

  try {
    const model = await EventModel.where('id', id).fetch({ require: true })
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
    const model = await EventModel.where('id', id).fetch({ require: true })
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
