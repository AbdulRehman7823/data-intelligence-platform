const userRepository = require("../repositories/userRepository");
async function createUser(email, password_hash) {
    return userRepository.createUser(email,password_hash);
}

async function getAll() {
    return userRepository.getAll();
}

module.exports = {
    createUser,
    getAll
}

