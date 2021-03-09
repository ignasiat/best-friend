const { model, Schema } = require('mongoose');

const ageSchema = new Schema({
  name: String
});

module.exports = model('Age', ageSchema);
