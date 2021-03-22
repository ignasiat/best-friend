const cloudinary = require('cloudinary').v2;

const Dog = require('../models/dogModel');
require('../models/userModel');
require('../models/breedModel');
require('../models/addressModel');
require('../models/colorModel');

async function getDogById(req, res) {
  const { dogId } = req.params;
  try {
    const findDog = await Dog
      .findById(dogId)
      .populate([
        'shelter',
        {
          path: 'shelter',
          populate: { path: 'address' }
        },
        'breed',
        'color',
        'owner',
        {
          path: 'owner',
          populate: { path: 'address' }
        }])
      .exec();
    res.status(200);
    res.json(findDog);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
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
  let newDog = new Dog(req.body);

  newDog.photosURL = [];
  // dog_promises will be an array of promises
  const dogPromises = uploadCloudinary(newDog, req.body.imagesURL);
  // Promise.all will fire when all promises are resolved
  try {
    await Promise.all(dogPromises);
    newDog = await newDog.save();
    req.params.dogId = newDog._id;
    getDogById(req, res);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}

async function getAllDogs(req, res) {
  try {
    const allDogs = await Dog
      .find({})
      .populate([
        'shelter',
        {
          path: 'shelter',
          populate: { path: 'address' }
        },
        'breed',
        'color',
        'owner',
        {
          path: 'owner',
          populate: { path: 'address' }
        }])
      .exec();
    res.status(200);
    res.json(allDogs);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}

async function getDogsByShelter(req, res) {
  const { userId } = req.params;
  try {
    const findDogs = await Dog
      .find({ shelter: userId })
      .populate([
        'shelter',
        {
          path: 'shelter',
          populate: { path: 'address' }
        },
        'breed',
        'color',
        'owner',
        {
          path: 'owner',
          populate: { path: 'address' }
        }])
      .exec();
    res.status(200);
    res.json(findDogs);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}

async function updateDogById(req, res) {
  const { dogId } = req.params;
  const dataDog = req.body;
  let updatedDog;

  if (!req.body.imagesURL || req.body.imagesURL[0].startsWith('http')) {
    if (req.body.imagesURL) {
      dataDog.photosURL = req.body.imagesURL;
      delete dataDog.imagesURL;
    }
    try {
      updatedDog = await Dog
        .findByIdAndUpdate(dogId, dataDog, { new: true })
        .populate([
          'shelter',
          {
            path: 'shelter',
            populate: { path: 'address' }
          },
          'breed',
          'color',
          'owner',
          {
            path: 'owner',
            populate: { path: 'address' }
          }])
        .exec();
      res.status(200);
      res.json(updatedDog);
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  } else {
    dataDog.photosURL = [];
    // dog_promises will be an array of promises
    const dogPromises = uploadCloudinary(dataDog, req.body.imagesURL);
    try {
      await Promise.all(dogPromises);
      updatedDog = await Dog
        .findByIdAndUpdate(dogId, dataDog, { new: true })
        .populate([
          'shelter',
          {
            path: 'shelter',
            populate: { path: 'address' }
          },
          'breed',
          'color',
          'owner',
          {
            path: 'owner',
            populate: { path: 'address' }
          }])
        .exec();
      res.status(200);
      res.json(updatedDog);
    } catch (error) {
      res.status(500);
      res.json(error);
    }
  }
}

async function deleteDogById(req, res) {
  const { dogId } = req.params;
  try {
    const deletedDog = await Dog
      .findByIdAndRemove(dogId)
      .exec();
    res.status(200);
    res.json(deletedDog);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
}

module.exports = {
  createDog,
  getAllDogs,
  getDogById,
  getDogsByShelter,
  updateDogById,
  deleteDogById,
  uploadCloudinary
};
