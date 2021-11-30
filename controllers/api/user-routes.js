const router = require('express').Router();
const { User, Animal } = require('../../models');

router.get('/', (req, res) => {
  // Access User model aand run findAll() method
  User.findAll({
    attributes: { exclude: ["password"] }
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id
    },
    include: [
      {
        model: Animal,
        attributes: ['id', 'species', "name"]
      }
    ]
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;