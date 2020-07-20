const db = require('../data/config')

function getUsers() {
    return db('users')
        .select('id', 'username')
}

function getUser(user_id) {
    return db('users')
        .select('id', 'username')
        .where('id', user_id)
        .first()
}

async function register(user) {
    const [id] = await db('users')
        .insert(user)
    return getUser(id);
}

module.exports = {
    getUsers, getUser, register
}