const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  name: String,
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  phone: String,
  email: String,
  password: String,
  website: String,
  information: String,
  photoURL: String,
  userType: { type: Schema.Types.ObjectId, ref: 'UserType' }
});

module.exports = model('User', userSchema);
