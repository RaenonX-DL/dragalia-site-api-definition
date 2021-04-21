export type RequestPayloadBase = {
  googleUid: string
}

export type PostListPayload = RequestPayloadBase & {
  langCode: string,
  start: number,
  limit: number
}

export type PostIdentifierPayload = RequestPayloadBase & {
  seqId?: number,
  lang: string,
}

export type PostMetaPayload = PostIdentifierPayload & {
  title: string,
}

export type PostEditPayload = PostMetaPayload & {
  editNote: string
}
