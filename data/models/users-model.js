const db = require('../config')

function createUser(user) {
    return db('users')
        .insert(user)
}

module.exports = {
    createUser
}