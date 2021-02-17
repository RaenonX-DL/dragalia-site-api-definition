import {BaseResponse} from '../../base/response';

export type InternalErrorResponse = BaseResponse & {
  stack: string,
  message: string
}
