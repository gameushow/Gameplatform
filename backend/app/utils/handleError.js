import { UNHANDLE } from '../config/error'

const handleError = (res, err) => {
  if (process.env.NODE_ENV === 'development') {
    return res.status(500).send(err)
  }
  return res.status(UNHANDLE.code).json(UNHANDLE)
}

export default handleError