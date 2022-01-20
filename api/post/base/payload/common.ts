import {RequestPayloadHasLang} from '../../../base/payload';


export type PostUpdateCommonPayload = RequestPayloadHasLang & {
  sendUpdateEmail: boolean,
};

export type PostPublishPayload = PostUpdateCommonPayload;

export type PostGetPayload = RequestPayloadHasLang & {
  incCount?: boolean,
};

export type PostIdCheckPayload = RequestPayloadHasLang;

export type PostEditPayload = PostUpdateCommonPayload & {
  editNote: string,
};
