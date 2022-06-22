const express = require('express');
const app = express();
const cors = require('cors');
// const videos = require('./routes/videos'); EXAMPLE

// PORT
require("dotenv").config();
const port = process.env.PORT ?? 8000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

// VIDEO.JS ROUTE
// app.use('/videos', videos); EXAMPLE

// SERVER LISTENING ON PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});