export type BaseResponse = {
  code: number,
  success: boolean
}

export type FailedResponse = BaseResponse & {
  message?: string,
}
