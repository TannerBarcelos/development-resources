const express = require('express');

require('dotenv').config();

// Init DB client
const client = require('./db_config/db');
/**
 * Note: In the docs here: https://node-postgres.com/
 *
 * They say we can use Client() or client() - client() is recommended if you plan on handling many concurrent database
 * queries else Client() is fine. I personally like the client() approach because thinking about scalability and
 * concurrent efficiency is big
 */

// Init app
const app = express();

app.use(express.json());

// try {
//   client.connect();
//   console.log('Connected to DB successfully');
// } catch (error) {
//   console.log('Error connecting to db');
// }

// GET all todos
app.get('/todos', async (req, res) => {
  try {
    const query = 'SELECT * FROM todo';
    const { rows } = await client.query(query);
    res.json({ todos: rows });
  } catch (error) {
    res.json({ err: error });
  }
});

// GET a single todo
app.get('/todos/:id', async (req, res) => {
  const todoId = req.params.id;
  try {
    const query = 'SELECT * FROM todo WHERE todo_id = $1';
    const { rows } = await client.query(query, [todoId]);
    res.json({ todo: rows[0] || [] });
  } catch (error) {
    res.json({ err: error });
  }
});

// CREATE a todo - in a production codebase, this endpoint would be protected behind a signed in user and then we'd need to go to the todo table
// and get all todos for that user - in a relational DB, we could look at the foreign key which is the user_id from a user table we would make
app.post('/add-todo', async (req, res) => {
  try {
    const { todo_body } = req.body;
    // Look up syntax for sql on how to insert values - but also confirm against query syntax for PSQL
    const query = 'INSERT INTO todo (todo_body) VALUES ($1) RETURNING *';
    const { rows } = await client.query(query, [todo_body]);
    res.json({ todo: rows[0] });
  } catch (error) {
    res.json({ err: error });
  }
});

// UPDATE a todo
app.put('/update-todo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { todo_body } = req.body;
    // See SQL docs for how to write an update query
    const query =
      'UPDATE todo SET todo_body = $1 WHERE todo_id = $2 RETURNING *'; // for clienting in pg library , variables for where, etc. clauses , these are separates by $1 to $n respectively
    const { rows } = await client.query(query, [todo_body, id]);
    res.json({ todo: rows[0] });
  } catch (error) {
    res.json({ err: error });
  }
});

// DELETE a todo - returns the deleted todo
app.delete('/delete-todo/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const query = 'DELETE FROM todo WHERE todo_id = $1 RETURNING *'; // DELETE syntax is super easy
    const { rows } = await client.query(query, [id]);
    if (rows.length) {
      res.json({ todo: rows[0], message: 'Todo Deleted Successfully' });
    } else {
      res.json({ todo: [], message: 'Todo Does Not Exist' });
    }
  } catch (error) {
    res.json({ err: error });
  }
});

/**
 * Note: notice the RETURNING * at the end of some of the queries.
 */

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server Listening on port ${PORT}`));
