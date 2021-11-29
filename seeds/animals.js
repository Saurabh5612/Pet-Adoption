const { Animal } = require('../models');

const animalData = [
    {
      species: dog,
      age: 2,
      name: Toto,
      location_city: Wichita,
      location_state: Kansas,
      maintenance: medium,
      temperment: hyper,
    }
]

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;