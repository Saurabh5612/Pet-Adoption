const router = require("express").Router();
const { User, Animal } = require("../models");


router.get("/", (req, res) => {
  res.render("homepage");
});

router.get('/login', (req, res) => {
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;