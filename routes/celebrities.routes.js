// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const Celebrity = require('../models/Celebrity.model');
const router = express.Router();

// all your routes here

//Iteration #3: Adding New Celebrities
router.get("/create", (req, res, next) => {
  res.render("celebrities/new-celebrity");
});

router.post("/create", (req, res) => {

  const newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.create(newCelebrity)
    .then(() => {
      res.redirect("/celebrities/celebrities");
    })
    .catch(e => {
      res.render("celebrities/new-celebrity");
    })
})


//Iteration #3: Listing Our Celebrities
router.get('/celebrities', (req, res, next) => {
  Celebrity.find()
    .then(celebArr => {

      const data = {
        celebrities: celebArr
      };
      res.render("celebrities/celebrities", data);
    })
    .catch(e => {
      console.log("Error acessing the list", e);
      next(e);
    })
})




module.exports = router;
