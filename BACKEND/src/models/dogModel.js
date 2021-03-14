const { model, Schema } = require('mongoose');

const dogSchema = new Schema({
  name: String,
  shelter: { type: Schema.Types.ObjectId, ref: 'User' },
  breed: { type: Schema.Types.ObjectId, ref: 'Breed' },
  age: String,
  sex: String,
  size: String,
  color: { type: Schema.Types.ObjectId, ref: 'Color' },
  description: String,
  photosURL: [String],
  adoption: Boolean,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = model('Dog', dogSchema);
