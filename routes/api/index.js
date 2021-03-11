const allRoutes = require('./allRoutes');
const Router = require('express').Router();

Router.use('/book', allRoutes);

module.exports = Router;