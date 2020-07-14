const db = require('../data/config')

function getUsers() {
    return db('users')
        .select('username')
}

module.exports = {
    getUsers
}