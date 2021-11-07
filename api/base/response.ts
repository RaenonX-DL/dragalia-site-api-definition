import {ApiResponseCode} from '../responseCode';


export type BaseResponse = {
  code: ApiResponseCode,
  success: boolean
};

export type FailedResponse = BaseResponse & {
  message?: string,
};
