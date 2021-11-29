const { Animal } = require('../models');

const animalData = [
  { // 5 dogs
    species: dog,
    age: 2,
    gender: male,
    name: Toto,
    location_city: Wichita,
    location_state: Kansas,
    maintenance: medium,
    temperment: hyper
  },
  {
    species: dog,
    age: 8,
    gender: male,
    name: Ralph,
    location_city: Atlanta,
    location_state: Georgia,
    maintenance: medium,
    temperment: calm
  },
  {
    species: dog,
    age: 1,
    gender: female,
    name: Eliza,
    location_city: Washington,
    location_state: DC,
    maintenance: high,
    temperment: curious
  },
  {
    species: dog,
    age: 5,
    gender: male,
    name: Fang,
    location_city: Sacramento,
    location_state: California,
    maintenance: low,
    temperment: gluttonous
  },
  {
    species: dog,
    age: 1,
    gender: female,
    name: Sophie,
    location_city: Richmond,
    location_state: Virginia,
    maintenance: high,
    temperment: hyper
  },
  { // 5 cats
    species: cat,
    age: 1,
    gender: female,
    name: Sophie,
    location_city: Richmond,
    location_state: Virginia,
    maintenance: high,
    temperment: hyper
  },
  { // 3 birds
    species: cat,
    age: 1,
    gender: female,
    name: Sophie,
    location_city: Richmond,
    location_state: Virginia,
    maintenance: high,
    temperment: hyper
  },
  { // 2 snakes
    species: cat,
    age: 1,
    gender: female,
    name: Sophie,
    location_city: Richmond,
    location_state: Virginia,
    maintenance: high,
    temperment: hyper
  },
  { // 1 lizard
    species: lizard,
    age: 2,
    gender: male,
    name: Ranger,
    location_city: Tucson,
    location_state: Arizona,
    maintenance: low,
    temperment: lazy
  }
]

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;