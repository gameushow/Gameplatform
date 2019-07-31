import ProfileModel from '../models/profile'
import AccountLinkModel from '../models/account_link'
import ProfileOrganizeModel from '../models/profile_organize'
import _ from 'lodash'

import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED, HAS_CITIZEN_ID } from '../config/error'
import genCode from '../utils/randomCode'
import handleError from '../utils/handleError'

export const getAll = async (req, res) => {
  let { where, offset, limit, order } = req.query

  try {
    const data = await ProfileModel
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
    const data = await ProfileModel
      .where('id', id)
      .fetch()
    return res.status(200).json(data)
  } catch (error) {
    return handleError(res, error)
  }
}

export const getByProviderId = (req, res) => {
  if (
    _.isUndefined(req.query.fbProviderId)
  ) {
    return res.status(500).json(REQUIRED)
  }
  AccountLinkModel
    .where('provider_token', req.query.fbProviderId)
    .fetch()
    .then(accountLink => {
      if (accountLink) {
        ProfileModel
          .where('id', accountLink.get('profile_id'))
          .fetch()
          .then(profile => {
            res.status(200).json(
              Object.assign({},
                profile.serialize(),
                {
                  accountLink,
                }
              )
            )
          })
          .catch(error => {
            res.status(500).send(error)
          })
      } else {
        res.status(200).json(accountLink)
      }
    })
    .catch(error => {
      res.status(500).send(error)
    })
}

export const create = async (req, res) => {
  const body = req.body
  if (
    _.isUndefined(body.citizen_id) ||
    _.isUndefined(body.firstname) ||
    _.isUndefined(body.lastname) ||
    _.isUndefined(body.nickname) ||
    _.isUndefined(body.gender) ||
    _.isUndefined(body.telno) ||
    _.isUndefined(body.email) ||
    _.isUndefined(body.type) ||
    _.isUndefined(body.is_verify)
  ) {
    return res.status(REQUIRED.code).json(REQUIRED)
  }

  try {
    const profile = await ProfileModel
      .where('citizen_id', body.citizen_id)
      .fetch()
    if (profile) {
      return res.status(HAS_CITIZEN_ID.code).json(HAS_CITIZEN_ID)
    }

    const result = await ProfileModel.forge(body).save()
    result.set({ code: `U${result.id}${genCode()}` })
    await result.save()
    return res.status(200).json(result)
  } catch (error) {
    return handleError(res, error)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  const body = req.body
  const newBody = _.omit(body, ['profile_id', 'created_at', 'updated_at'])

  try {
    const model = await ProfileModel.where('id', id).fetch({ require: true })
    model.set(newBody)
    await model.save()
    return res.status(200).json(model)
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      return res.status(NOT_FOUND.code).json(NOT_FOUND)
    }
    return handleError(res, error)
  }
}

export const del = async (req, res) => {
  const id = req.params.id

  try {
    const model = await ProfileModel.where('id', id).fetch({ require: true })
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

export const getMe = async (req, res) => {
  if (req && req.query && req.query.token) {
    const token = req.query.token
    const redisClient = require('../lib/redis')
    try {
      redisClient.get(token, (err, reply) => {
        if (err) {
          console.error(err)
          return
        }
        const formattedReply = JSON.parse(reply)
        res.json(formattedReply)
      })
      return
    } catch (err) {
      console.error(err)
    }
  }
  res.status(401).send('Unauthorized')
}

export const getOrganizesByProfileId = async (req, res) => {
  const id = req.params.id
  const orgId = req.params.orgId

  try {
    const data = await ProfileOrganizeModel
      .query(query => {
        query
          .innerJoin('profiles', 'profiles.id', 'profiles_organizes.profile_id')
      })
      .where('profiles.id', id)
      .where('profiles_organizes.organize_id', orgId)
      .fetchAll()
    return res.status(200).json(data)
  } catch (error) {
    return handleError(res, error)
  }
}

export const getProfileEventStats = async (req, res) => {
  const id = req.params.id

  try {
    const data = await ProfileModel
      .where('profiles.id', id)
      .query(qb => {
        qb.innerJoin('tickets', 'profiles.id', 'tickets.profile_id')
          .innerJoin('ticket_types', 'tickets.ticket_type_id', 'ticket_types.id')
          .innerJoin('events', 'ticket_types.event_id', 'events.id')
          .column('events.activity_hour')
      })
      .fetchAll()
    const count = data.length
    let totalActivityHours = 0
    data.map(ele => {
      totalActivityHours += ele.attributes.activity_hour
    })
    return res.status(200).json({ total_events: count, total_activity_hours: totalActivityHours })
  } catch (error) {
    return handleError(res, error)
  }
}
