const userRepository = require("../repositories/userRepository");
async function createUser(email, password_hash) {
    return userRepository.createUser(email,password_hash);
}


module.exports = {
    createUser
}

