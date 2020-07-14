const Users = require('../users/users-model')

function users() {
    return async (req,res,next) => {
        try {
            const users = await Users.getUsers()

            if (!users) {
                return res.json({
                    message: "Oops something went wrong"
                })
            }

            req.users = users

            next()
        } catch(err) {
            res.status(500).json({
                message: "There was an error processing your request"
            })
        }
    }
}

module.exports = {
    users
}