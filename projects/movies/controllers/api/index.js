const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
require("dotenv").config();

// gets ALL movies from given search at tmbd API
router.get("/:movies", async (req, res) => {
  const { movies } = req.params;

  const API_KEY = process.env.TMBD_API_KEY;

  try {
    const movielist = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${movies}`
    );
    return res.json(await movielist.json());
  } catch (error) {
    return console.log(error);
  }
});

// will use the movie_id endpoint for imdb and get a spceific movie data - this will probably be used when clicking a particular movie in the UI and linking to a new page
// with a large synopsis
router.get("/:movie_id", (req, res) => {
  res.send("hello from movie particular route");
});

module.exports = router;
