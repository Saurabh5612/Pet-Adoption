const { Animal } = require("../models");

const animalData = [
  { // 3 dogs
    species: "dog",
    age: 2,
    gender: "male",
    animal_name: "Toto",
    location_city: "Wichita",
    location_state: "Kansas",
    maintenance: "medium",
    temperament: "hyper"
  },
  {
    species: "dog",
    age: 8,
    gender: "male",
    animal_name: "Ralph",
    location_city: "Atlanta",
    location_state: "Georgia",
    maintenance: "medium",
    temperament: "calm"
  },
  {
    species: "dog",
    age: 1,
    gender: "female",
    animal_name: "Eliza",
    location_city: "Washington",
    location_state: "DC",
    maintenance: "high",
    temperament: "curious"
  },
  { // 3 cats
    species: "cat",
    age: 1,
    gender: "female",
    animal_name: "Sophie",
    location_city: "Richmond",
    location_state: "Virginia",
    maintenance: "high",
    temperament: "hyper"
  },
  { 
    species: "cat",
    age: 3,
    gender: "female",
    animal_name: "Ambrose",
    location_city: "Baltimore",
    location_state: "Maryland",
    maintenance: "medium",
    temperament: "curious"
  },
  { 
    species: "cat",
    age: 10,
    gender: "male",
    animal_name: "Cloud",
    location_city: "Reno",
    location_state: "Nevada",
    maintenance: "high",
    temperament: "calm"
  },
  { // 2 birds
    species: "bird",
    age: 1,
    gender: "female",
    animal_name: "Madeline",
    location_city: "Houston",
    location_state: "Texas",
    maintenance: "high",
    temperament: "hyper"
  },
  { 
    species: "bird",
    age: 6,
    gender: "male",
    animal_name: "Ari",
    location_city: "Washington",
    location_state: "DC",
    maintenance: "medium",
    temperament: "loud"
  },
  { // 1 snake
    species: "snake",
    age: 3,
    gender: "male",
    animal_name: "Leon",
    location_city: "Reno",
    location_state: "Nevada",
    maintenance: "high",
    temperament: "gluttonous"
  },
  { // 1 lizard
    species: "lizard",
    age: 2,
    gender: "male",
    animal_name: "Ranger",
    location_city: "Tucson",
    location_state: "Arizona",
    maintenance: "low",
    temperament: "lazy"
  }
]

const seedAnimals = () => Animal.bulkCreate(animalData);
module.exports = seedAnimals;