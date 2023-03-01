const session = require('express-session');
require('dotenv').config();

const sessionConfig = {
  name: 'session.id',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: null, // add later
  },
};

module.exports = session(sessionConfig);
