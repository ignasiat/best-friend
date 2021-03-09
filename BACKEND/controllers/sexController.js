const Sex = require('../models/sexModel');

async function getAllSexes(req, res) {
  const sexes = await Sex.find({});

  res.json(sexes);
}

module.exports = { getAllSexes };
