const Router = require('express').Router();
const controller = require('../../Controller/controller');

// if the route uses '/' redirect here
Router
  .route('/')
  .get(controller.getAll)
  .post(controller.create);

// if the Route uses /:id redirect to this api
Router
  .route('/:id')
  .delete(controller.delete);

module.exports = Router;