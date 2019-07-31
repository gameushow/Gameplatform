import knex from './knex'
import bookshelf from 'bookshelf'

const Bookshelf = bookshelf(knex)

Bookshelf.plugin('registry')

export default Bookshelf