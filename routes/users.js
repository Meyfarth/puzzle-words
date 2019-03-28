const express = require('express')

const Router = express.Router()

/* GET users listing. */
Router.get('/', (req, res) => {
  res.send('respond with a resource')
})

module.exports = Router
