const { model, Schema } = require('mongoose');

const dogSchema = new Schema({
  name: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  breed: { type: Schema.Types.ObjectId, ref: 'Breed' },
  age: { type: Schema.Types.ObjectId, ref: 'Age' },
  sex: { type: Schema.Types.ObjectId, ref: 'Sex' },
  size: { type: Schema.Types.ObjectId, ref: 'Size' },
  color: { type: Schema.Types.ObjectId, ref: 'Color' },
  description: String,
  photosURL: [String]
});

module.exports = model('Dog', dogSchema);
