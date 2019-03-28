const express = require('express')

const Router = express.Router()
const { getTodoList } = require('../../db/db')

/* GET users listing. */
Router.get('/todo', (req, res) => {
  res.render('todo', { todos: getTodoList() })
})

module.exports = Router
