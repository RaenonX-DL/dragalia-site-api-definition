import {SupportedLanguages} from '../other/lang';

export type RequestPayloadBase = {
  uid: string
}

export type RequestPayloadHasLang = RequestPayloadBase & {
  lang: SupportedLanguages,
}
