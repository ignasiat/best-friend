const { Router } = require('express');

const dogController = require('../controllers/dogController');

function DogRouter() {
  const router = Router();

  router
    .route('/')
    .post(dogController.createDog)
    .get(dogController.getAllDogs);

  router
    .route('/user/:userId')
    .get(dogController.getDogsByUser);

  router
    .route('/:dogId')
    .get(dogController.getDogById)
    .put(dogController.updateDogById)
    .delete(dogController.deleteDogById);

  return router;
}

module.exports = DogRouter();
