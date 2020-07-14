const express = require('express')
const router = express.Router()
const Validate = require('../middleware/validate')

router.get('/users', Validate.users(), async (req,res,next) => {
    try {
        res.json(req.users)
    } catch(err) {
        next(err)
    }
})

module.exports = router