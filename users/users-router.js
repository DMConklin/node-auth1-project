const express = require('express')
const Users = require('./users-model')
const router = express.Router()

router.get('/users', async (req,res) => {
    try {
        res.json(await Users.getUsers())
    } catch(err) {
        res.status(500).json({
            message: "There was an error retrieving users"
        })
    }
})



module.exports = router