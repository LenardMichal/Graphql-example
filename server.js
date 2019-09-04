require('dotenv').config();
const express = require('express');
const graphqlMiddleware = require('./graphql/main');
const mongoose = require('mongoose');

let app = express();

app.use('/graphql', graphqlMiddleware);

// Deprecation warning fix
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.DB_URI, (err) => {
  if (err) console.log(err);
  app.listen(4000);
})
