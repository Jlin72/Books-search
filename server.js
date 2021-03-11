const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3031;
const app = express();
const Routes = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(Routes);

mongoose.connect(
  process.env.MONGODB_URI || `mongodb://localhost/googleBooks`,
  {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true}
);

app.listen(PORT, () => console.log(`API server is now connected to PORT: ${PORT}`));

