const { model, Schema } = require('mongoose');

const addressSchema = new Schema({
  street: String,
  number: String,
  city: String,
  zipCode: String,
  region: String
});

module.exports = model('Address', addressSchema);
