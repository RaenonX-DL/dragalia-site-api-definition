import {ObjectId} from 'mongodb';


export const AUTH_DB = 'nextauth';

export const AUTH_USER_COLLECTION = 'users';

export type User = {
  id: ObjectId,
  createdAt: Date,
  updatedAt: Date,
  isAdmin: boolean,
  adsFreeExpiry?: Date,
}
