import {OptionalSequencedPayload, RequestPayloadHasLang, SequencedPayload} from '../../../base/payload';
import {PostMeta} from '../elements/common';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload} from './common';

export type SequencedPostMetaPayload = SequencedPayload & PostMeta & {
  title: string,
}

export type SequencedPostPublishPayload = OptionalSequencedPayload & Omit<SequencedPostMetaPayload, 'seqId'>

export type SequencedPostGetPayload = SequencedPayload & PostGetPayload

export type SequencedPostIdCheckPayload = OptionalSequencedPayload & PostIdCheckPayload

export type SequencedPostListPayload = RequestPayloadHasLang & {
  start: number,
  limit: number
}

export type SequencedPostEditPayload = SequencedPayload & PostEditPayload
