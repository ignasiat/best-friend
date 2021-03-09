const Color = require('../models/colorModel');

async function getAllColors(req, res) {
  const colors = await Color.find({});

  res.json(colors);
}

module.exports = { getAllColors };
