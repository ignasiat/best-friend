const Age = require('../models/ageModel');

async function getAllAges(req, res) {
  const ages = await Age.find({}).exec();

  res.json(ages);
}

module.exports = { getAllAges };
