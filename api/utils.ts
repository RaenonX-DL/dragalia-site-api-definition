import {BaseResponse, FailedResponse} from './base/response';
import {ApiResponseCode} from './responseCode';


export const isFailedResponse = (response: BaseResponse): response is FailedResponse => {
  return !!response.code && response.code !== ApiResponseCode.SUCCESS;
};
