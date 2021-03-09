const { Router } = require('express');

const sizeController = require('../controllers/sizeController');

function SizeRouter() {
  const router = Router();

  router
    .route('/')
    .get(sizeController.getAllSizes);

  return router;
}

module.exports = SizeRouter();
