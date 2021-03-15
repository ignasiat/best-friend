const { model, Schema } = require('mongoose');

const breedSchema = new Schema({
  name: String
});

module.exports = model('Breed', breedSchema);
