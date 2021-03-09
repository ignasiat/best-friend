const { Router } = require('express');

const ageController = require('../controllers/ageController');

function AgeRouter() {
  const router = Router();

  router
    .route('/')
    .get(ageController.getAllAges);

  return router;
}

module.exports = AgeRouter();
