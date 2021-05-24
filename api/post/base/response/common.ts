import {BaseResponse} from '../../../base/response';
import {SupportedLanguages} from '../../../other/lang';
import {UserIsAdminResponse} from '../../../userControl/response';
import {PostEditNote, PostInfo} from '../elements/common';

export type PostEditResponse = BaseResponse

export type PostPublishResponse = PostEditResponse

export type PostGetResponse = BaseResponse &
  PostInfo &
  UserIsAdminResponse & {
  editNotes: Array<PostEditNote>,
  isAltLang: boolean,
  otherLangs: Array<SupportedLanguages>
}

export type PostIdCheckResponse = BaseResponse & UserIsAdminResponse & {
  available: boolean
}
