import {BaseResponse} from '../../base/response';

export type PostListEntry = {
  seqId: number | string,
  lang: string,
  viewCount: number,
  modified: string,
  published: string,
}

export type PostModifyNote = {
  timestamp: string,
  note: string
}

export interface PostUpdateSuccessResponse extends BaseResponse {
  seqId: number
}

export interface PostPublishSuccessResponse extends PostUpdateSuccessResponse {
}

export interface PostListResponse extends BaseResponse {
  isAdmin: boolean,
  startIdx: number,
  postCount: number,
  posts: Array<unknown>
}

export interface PostGetSuccessResponse extends BaseResponse {
  isAdmin: boolean,
  seqId: number,
  lang: string,
  modified: string,
  published: string,
  modifyNotes: Array<PostModifyNote>,
  viewCount: number,
  isAltLang: boolean,
  otherLangs: Array<string>
}

export interface PostEditSuccessResponse extends PostUpdateSuccessResponse {
}

export interface PostIdCheckResponse extends BaseResponse {
  isAdmin: boolean,
  available: boolean
}
