export interface Dog {
  _id: String,
  name: String,
  user: {
    _id: String,
    address: {
      _id: String,
      street: String,
      number: String,
      city: String,
      zipCode: String,
      region: String
    }
    phone: String,
    email: String,
    password: String,
    website: String,
    information: String,
    photoURL: String,
    userType: String
  },
  breed: {
    _id: String,
    name: String
  },
  age: String,
  sex: String,
  size: String,
  color: {
    _id: String,
    name: String
  },
  description: String,
  photosURL: [String]
}
