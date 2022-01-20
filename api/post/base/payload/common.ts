import {RequestPayloadHasLang} from '../../../base/payload';


export type PostUpdateCommonPayload = {
  sendUpdateEmail: boolean,
};

export type PostPublishPayload = RequestPayloadHasLang & PostUpdateCommonPayload;

export type PostGetPayload = RequestPayloadHasLang & {
  incCount?: boolean,
};

export type PostIdCheckPayload = RequestPayloadHasLang;

export type PostEditPayload = RequestPayloadHasLang & PostUpdateCommonPayload & {
  editNote: string,
};
