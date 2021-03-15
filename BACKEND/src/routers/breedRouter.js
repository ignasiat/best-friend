const { Router } = require('express');

const breedController = require('../controllers/breedController');

function BreedRouter() {
  const router = Router();

  router
    .route('/')
    .get(breedController.getAllBreds);

  return router;
}

module.exports = BreedRouter();
