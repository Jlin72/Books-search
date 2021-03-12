const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();
const Routes = require('./routes');

// This will be used for the forms
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// If deployed in Heroku use build for assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Client/build"));
}

// Telling express to use the backend routes
app.use(Routes);

// COnnecting the app to a mongoDB
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/googleBooks`,
  {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true}
);

app.listen(PORT, () => console.log(`API server is now connected to PORT: ${PORT}`));

