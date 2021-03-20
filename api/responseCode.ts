export enum ApiResponseCode {
  SUCCESS = 100,
  SUCCESS_NEW = 101,

  FAILED_LOGIN_NOT_RECORDED = 200,
  FAILED_POST_NOT_EXISTS = 202,
  FAILED_POST_NOT_PUBLISHED_ID_SKIPPED = 203,
  FAILED_POST_ALREADY_EXISTS = 204,
  FAILED_POST_ID_NOT_SPECIFIED = 205,

  FAILED_INSUFFICIENT_PERMISSION = 901,

  FAILED_METHOD_NOT_ALLOWED = 997,
  FAILED_ENDPOINT_NOT_EXISTS = 998,
  FAILED_INTERNAL_ERROR = 999
}

/**
 * Util class for {@linkcode ApiResponseCodes}.
 */
export class ApiResponseCodeUtil {
  /**
   * Check if ``code`` is successful.
   *
   * @param {ApiResponseCode} code response code to check
   * @return {boolean} if the response code is successful
   */
  static isSuccess(code: ApiResponseCode): boolean {
    return [ApiResponseCode.SUCCESS, ApiResponseCode.SUCCESS_NEW].includes(code);
  }
}
