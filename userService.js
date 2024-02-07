const database = require('./database');

async function getUserById(id) {
    return await database.findUserById(id);
}

module.exports = { getUserById };