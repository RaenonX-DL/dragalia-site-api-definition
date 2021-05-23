import {BaseResponse} from '../../base/response';
import {SupportedLanguages} from '../../other/lang';
import {UserIsAdminResponse, UserShowAdsResponse} from '../../userControl/response';

export type PostUnitNoTitle = {
  seqId: number,
  lang: SupportedLanguages,
  viewCount: number,
  modifiedEpoch: number,
  publishedEpoch: number,
}

export type PostUnit = PostUnitNoTitle & {
  title: string,
}

export type PostEditNote = {
  timestampEpoch: number,
  note: string
}

export type PostUpdateSuccessResponse = BaseResponse & {
  seqId: number
}

export type PostPublishSuccessResponse = PostUpdateSuccessResponse

export type PostListResponse<E extends PostUnit = PostUnit> = BaseResponse &
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
