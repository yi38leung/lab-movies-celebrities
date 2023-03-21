// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require("express");
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

// all your routes here

//Iteration#3: Adding New Celebrities
router.get("/celebrities/create", (req, res, next) => {
  res.render("/celebrities/new-celebrity");
});

router.post("/celebrities/create", (req, res, next) => {
  const celebrityDetails = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase,
  };
  Celebrity.create(celebrityDetails)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.error("Error connecting to DB", err);
    });
});
router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((celArr) => {
      res.render("/celebrities/celebrities.hbs", { celebrities: celArr });
    })

    .catch((err) => {
      console.error("Error connecting to DB", err);
    });
});

module.exports = router;
