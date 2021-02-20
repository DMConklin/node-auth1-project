const express = require('express')
const server = express()
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const usersRouter = require('./routes/users/users-router')
const db = require('../data/config')

server.use(express.json())
server.use(session({
    name: 'user_login',
    resave: false,
    saveUninitialized: false,
    secret: 'this is my secret cookie sig',
    store: new KnexSessionStore({
        knex: db,
        createtable: true
    })
}))

server.use('/api', usersRouter)

module.exports = server