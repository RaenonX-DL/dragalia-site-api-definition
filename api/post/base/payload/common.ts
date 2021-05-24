import {RequestPayloadHasLang} from '../../../base/payload';
import {PageMetaPayload} from '../../../meta/general/payload';

export type PostMetaPayload = RequestPayloadHasLang

export type PostPublishPayload = PageMetaPayload

export type PostGetPayload = RequestPayloadHasLang & {
  incCount?: boolean
}

export type PostIdCheckPayload = RequestPayloadHasLang

export type PostEditPayload = {
  editNote: string
}
