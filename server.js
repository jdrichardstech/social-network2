const express = require('express');
const config = require('config');
// require('dotenv').config();
const app = express();
const logger = require('morgan');

const PORT = config.get('PORT');
const connectDB = require('./config/db');

//Connect Database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));
app.use(logger('dev'));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => {
  console.log(`Backend Listening on ${PORT}`);
});
