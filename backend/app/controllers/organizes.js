import OrganizeModel from '../models/organize'
import PositionModel from '../models/position'
import logger from '../lib/logger'
import _ from 'lodash'

import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED, HAS_ORG_NAME, HAS_ORG_SLUG } from '../config/error'
import genCode from '../utils/randomCode'
import handleError from '../utils/handleError'

const loggerPrefix = '[ORGANIZES]'

export const getAll = async (req, res) => {
  let { where, offset, limit, order } = req.query

  try {
    const data = await OrganizeModel
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
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}

export const getById = async (req, res) => {
  const id = req.params.id

  try {
    const data = await OrganizeModel
      .where('id', id)
      .fetch()
    return res.status(200).json(data)
  } catch (error) {
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}

export const create = async (req, res) => {
  const body = req.body
  if (
    _.isUndefined(body.name) ||
    _.isUndefined(body.slug) ||
    _.isUndefined(body.is_official) ||
    _.isUndefined(body.organize_type_id)
  ) {
    // Logger
    logger.error(`${loggerPrefix} สร้าง Organize ไม่สำเร็จ`, {
      headers: req.headers,
      code: REQUIRED.code,
      profileId: req.body.profile_id,
      err: REQUIRED.message,
    })
    // ----
    return res.status(500).json(REQUIRED)
  }

  try {
    let organize = await OrganizeModel
      .where('name', body.name)
      .fetch()
    if (organize) {
      // Logger
      logger.error(`${loggerPrefix} สร้าง Organize ไม่สำเร็จ`, {
        headers: req.headers,
        code: HAS_ORG_NAME.code,
        profileId: req.body.profile_id,
        err: HAS_ORG_NAME.message,
      })
      // ----
      return res.status(HAS_ORG_NAME.code).json(HAS_ORG_NAME)
    }
    organize = await OrganizeModel
      .where('slug', body.slug)
      .fetch()
    if (organize) {
      // Logger
      logger.error(`${loggerPrefix} สร้าง Organize ไม่สำเร็จ`, {
        headers: req.headers,
        code: HAS_ORG_SLUG.code,
        profileId: req.body.profile_id,
        err: HAS_ORG_SLUG.message,
      })
      // ----
      return res.status(HAS_ORG_SLUG.code).json(HAS_ORG_SLUG)
    }

    const newOrganizer = _.omit(body, ['profile_id'])

    const result = await OrganizeModel.forge(newOrganizer).save()
    result.set({ code: `O${result.id}${genCode()}` })
    await result.save()
    return res.status(200).json(result)
  } catch (error) {
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  const body = req.body

  try {
    const model = await OrganizeModel.where('id', id).fetch({ require: true })
    const organizerUpdated = _.omit(body, ['id', 'slug', 'profile_id', 'code', 'created_at', 'updated_at'])
    model.set(organizerUpdated)
    await model.save()
    return res.status(200).json(model)
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      // Logger
      logger.error(`${loggerPrefix} แก้ไข Organize ไม่สำเร็จ`, {
        headers: req.headers,
        code: NOT_FOUND.code,
        profileId: req.body.profile_id,
        err: NOT_FOUND.message,
      })
      // ----
      return res.status(200).json(NOT_FOUND)
    }
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}

export const del = async (req, res) => {
  const id = req.params.id

  try {
    const model = await OrganizeModel.where('id', id).fetch({ require: true })
    await model.destroy()
    return res.status(200).json({
      delete: true,
    })
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      // Logger
      logger.error(`${loggerPrefix} ลบ Organize ไม่สำเร็จ`, {
        headers: req.headers,
        code: NOT_FOUND.code,
        profileId: req.body.profile_id,
        err: NOT_FOUND.message,
      })
      // ----
      return res.status(200).json(NOT_FOUND)
    }
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}

export const getByProfileId = async (req, res) => {
  const id = req.params.id

  try {
    const position = await PositionModel
      .where('name', 'pending')
      .fetch()
    const data = await OrganizeModel
      .query(query => {
        query
          .innerJoin('profiles_organizes', 'organizes.id', 'organize_id')
          .innerJoin('profiles', 'profiles.id', 'profiles_organizes.profile_id')
      })
      .where('profiles.id', id)
      .where('profiles_organizes.position_id', '!=', position.id)
      .fetchAll()
    return res.status(200).json(data)
  } catch (error) {
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}

export const getByNameOrCode = async (req, res) => {
  const keyword = req.query.keyword
  try {
    const data = await OrganizeModel
      .query(qb => {
        qb.whereRaw(`LOWER(name) LIKE ? OR code = ?`, [`%${keyword}%`, keyword])
      })
      .fetchAll()
    return res.status(200).json(data)
  } catch (error) {
    // Logger
    logger.error(`${loggerPrefix}`, {
      headers: req.headers,
      err: error,
    })
    // ----
    return handleError(res, error)
  }
}
