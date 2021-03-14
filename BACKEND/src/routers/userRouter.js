const { Router } = require('express');

const userController = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(userController.createUser)
    .get(userController.getAllUsers);

  router
    .route('/shelter')
    .get(userController.getAllShelters);

  router
    .route('/:userId')
    .get(userController.getUserById)
    .put(userController.updateUserById)
    .delete(userController.deleteUserById);
  return router;
}

module.exports = UserRouter();
