import {SupportedLanguages} from '../other/lang';

export type RequestPayloadBase = {
  googleUid: string
}

export type PostListPayload = RequestPayloadBase & {
  langCode: SupportedLanguages,
  start: number,
  limit: number
}

export type PostIdentifierPayload = RequestPayloadBase & {
  seqId?: number,
  lang: SupportedLanguages,
}

export type PostMetaPayload = PostIdentifierPayload & {
  title: string,
}

export type PostEditPayload = PostMetaPayload & {
  editNote: string
}
