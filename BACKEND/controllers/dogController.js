const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/ageModel');
require('../models/sexModel');
require('../models/sizeModel');
require('../models/colorModel');

function createDog(req, res) {
  const newDog = new Dog(req.body);

  newDog.save();

  res.json(newDog);
}

async function getAllDogs(req, res) {
  const allDogs = await Dog
    .find({})
    .populate('user')
    .populate('breed')
    .populate('age')
    .populate('sex')
    .populate('size')
    .populate('color');

  res.json(allDogs);
}

async function getDogById(req, res) {
  const { dogId } = req.params;
  const findDog = await Dog
    .findById(dogId)
    .populate('user')
    .populate('breed')
    .populate('age')
    .populate('sex')
    .populate('size')
    .populate('color');

  res.json(findDog);
}

async function updateDogById(req, res) {
  const { dogId } = req.params;
  const updatedDog = await Dog
    .findByIdAndUpdate(dogId, req.body, { new: true })
    .populate('user')
    .populate('breed')
    .populate('age')
    .populate('sex')
    .populate('size')
    .populate('color');

  res.json(updatedDog);
}

async function deleteDogById(req, res) {
  const { dogId } = req.params;
  const deletedDog = await Dog
    .findByIdAndRemove(dogId)
    .populate('user')
    .populate('breed')
    .populate('age')
    .populate('sex')
    .populate('size')
    .populate('color');

  res.json(deletedDog);
}

module.exports = {
  createDog, getAllDogs, getDogById, updateDogById, deleteDogById
};
