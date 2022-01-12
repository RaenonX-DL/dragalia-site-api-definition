import {ObjectId} from 'mongodb';

import {SupportedLanguages} from '../api/other/lang';
import {DocumentBase} from './base';


export const AUTH_DB = 'nextauth';

export const AUTH_USER_COLLECTION = 'users';

export type User = {
  id: ObjectId,
  name: string,
  email: string,
  image: string
  isAdmin: boolean,
  createdAt: Date,
  updatedAt: Date,
  adsFreeExpiry?: Date,
  lang: SupportedLanguages,
};

export enum UserDocumentKey {
  name = 'name',
  email = 'email',
  image = 'image',
  isAdmin = 'isAdmin',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  adsFreeExpiry = 'adsFreeExpiry',
  lang = 'lang',
}

export type UserDocument = DocumentBase & {
  [UserDocumentKey.name]: string,
  [UserDocumentKey.email]: string,
  [UserDocumentKey.image]: string,
  [UserDocumentKey.isAdmin]: boolean,
  [UserDocumentKey.createdAt]: Date,
  [UserDocumentKey.updatedAt]: Date,
  [UserDocumentKey.adsFreeExpiry]?: Date,
  [UserDocumentKey.lang]?: SupportedLanguages,
};
