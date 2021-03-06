const User = require('../models/user.model');
const {hash} = require('../lib/bcrypt')

function getAll(){
    return User.find();
}


//Sign Up
async function createUser({name, email, password}){
    const encryptedPassword = await hash(password)

    return User.create({
        name,
        email,
        password: encryptedPassword,
    })
}

module.exports = {
    getAll,
    createUser,
}