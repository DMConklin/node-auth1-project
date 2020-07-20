const Users = require('../users/users-model')

function users() {
    return async (req,res,next) => {
        try {
            const users = await Users.getUsers()

            if (!users) {
                return res.json({
                    message: "Failed to retrieve users"
                })
            }

            req.users = users

            next()
        } catch(err) {
            next(err)
        }
    }
}

function user() {
    return async (req,res,next) => {
        try {
            const user = await Users.getUser(req.params.id)

            if (!user) {
                res.status(404).json({
                    message: "User not found"
                })
            }

            req.user = user

            next()
        } catch(err) {
            next(err)
        }
    }
}

function credentials() {
    return async (req,res,next) => {
        try {
            if (!req.body.username || !req.body.password) {
                res.status(400).json({
                    message: "Please provide a Username and Password"
                })
            }
            next()
        } catch(err) {
            next(err)
        }
    }
}

module.exports = {
    users, user, credentials
}