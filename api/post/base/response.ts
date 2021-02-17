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

export type PostUpdateSuccessResponse = BaseResponse & {
  seqId: number
}

export type PostPublishSuccessResponse = PostUpdateSuccessResponse & {
}

export type PostListResponse = BaseResponse & {
  isAdmin: boolean,
  startIdx: number,
  postCount: number,
  posts: Array<PostListEntry>
}

export type PostGetSuccessResponse = BaseResponse & {
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

export type PostEditSuccessResponse = PostUpdateSuccessResponse & {
}

export type PostIdCheckResponse = BaseResponse & {
  isAdmin: boolean,
  available: boolean
}
