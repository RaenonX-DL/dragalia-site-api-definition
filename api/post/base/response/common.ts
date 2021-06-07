import {BaseResponse} from '../../../base/response';
import {PostBodyBase} from '../elements/common';


export type PostEditResponse = BaseResponse

export type PostPublishResponse = PostEditResponse

export type PostGetResponse = BaseResponse & PostBodyBase

export type PostIdCheckResponse = BaseResponse & {
  available: boolean
}
