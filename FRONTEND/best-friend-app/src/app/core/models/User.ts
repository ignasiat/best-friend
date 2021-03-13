export interface User {
  _id: string,
  name: string,
  address: {
    _id: string,
    street: string,
    number: string,
    city: string,
    region: string,
    zipCode: string
  },
  phone: string,
  email: string,
  password: string,
  website: string,
  information: string,
  photoURL: string,
  userType: string

}
