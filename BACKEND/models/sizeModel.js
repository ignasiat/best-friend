const { model, Schema } = require('mongoose');

const sizeSchema = new Schema({
  name: String
});

module.exports = model('Size', sizeSchema);
