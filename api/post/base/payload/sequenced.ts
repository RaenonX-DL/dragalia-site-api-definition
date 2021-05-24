import {OptionalSequencedPayload, RequestPayloadHasLang, SequencedPayload} from '../../../base/payload';
import {SequencedPostMeta} from '../elements/sequenced';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload} from './common';

export type SequencedPostPublishPayload = OptionalSequencedPayload & Omit<SequencedPostMeta, 'seqId'>

export type SequencedPostGetPayload = SequencedPayload & PostGetPayload

export type SequencedPostIdCheckPayload = OptionalSequencedPayload & PostIdCheckPayload

export type SequencedPostListPayload = RequestPayloadHasLang & {
  start: number,
  limit: number
}

export type SequencedPostEditPayload = SequencedPayload & PostEditPayload
