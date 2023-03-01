const { Client } = require('pg');

module.exports = new Client({
  user: process.env.POSTGRES_USER, // the main user of the db
  password: process.env.POSTGRES_PASSWORD, // this is the password configured by you, else it is the default password
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
});
