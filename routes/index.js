const Router = require('express').Router();
const path = require('path');
const apiRoutes = require('./api');

// API routes
Router.use('/api', apiRoutes);

Router.use((req,res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'));
});

module.exports = Router;