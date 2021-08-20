export enum ApiResponseCode {
  NOT_EXECUTED = 0,

  SUCCESS = 100,
  SUCCESS_NEW = 101,

  FAILED_PRESET_NOT_EXISTS = 201,
  FAILED_POST_NOT_EXISTS = 202,
  FAILED_POST_NOT_PUBLISHED_ID_SKIPPED = 203,
  FAILED_POST_ALREADY_EXISTS = 204,
  FAILED_POST_ID_NOT_SPECIFIED = 205,
  FAILED_USER_NOT_SIGNED_UP = 206,
  FAILED_UNIT_NOT_EXISTS = 207,
  FAILED_UNIT_ID_NOT_SPECIFIED = 208,
  FAILED_UNIT_NAME_DUPLICATED = 209,
  FAILED_WRONG_ANALYSIS_TYPE = 210,
  FAILED_DESCRIPTION_DUPLICATED = 211,
  FAILED_UNHANDLED_DATA_TYPE = 212,
  FAILED_DATA_NOT_EXISTS = 213,

  FAILED_INSUFFICIENT_PERMISSION = 901,

  FAILED_NO_ANONYMOUS_ACCESS = 995,
  FAILED_PAYLOAD_KEY_DEPRECATED = 996,
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
