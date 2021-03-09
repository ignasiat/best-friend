const User = require('../models/userModel');
require('../models/addressModel');
require('../models/userTypeModel');

function createUser(req, res) {
  const newUser = new User(req.body);

  newUser.save();

  res.json(newUser);
}

async function getAllUsers(req, res) {
  const allUsers = await User
    .find({})
    .populate('address')
    .populate('userType');

  res.json(allUsers);
}

module.exports = {
  createUser, getAllUsers
};
