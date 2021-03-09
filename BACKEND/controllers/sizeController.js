const Size = require('../models/sizeModel');

async function getAllSizes(req, res) {
  const sizes = await Size.find();

  res.json(sizes);
}

module.exports = { getAllSizes };
