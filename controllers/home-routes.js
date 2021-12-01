const router = require("express").Router();
const { User, Animal } = require("../../models");


router.get('/login', (req, res) => {
  if(req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render('login');
});

// get sign up page route
router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;