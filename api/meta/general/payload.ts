import {RequestPayloadBase} from '../../base/payload';
import {SupportedLanguages} from '../../other/lang';

export type PageMetaPayload = RequestPayloadBase

export type PageMetaLangSensitivePayload = PageMetaPayload & {
  lang: SupportedLanguages,
}
