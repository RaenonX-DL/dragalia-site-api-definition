import {BaseResponse} from '../../base/response';
import {SupportedLanguages} from '../../other/lang';
import {UserIsAdminResponse, UserShowAdsResponse} from '../../userControl/response';

export type PostUnit = {
  seqId: number,
  lang: SupportedLanguages,
  title: string,
  viewCount: number,
  modified: Date,
  published: Date,
}

export type PostListEntry = PostUnit

export type PostEditNote = {
  timestamp: Date,
  note: string
}

export type PostUpdateSuccessResponse = BaseResponse & {
  seqId: number
}

export type PostPublishSuccessResponse = PostUpdateSuccessResponse

export type PostListResponse<E extends PostListEntry = PostListEntry> = BaseResponse &
  UserIsAdminResponse &
  UserShowAdsResponse & {
  startIdx: number,
  postCount: number,
  posts: Array<E>
}

export type PostGetSuccessResponse = BaseResponse &
  PostUnit &
  UserIsAdminResponse &
  UserShowAdsResponse & {
  editNotes: Array<PostEditNote>,
  isAltLang: boolean,
  otherLangs: Array<SupportedLanguages>
}

export type PostEditSuccessResponse = PostUpdateSuccessResponse

export type PostIdCheckResponse = BaseResponse & UserIsAdminResponse & {
  available: boolean
}
