export type RequestPayloadBase = {
  googleUid: string
}

export interface PostListPayload extends RequestPayloadBase {
  langCode: string,
  start: number,
  limit: number
}

export interface SinglePostPayload extends RequestPayloadBase {
  seqId?: number,
  lang?: string
}

export interface PostModifyPayload extends SinglePostPayload {
  modifyNote: string
}
