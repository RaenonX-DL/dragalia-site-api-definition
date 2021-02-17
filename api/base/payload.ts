export type RequestPayloadBase = {
  googleUid: string
}

export type PostListPayload = RequestPayloadBase & {
  langCode: string,
  start: number,
  limit: number
}

export type SinglePostPayload = RequestPayloadBase & {
  seqId?: number,
  lang: string
}

export type PostModifyPayload = SinglePostPayload & {
  modifyNote: string
}
