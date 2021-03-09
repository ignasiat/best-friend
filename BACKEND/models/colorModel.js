const { model, Schema } = require('mongoose');

const colorSchema = new Schema({
  name: String
});

module.exports = model('Color', colorSchema);
