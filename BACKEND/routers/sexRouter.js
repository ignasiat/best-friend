const { Router } = require('express');

const sexController = require('../controllers/sexController');

function SexRouter() {
  const router = Router();

  router
    .route('/')
    .get(sexController.getAllSexes);

  return router;
}

module.exports = SexRouter();
