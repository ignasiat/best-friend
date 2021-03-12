const cloudinary = require('cloudinary').v2;
const debug = require('debug')('app');
const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/addressModel');
require('../models/colorModel');

function createDog(req, res) {
  cloudinary.config({
    cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
    api_key: `${process.env.CLOUDINARY_API_KEY}`,
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`
  });
  try {
    const newDog = new Dog(req.body);
    newDog.photosURL = [];

    req.body.imagesURL.forEach((image) => {
      cloudinary.uploader.upload(`${process.env.FOLDER}${image}`,
        (error, result) => {
          newDog.photosURL.push(result.url);
        });
    });
    setTimeout(() => {
      newDog.save();
      res.json(newDog);
    }, 5000);
  } catch (error) {
    debug(error);
  }
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
