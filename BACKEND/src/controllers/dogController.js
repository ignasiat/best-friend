const cloudinary = require('cloudinary').v2;
const debug = require('debug')('app');
const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/addressModel');
require('../models/colorModel');

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

function uploadCloudinary(newDog, imagesURL) {
  cloudinary.config({
    cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
    api_key: `${process.env.CLOUDINARY_API_KEY}`,
    api_secret: `${process.env.CLOUDINARY_API_SECRET}`
  });
  return imagesURL.map((file) => new Promise((resolve, reject) => {
    cloudinary.uploader.upload(`${process.env.FOLDER}${file}`, (error, result) => {
      if (error) {
        reject(error);
      } else {
        newDog.photosURL.push(result.url);
        resolve(result);
      }
    });
  }));
}

async function createDog(req, res) {
  const newDog = new Dog(req.body);
  newDog.photosURL = [];
  // dog_promises will be an array of promises
  const dogPromises = uploadCloudinary(newDog, req.body.imagesURL);
  // Promise.all will fire when all promises are resolved
  try {
    await Promise.all(dogPromises);
    newDog.save((err) => {
      if (err) {
        res.status(500);
        res.json(err);
      }
      req.params.dogId = newDog._id;
      getDogById(req, res);
    });
  } catch (error) {
    res.status(500);
    res.json(error);
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



// function createDog(req, res) {
//   debug('Create dog');
//   debug(req.body.imagesURL);
//   cloudinary.config({
//     cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
//     api_key: `${process.env.CLOUDINARY_API_KEY}`,
//     api_secret: `${process.env.CLOUDINARY_API_SECRET}`
//   });

//   const newDog = new Dog(req.body);
//   newDog.photosURL = [];

//   // dog_promises will be an array of promises
//   const dogPromises = req.body.imagesURL.map((file) => new Promise((resolve, reject) => {
//     cloudinary.uploader.upload(`${process.env.FOLDER}${file}`, (error, result) => {
//       if (error) { reject(error); } else { newDog.photosURL.push(result.url); resolve(result); }
//     });
//   }));
//   // Promise.all will fire when all promises are resolved
//   Promise.all(dogPromises)
//     .then(() => {
//       newDog.save((err) => {
//         if (err) {
//           res.status(500);
//           res.json(err);
//         }
//         req.params.dogId = newDog._id;
//         getDogById(req, res);
//       });
//     })
//     .catch((error) => { debug('Error'); res.json(error); });
// }

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
