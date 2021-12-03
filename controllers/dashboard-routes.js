const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Animal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Animal.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      "id",
      "species",
      "age",
      "gender",
      "animal_name",
      "location_city",
      "location_state",
      "maintenance",
      "temperament",
    ],
    include: [
      {
        model: User,
        attributes: ["username"]
      }
    ]
  })
  .then(dbPostData => {
    const animals = dbAnimalData.map(animal => animal.get({ plain: true }));
    res.render('pets', { animals, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});