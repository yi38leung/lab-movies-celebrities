// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const express = require('express');
const Movie = require('../models/Movie.model');
const Celebrity = require("../models/Celebrity.model");
const router = express.Router();

// all your routes here
//Iteration #6
router.get("/create", (req, res, next) => {
  Celebrity.find()
    .then((celArr) => {
      res.render("movies/new-movie");
    })
    .catch((err) => {
      console.error("Error connecting to DB", err);
    });
});
//Iteration #6: create movie
router.post("/movies/crete", (req, res, next) => {
  const movieDetails = {
    title: req.body.title,
    genre: req.body.genre,
    plot: req.body.plot,
    cast: req.body.cast,
  };
  Movie.create(movieDetails)
    .then((movieDetails) => {
      res.redirect("/movies");
    })
    .catch((err) => {
      console.error("Error connecting to DB", err);
    });
});

//Iteration #7: List all the movie
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movieArr) => {
      const data = {
        movies: movieArr
      };
      res.render("movies/movies", data);
    })
    .catch((err) => {
      console.error("Error connecting to DB", err);
    });
});
module.exports = router;
