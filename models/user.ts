import {ObjectId} from 'mongodb';


export type User = {
  id: ObjectId,
  createdAt: Date,
  updatedAt: Date,
  isAdmin: boolean,
  adsFreeExpiry?: Date,
}
