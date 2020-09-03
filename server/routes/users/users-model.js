const db = require('../../../data/config')

async function createUser(user) {
    const id = await db('users')
        .insert(user)
    return findById(id)
}

function findById(id) {
    return db('users')
        .select('id', 'username', 'password')
        .where('id', id)
}

function findBy(filter) {
    return db('users')
        .select('id', 'username', 'password')
        .where(filter)
}

function find() {
    return db('users')
        .select('id', 'username')
}

module.exports = {
    createUser,
    findById,
    findBy,
    find
}