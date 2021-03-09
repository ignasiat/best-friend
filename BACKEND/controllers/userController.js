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

async function getUserById(req, res) {
  const { userId } = req.params;
  const user = await User
    .findById(userId)
    .populate('address')
    .populate('userType');

  res.json(user);
}

async function updateUserById(req, res) {
  const { userId } = req.params;
  const updatedUser = await User
    .findByIdAndUpdate(userId, req.body, { new: true })
    .populate('address')
    .populate('userType');

  res.json(updatedUser);
}

async function deleteUserById(req, res) {
  const { userId } = req.params;
  const deletedUser = await User
    .findByIdAndRemove(userId)
    .populate('address')
    .populate('userType');

  res.json(deletedUser);
}

module.exports = {
  createUser, getAllUsers, getUserById, updateUserById, deleteUserById
};
