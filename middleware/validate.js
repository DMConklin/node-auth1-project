const Users = require('../users/users-model')

function users() {
    return async (req,res,next) => {
        try {
            const usernames = await Users.getUsers()

            if (!usernames) {
                return res.json({
                    message: "Oops something went wrong"
                })
            }

            req.usernames = usernames

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