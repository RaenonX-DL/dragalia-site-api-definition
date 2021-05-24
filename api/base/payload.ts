import {SupportedLanguages} from '../other/lang';

export type RequestPayloadBase = {
  googleUid: string
}

export type RequestPayloadHasLang = RequestPayloadBase & {
  lang: SupportedLanguages,
}
