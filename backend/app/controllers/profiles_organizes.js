import ProfileOrganizeModel from '../models/profile_organize'
import PositionModel from '../models/position'
import _ from 'lodash'

import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED, DUPLICATE_MEMBER } from '../config/error'
import handleError from '../utils/handleError'

export const getAll = async (req, res) => {
  let { where, offset, limit, order } = req.query

  try {
    const data = await ProfileOrganizeModel
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

export const getProfile = (req, res) => {
  let { where, offset, limit, order } = req.query
  ProfileOrganizeModel
    .where(where ? JSON.parse(where) : defaultWhere)
    .query(query => {
      query
        .innerJoin('profiles', 'profiles.id', 'profiles_organizes.profile_id')
        .leftJoin('faculties_departments', 'profiles.faculty_department_id', 'faculties_departments.id')
        .innerJoin('positions', 'positions.id', 'profiles_organizes.position_id')
        .innerJoin('account_links', 'account_links.profile_id', 'profiles.id')
        .column(
          'profiles.*',
          'profiles_organizes.id as po_id',
          'positions.name',
          'faculties_departments.*',
          'account_links.*'
        )
        .orderBy('po_id', 'desc')
    })
    .fetchAll()
    .then(response => {
      return res.status(200).json(response)
    })
    .catch(error => {
      res.status(500).send(error)
    })
}

export const getById = async (req, res) => {
  const id = req.params.id

  try {
    const data = await ProfileOrganizeModel
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
    _.isUndefined(body.profile_id) ||
    _.isUndefined(body.organize_id) ||
    _.isUndefined(body.position_id)
  ) {
    return res.status(500).json(REQUIRED)
  }

  try {
    const member = await ProfileOrganizeModel
      .where({
        profile_id: body.profile_id,
        organize_id: body.organize_id,
      })
      .fetch()
    if (member) {
      return res.status(DUPLICATE_MEMBER.code).json(DUPLICATE_MEMBER)
    }

    const result = await ProfileOrganizeModel.forge(body).save()
    return res.status(200).json(result)
  } catch (error) {
    return handleError(res, error)
  }
}

export const update = async (req, res) => {
  const id = req.params.id
  const body = req.body
  try {
    const model = await ProfileOrganizeModel.where('id', id).fetch({ require: true })
    const profileId = model.toJSON().profile_id
    model.set(Object.assign(
      {},
      body,
      { profile_id: profileId },
    ))
    await model.save()
    return res.status(200).json(model)
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      return res.status(200).json(NOT_FOUND)
    }
    return handleError(res, error)
  }
}

export const updateToMember = async (req, res) => {
  const id = req.params.id
  try {
    const member = await PositionModel
      .where({ name: 'member' })
      .fetch()
    if (!member) return res.status(500).send({ error: 'position not found!' })
    const model = await ProfileOrganizeModel.where('id', id).fetch()
    if (!model) return res.status(404).send({ error: 'item not found' })
    model.set({ position_id: member.id })
    await model.save()
    res.status(200).json(model)
  } catch (error) {
    if (error.message === 'EmptyResponse') {
      return res.status(200).json(NOT_FOUND)
    }
    return res.status(500).send(error)
  }
}

export const del = async (req, res) => {
  const id = req.params.id

  try {
    const model = await ProfileOrganizeModel.where('id', id).fetch({ require: true })
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
