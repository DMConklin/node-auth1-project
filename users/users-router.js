const express = require('express')
const router = express.Router()
const Users = require('./users-model')
const Validate = require('../middleware/validate')
const bcrypt = require('bcryptjs')

router.get('/users', Validate.users(), async (req,res,next) => {
    try {
        res.json(req.users)
    } catch(err) {
        next(err)
    }
})

router.get('/users/:id', Validate.user(), async (res,req,next) => {
    try {
        res.json(req.user)
    } catch(err) {
        next(err)
    }
})

router.post('/register', Validate.credentials(), async (req,res,next) => {
    try {
        const { username, password } = req.body
        const user = await Users.register({
            username: username,
            password: await bcrypt.hash(password, 10)
        })
        res.json(user)
    } catch(err) {
        next(err)
    }
})

router.post('/login', Validate.credentials(), async (req,res,next) => {
    try {
        
    } catch(err) {
        next(err)
    }
})

module.exports = router