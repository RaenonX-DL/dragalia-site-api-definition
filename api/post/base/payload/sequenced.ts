import {OptionalSequencedPayload, RequestPayloadHasLang, SequencedPayload} from '../../../base/payload';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload, PostMetaPayload} from './common';

export type SequencedPostMetaPayload = SequencedPayload & PostMetaPayload & {
  title: string,
}

export type SequencedPostPublishPayload = Omit<SequencedPostMetaPayload, 'seqId'> & OptionalSequencedPayload

export type SequencedPostGetPayload = SequencedPayload & PostGetPayload

export type SequencedPostIdCheckPayload = SequencedPayload & PostIdCheckPayload

export type SequencedPostListPayload = RequestPayloadHasLang & {
  start: number,
  limit: number
}

export type SequencedPostEditPayload = SequencedPayload & PostEditPayload
