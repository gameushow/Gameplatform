import bookshelf from '../lib/bookshelf'


const TestDB = bookshelf.Model.extend({
  tableName: 'TestDB',
  hasTimestamps: true,
})

export default TestDB