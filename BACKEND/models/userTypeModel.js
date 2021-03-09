const { model, Schema } = require('mongoose');

const userTypeSchema = new Schema({
  name: String
});

module.exports = model('UserType', userTypeSchema);
