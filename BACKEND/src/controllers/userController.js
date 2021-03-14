const User = require('../models/userModel');
require('../models/addressModel');
const { constants } = require('../constants');

function createUser(req, res) {
  const newUser = new User(req.body);

  newUser.save();

  res.json(newUser);
}

async function getAllUsers(req, res) {
  const allUsers = await User
    .find({})
    .populate('address')
    .exec();

  res.json(allUsers);
}

async function getAllShelters(req, res) {
  const allShelters = await User
    .find({ userType: constants.SHELTER })
    .populate('address')
    .exec();

  res.json(allShelters);
}

async function getUserById(req, res) {
  const { userId } = req.params;
  const user = await User
    .findById(userId)
    .populate('address')
    .exec();

  res.json(user);
}

async function updateUserById(req, res) {
  const { userId } = req.params;
  const updatedUser = await User
    .findByIdAndUpdate(userId, req.body, { new: true })
    .populate('address')
    .exec();

  res.json(updatedUser);
}

async function deleteUserById(req, res) {
  const { userId } = req.params;
  const deletedUser = await User
    .findByIdAndRemove(userId)
    .populate('address')
    .exec();

  res.json(deletedUser);
}

module.exports = {
  createUser, getAllUsers, getAllShelters, getUserById, updateUserById, deleteUserById
};
