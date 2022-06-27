const express = require('express');
const app = express();
const cors = require('cors');
// const videos = require('./routes/videos'); EXAMPLE
const fs = require('fs');

// PORT
require("dotenv").config();
const port = 5000;

// MIDDLEWARE
app.use(express.json());
app.use(cors());

app.get('/scores', (req, res) => {
  res.send("Hello1")
})

app.get('/', (req, res) => {
  res.send("Hello")
})

app.post('/scores', (req, res) => {
  console.log(req.body);
  res.send("send")
})
// VIDEO.JS ROUTE
// app.use('/videos', videos); EXAMPLE

// SERVER LISTENING ON PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});