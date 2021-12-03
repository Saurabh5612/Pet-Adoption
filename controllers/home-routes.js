const router = require("express").Router();
const { User, Animal } = require("../models");


router.get("/", (req, res) => {
  if(req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }
  res.render("homepage");
});

router.get('/add-adopt', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render('add-adopt');
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

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;