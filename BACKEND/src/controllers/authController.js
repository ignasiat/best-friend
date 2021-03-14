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
  res.status(200);
  res.json(req.body);
}

function logout(req, res) {
  req.logout();
  res.status(200);
  res.send('Logout');
}

function test(req, res) {
  if (req.isAuthenticated()) {
    res.status(200);
    res.send('Test works');
  } else {
    res.status(401);
    res.send('No puedes entra');
  }
}

module.exports = {
  register, login, logout, test
};
