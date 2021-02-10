import {BaseResponse} from '../../base/response';

export interface InternalErrorResponse extends BaseResponse {
  stack: string,
  message: string
}
