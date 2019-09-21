const express = require('express');
const app = express();
// require('dotenv').config();
const PORT = process.env.PORT || 8000;
const connectDB = require('./config/db');

//Connect Database
connectDB();

app.get('/', (req, res) => {
  res.send('Server running');
});

app.listen(PORT, () => {
  console.log(`Backend Listening on ${PORT}`);
});
