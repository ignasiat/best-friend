export interface User {
  _id: String,
  name: String,
  address: {
    _id: String,
    street: String,
    number: String,
    city: String,
    region: String,
  },
  phone: String,
  email: String,
  password: String,
  website: String,
  information: String,
  photoURL: String,
  userType: String

}
