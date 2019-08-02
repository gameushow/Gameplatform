import _ from 'lodash'
import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED, HAS_ACCOUNT } from '../config/error'
import handleError from '../utils/handleError'

export const gettest = async (req, res) => {
    try {
      return res.status(200).json('test jaa')
    } catch (error) {
      return handleError(res, error)
    }
  }