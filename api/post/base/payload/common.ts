import {RequestPayloadHasLang} from '../../../base/payload';

export type PostPublishPayload = RequestPayloadHasLang

export type PostGetPayload = RequestPayloadHasLang & {
  incCount?: boolean
}

export type PostIdCheckPayload = RequestPayloadHasLang

export type PostEditPayload = RequestPayloadHasLang & {
  editNote: string
}
