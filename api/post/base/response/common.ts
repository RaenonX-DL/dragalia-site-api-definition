import {BaseResponse} from '../../../base/response';
import {UserIsAdminResponse} from '../../../userControl/response';
import {PostBodyBase} from '../elements/common';

export type PostEditResponse = BaseResponse

export type PostPublishResponse = PostEditResponse

export type PostGetResponse = BaseResponse & UserIsAdminResponse & PostBodyBase

export type PostIdCheckResponse = BaseResponse & UserIsAdminResponse & {
  available: boolean
}
