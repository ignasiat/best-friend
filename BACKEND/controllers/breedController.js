const Breed = require('../models/breedModel');

async function getAllBreds(req, res) {
  const breeds = await Breed.find({});

  res.json(breeds);
}

module.exports = { getAllBreds };
