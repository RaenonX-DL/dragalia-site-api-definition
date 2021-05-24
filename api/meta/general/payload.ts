import {RequestPayloadBase, RequestPayloadHasLang} from '../../base/payload';

export type PageMetaPayload = RequestPayloadBase

export type PageMetaLangSensitivePayload = RequestPayloadHasLang & PageMetaPayload
