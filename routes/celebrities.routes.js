// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const Celebrity = require("../models/Celebrity.model");
const router = require("express").Router();

// all your routes here

//Iteration#3: Adding New Celebrities
router.get("/celebrities/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

module.exports = router;
