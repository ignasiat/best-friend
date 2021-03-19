import { User } from './User'

export interface Dog {
  _id: string,
  name: string,
  shelter: User,
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
  adoption: boolean,
  owner: User | null | {_id: string},
}
