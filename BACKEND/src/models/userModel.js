const { model, Schema } = require('mongoose');
const md5 = require('md5');

const userSchema = new Schema({
  name: String,
  address: { type: Schema.Types.ObjectId, ref: 'Address' },
  phone: String,
  email: String,
  password: String,
  website: String,
  information: String,
  photoURL: String,
  userType: String
});

userSchema.methods.validPassword = function validPassword(pwd) {
  return this.password === md5(pwd);
};

module.exports = model('User', userSchema);
