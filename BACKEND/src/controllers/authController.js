const md5 = require('md5');
const User = require('../models/userModel');

function register(req, res) {
  const { email, password } = req.body;
  const user = new User({
    email,
    password: md5(password)
  });

  try {
    user.save();

    req.login(user, () => {
      res.redirect('/api/dog');
    });
  } catch (error) {
    res.status(500);
    res.send(error);
  }
}

function login(req, res) {
  res.redirect('/api/dog');
}

function logout(req, res) {
  req.logout();
  res.redirect('/api/dog');
}

function test(req, res) {
  if (req.isAuthenticated()) {
    res.status(200);
    res.send(req.user);
  } else {
    res.status(401);
    res.send('Don\'t authorize');
  }
}

module.exports = {
  register, login, logout, test
};
