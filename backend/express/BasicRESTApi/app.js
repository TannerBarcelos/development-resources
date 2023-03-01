const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Grab Command Line Arg [if passed] for running logger
const logger = process.argv.slice(2).toString();

// Middleware
if (logger) app.use(morgan('combined'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from Express!' });
});

app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`),
);
