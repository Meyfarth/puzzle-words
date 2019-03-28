const express = require('express')

const Router = express.Router()

/* GET users listing. */
Router.get('/image-upload', (req, res) => {
  res.send('One day I will display a form, yep')
})

module.exports = Router
