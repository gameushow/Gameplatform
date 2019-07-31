const data = {
  where: {},
  offset: 0,
  limit: 20,
  orderDesc: ['id', 'desc'],
  orderAsc: ['id', 'asc'],
}

module.exports = {
  defaultWhere: data.where,
  defaultOffset: data.offset,
  defaultLimit: data.limit,
  defaultOrderDesc: data.orderDesc,
  defaultOrderAsc: data.orderAsc,
}