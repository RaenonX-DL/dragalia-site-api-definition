import {BaseResponse} from '../../base/response';

export type PostUnit = {
  seqId: number,
  lang: string,
  title: string,
  viewCount: number,
  modified: Date,
  published: Date,
}

export type PostListEntry = PostUnit

export type PostModifyNote = {
  timestamp: Date,
  note: string
}

export type PostUpdateSuccessResponse = BaseResponse & {
  seqId: number
}

export type PostPublishSuccessResponse = PostUpdateSuccessResponse

export type PostListResponse = BaseResponse & {
  isAdmin: boolean,
  showAds: boolean,
  startIdx: number,
  postCount: number,
  posts: Array<PostListEntry>
}

export type PostGetSuccessResponse = BaseResponse & PostUnit & {
  isAdmin: boolean,
  showAds: boolean,
  modifyNotes: Array<PostModifyNote>,
  isAltLang: boolean,
  otherLangs: Array<string>
}

export type PostEditSuccessResponse = PostUpdateSuccessResponse

export type PostIdCheckResponse = BaseResponse & {
  isAdmin: boolean,
  available: boolean
}
