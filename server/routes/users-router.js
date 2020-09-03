const express = require('express')
const router = express.Router()
const Users = require('../../data/models/users-model')

router.post('/register', async (req,res,next) => {
    try {
        await Users.createUser(req.body)
        res.json({
            message: 'User Created'
        })
    } catch(err) {
        next(err)
    }
})

module.exports = router