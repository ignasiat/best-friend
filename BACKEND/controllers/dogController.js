const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/addressModel');
require('../models/colorModel');

function createDog(req, res) {
  const newDog = new Dog(req.body);

  newDog.save();

  res.json(newDog);
}

async function getAllDogs(req, res) {
  const allDogs = await Dog
    .find({})
    .populate('shelter')
    .populate({
      path: 'shelter',
      populate: { path: 'address' }
    })
    .populate('breed')
    .populate('color')
    .exec();

  res.json(allDogs);
}

async function getDogById(req, res) {
  const { dogId } = req.params;
  const findDog = await Dog
    .findById(dogId)
    .populate('shelter')
    .populate({
      path: 'shelter',
      populate: { path: 'address' }
    })
    .populate('breed')
    .populate('color')
    .exec();

  res.json(findDog);
}

async function getDogsByShelter(req, res) {
  const { userId } = req.params;
  const findDogs = await Dog
    .find({ shelter: userId })
    .populate('shelter')
    .populate({
      path: 'shelter',
      populate: { path: 'address' }
    })
    .populate('breed')
    .populate('color')
    .exec();

  res.json(findDogs);
}

async function updateDogById(req, res) {
  const { dogId } = req.params;
  const updatedDog = await Dog
    .findByIdAndUpdate(dogId, req.body, { new: true })
    .populate('shelter')
    .populate({
      path: 'shelter',
      populate: { path: 'address' }
    })
    .populate('breed')
    .populate('color')
    .exec();

  res.json(updatedDog);
}

async function deleteDogById(req, res) {
  const { dogId } = req.params;
  const deletedDog = await Dog
    .findByIdAndRemove(dogId)
    .populate('shelter')
    .populate({
      path: 'shelter',
      populate: { path: 'address' }
    })
    .populate('breed')
    .populate('color')
    .exec();

  res.json(deletedDog);
}

module.exports = {
  createDog, getAllDogs, getDogById, getDogsByShelter, updateDogById, deleteDogById
};
