import { Dog } from '../core/models/Dog'

export const dogMock: Dog = {
  shelter: {
    _id: 'shelterId',
    name: 'String',
    address: {
      _id: 'String',
      street: 'String',
      number: 'String',
      city: 'String',
      region: 'String',
      zipCode: 'String'
    },
    phone: 'String',
    email: 'String',
    password: '',
    website: 'String',
    information: 'String',
    photoURL: 'String',
    userType: 'String'
  },
  _id: 'fake dog id',
  description: 'fake dog description',
  name: 'fake dog name',
  breed: {
    _id: 'String',
    name: 'String'
  },
  age: 'fake age',
  size: 'fake size',
  sex: 'fake sex',
  color: {
    _id: 'String',
    name: 'String'
  },
  photosURL: ['fake photo'],
  adoption: true,
  owner: {
    _id: 'ownerId',
    name: 'String',
    address: {
      _id: 'String',
      street: 'String',
      number: 'String',
      city: 'String',
      region: 'String',
      zipCode: 'String'
    },
    phone: 'String',
    email: 'String',
    password: '',
    website: 'String',
    information: 'String',
    photoURL: 'String',
    userType: 'String'
  }
}
