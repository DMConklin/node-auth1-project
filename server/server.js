const express = require('express')
const server = express()
const usersRouter = require('./routes/users-router')

server.use(express.json())
server.use('/api', usersRouter)

module.exports = server