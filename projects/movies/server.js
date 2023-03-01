const express = require("express");
const app = express();
require("dotenv").config();

// to make requests to the zillow origin
const cors = require("cors");

// router import for the movie routes
const movieRouter = require("./controllers/api/index");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// router middleware for all the zillow city routes - routes will be prefixed by /api
app.use("/api", movieRouter);

const PORT = process.env.PORT || 3100;

app.listen(PORT, console.log(`Server running on port: ${PORT}`));
