const { Router } = require('express');

const userController = require('../controllers/userController');

function UserRouter() {
  const router = Router();

  router
    .route('/')
    .post(userController.createUser)
    .get(userController.getAllUsers);

  return router;
}

module.exports = UserRouter();
