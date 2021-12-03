const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Animal } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  Post.findAll({
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
    ]
  })
  .then(dbPostData => {
    const animals = dbPostData.map(animal => animal.get({ plain: true }));
    res.render('dashboard', { animals, loggedIn: true });
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});