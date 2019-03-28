const indexRouter = require('./index')
const usersRouter = require('./users')
const apiRouter = require('./api')

module.exports = (app) => {
  app.use('/', indexRouter)
  app.use('/users', usersRouter)
  app.use('/api', apiRouter)
}
