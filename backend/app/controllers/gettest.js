import _ from 'lodash'

import {
  defaultWhere,
  defaultOffset,
  defaultLimit,
  defaultOrderDesc
} from '../config/default'
import { NOT_FOUND, REQUIRED, HAS_ACCOUNT } from '../config/error'
import handleError from '../utils/handleError'
import TestDB from '../models/TestDB'


export const gettest = async (req, res) => {
    try {
      const data = await TestDB.where('TestName','0').fetchAll()
      return res.status(200).json(data)
    } catch (error) {
      return handleError(res, error)
    }
  }