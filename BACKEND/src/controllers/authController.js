const md5 = require('md5');
const User = require('../models/userModel');
const userController = require('./userController');

async function register(req, res) {
  const { email, password } = req.body;
  const user = new User({
    email,
    password: md5(password)
  });

  try {
    await user.save();
    res.status(200);
    res.send('Register success');
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function login(req, res) {
  req.params.userId = req.user._id;
  userController.getUserById(req, res);
}

function logout(req, res) {
  req.logout();
  res.redirect('/api/dog');
}

module.exports = {
  register, login, logout
};
