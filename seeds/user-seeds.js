const { User } = require('../models');

const userData = [
  {
    username: "eliza_thornberry",
    email: "eliza_t@gmail.com",
    password: "12345"
  },
  {
    username: "peter_pettigrew",
    email: "peter_p@gmail.com",
    password: "12345"
  }
]

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;