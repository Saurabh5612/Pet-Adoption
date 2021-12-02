const { Animal } = require("../models");

const animalData = [
  { // 5 dogs
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
  {
    species: "dog",
    age: 5,
    gender: "male",
    animal_name: "Fang",
    location_city: "Sacramento",
    location_state: "California",
    maintenance: "low",
    temperament: "gluttonous"
  },
  {
    species: "dog",
    age: 1,
    gender: "female",
    animal_name: "Sophie",
    location_city: "Richmond",
    location_state: "Virginia",
    maintenance: "high",
    temperament: "hyper"
  },
  { // 5 cats
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
  { 
    species: "cat",
    age: 4,
    gender: "male",
    animal_name: "Shadow",
    location_city: "Illinois",
    location_state: "Chicago",
    maintenance: "medium",
    temperament: "gluttonous"
  },
  { 
    species: "cat",
    age: 6,
    gender: "female",
    animal_name: "Sophie",
    location_city: "Philadelphia",
    location_state: "Pennsylvania",
    maintenance: "low",
    temperament: "calm"
  },
  { // 3 birds
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
    age: 3,
    gender: "male",
    animal_name: "Remy",
    location_city: "Richmond",
    location_state: "Virginia",
    maintenance: "medium",
    temperament: "calm"
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
  { // 2 snakes
    species: "snake",
    age: 3,
    gender: "male",
    animal_name: "Leon",
    location_city: "Reno",
    location_state: "Nevada",
    maintenance: "high",
    temperament: "gluttonous"
  },
  { 
    species: "snake",
    age: 5,
    gender: "female",
    animal_name: "Winnie",
    location_city: "Sacramento",
    location_state: "California",
    maintenance: "low",
    temperament: "calm"
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