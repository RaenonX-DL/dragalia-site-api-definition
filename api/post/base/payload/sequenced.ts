import {OptionalSequencedPayload, RequestPayloadHasLang, SequencedPayload} from '../../../base/payload';
import {SequencedPostMeta} from '../elements/sequenced';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload, PostPublishPayload} from './common';

export type SequencedPostPublishPayload = PostPublishPayload &
  OptionalSequencedPayload &
  Omit<SequencedPostMeta, 'seqId'>

export type SequencedPostGetPayload = PostGetPayload & SequencedPayload

export type SequencedPostIdCheckPayload = PostIdCheckPayload & OptionalSequencedPayload

export type SequencedPostListPayload = RequestPayloadHasLang & {
  start: number,
  limit: number
}

export type SequencedPostEditPayload = PostEditPayload & SequencedPayload
