import {OptionalSequenced, Sequenced} from '../../../base/elements';
import {RequestPayloadHasLang} from '../../../base/payload';
import {SequencedPostMeta} from '../elements/sequenced';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload, PostPublishPayload} from './common';

export type SequencedPostPublishPayload =
  PostPublishPayload &
  OptionalSequenced &
  Omit<SequencedPostMeta, 'seqId'>

export type SequencedPostGetPayload = PostGetPayload & Sequenced

export type SequencedPostIdCheckPayload = PostIdCheckPayload & OptionalSequenced

export type SequencedPostListPayload = RequestPayloadHasLang & {
  start: number,
  limit: number
}

export type SequencedPostEditPayload = PostEditPayload & Sequenced
