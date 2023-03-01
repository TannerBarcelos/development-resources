const express = require('express');
const cors = require('cors');

// Configs
const connectDB = require('./config/db/connectDB.js');
const session = require('./config/session/sessionConfig.js');

require('dotenv').config();

const app = express();

connectDB();

app.set('trust proxy', 1); // trust first proxy

app.use(session);
app.use(cors());
app.use(require('./routes/routes.js'));

const PORT = process.env.PORT || 5151;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
