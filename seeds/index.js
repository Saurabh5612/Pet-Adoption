const seedAnimals = require("./animal-seeds")
const sequelize = require("../config/connection");

const seedAll = async() => {
  await sequelize.sync({ force: true });
  await seedAnimals();
  process.exit(0);
};

seedAll();