const { model, Schema } = require('mongoose');

const sexSchema = new Schema({
  name: String
});

module.exports = model('Sex', sexSchema);
