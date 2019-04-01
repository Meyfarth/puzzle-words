const express = require('express')

const fs = require('fs')

const { recognize } = require('../../helpers/ocr/recognize')

const Router = express.Router()

/* GET users listing. */
Router.get('/image-upload', (req, res) => {
  console.log(fs.realpath('./', err => console.error(err)))
  res.send(recognize('./images/puzzle-sample.png'))
//   recognize('../../images/puzzle-sample.png')
//     .then(response => res.send(response))
//     .catch(error => res.send(`ERROR: ${error}`))
})

module.exports = Router
