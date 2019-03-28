const express = require('express')

const router = express.Router()

const imageUploadRouter = require('./api/image_upload')
const todoRouter = require('./api/todo')

router.use('/v1', imageUploadRouter)
router.use('/v1', todoRouter)

module.exports = router
