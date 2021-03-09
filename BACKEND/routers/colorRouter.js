const { Router } = require('express');

const colorController = require('../controllers/colorController');

function ColorRouter() {
  const router = Router();

  router
    .route('/')
    .get(colorController.getAllColors);

  return router;
}

module.exports = ColorRouter();
