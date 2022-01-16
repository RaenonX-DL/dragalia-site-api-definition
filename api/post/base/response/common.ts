import {BaseResponse} from '../../../base/response';
import {PostBodyBase} from '../elements/common';
import {PostEditResult, PostPublishResult} from '../elements/result';


export type PostEditResponse = BaseResponse & PostEditResult;

export type PostPublishResponse = PostEditResponse & PostPublishResult;

export type PostGetResponse = BaseResponse & PostBodyBase;

export type PostIdCheckResponse = BaseResponse & {
  available: boolean
};
