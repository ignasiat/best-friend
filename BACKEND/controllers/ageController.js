const Age = require('../models/ageModel');

async function getAllAges(req, res) {
  const ages = await Age.find({});

  res.json(ages);
}

module.exports = { getAllAges };
