const seedAnimals = require("./animal-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async() => {
  await sequelize.sync({ force: true });
  await seedAnimals();
  await seedUsers();
  process.exit(0);
};

seedAll();