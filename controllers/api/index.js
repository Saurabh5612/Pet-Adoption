const router = require("express").Router();

const animalRoutes = require("./animal-routes");

router.use('/animals', animalRoutes);

module.exports = router;