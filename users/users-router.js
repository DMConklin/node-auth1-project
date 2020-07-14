const express = require('express')
const router = express.Router()
const Validate = require('../middleware/validate')

router.get('/users', Validate.users(), async (req,res) => {
    try {
        res.json(req.usernames)
    } catch(err) {
        res.status(500).json({
            message: "There was an error retrieving users"
        })
    }
})

module.exports = router