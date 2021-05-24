import {SupportedLanguages} from '../other/lang';

export type RequestPayloadBase = {
  googleUid: string
}

export type RequestPayloadHasLang = RequestPayloadBase & {
  lang: SupportedLanguages,
}

export type OptionalSequencedPayload = {
  seqId?: number,
}

export type SequencedPayload = {
  seqId: number,
}
