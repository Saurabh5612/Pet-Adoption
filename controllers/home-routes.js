const router = require("express").Router();
const { User, Animal } = require("../models");


router.get("/", (req, res) => {
  if(req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("homepage");
});

router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render('signin');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/pets', (req, res) => {
  res.render('pets');
});

module.exports = router;