export interface Dog {
  _id: string,
  name: string,
  shelter: {
    _id: string,
    name: string,
    address: {
      _id: string,
      street: string,
      number: string,
      city: string,
      zipCode: string,
      region: string
    }
    phone: string,
    email: string,
    password: string,
    website: string,
    information: string,
    photoURL: string,
    userType: string
  },
  breed: {
    _id: string,
    name: string
  },
  age: string,
  sex: string,
  size: string,
  color: {
    _id: string,
    name: string
  },
  description: string,
  photosURL: string[],
  adoption: boolean
}
