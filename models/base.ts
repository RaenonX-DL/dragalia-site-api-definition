import {ObjectId} from 'mongodb';


export enum DocumentBaseKey {
  id = '_id'
}

export type DocumentBase = {
  [DocumentBaseKey.id]?: ObjectId,
};
