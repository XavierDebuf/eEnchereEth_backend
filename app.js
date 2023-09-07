const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();
app.use('/shop', feedRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  
  mongoose.connect("mongodb://127.0.0.1:27017/shop", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
      app.listen(8080);
    })
    .catch(err => console.log(err));
  