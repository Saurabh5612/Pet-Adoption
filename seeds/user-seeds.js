const { User } = require('../models');

const userData = [
    {
        username: "eliza_thornberry",
        email: "eliza_t@gmail.com",
        password: "password1!"
    },
    {
        username: "peter_pettigrew",
        email: "peter_p@gmail.com",
        password: "password2!"
    }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;