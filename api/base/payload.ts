import {SupportedLanguages} from '../other/lang';

export type RequestPayloadBase = {
  googleUid: string
}

export type RequestPayloadHasLang = RequestPayloadBase & {
  lang: SupportedLanguages,
}

export type PostListPayload = RequestPayloadHasLang & {
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

export type PostEditPayload = {
  editNote: string
}
