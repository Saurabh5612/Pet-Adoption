const router = require("express").Router();
const { User } = require("../../models");
const { Animal } = require("../../models");

router.get('/', (req, res) => {
  Animal.findAll({
    attributes: [
      "id",
      "species",
      "age",
      "gender",
      "name",
      "location_city",
      "location_state",
      "maintenance",
      "temperament"
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbAnimalData => res.json(dbAnimalData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

router.post("/", (req, res) => {})

router.delete("/", (req, res) => {})

module.exports = router;