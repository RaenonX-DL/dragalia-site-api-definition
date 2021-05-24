import {
  SequencedPostEditPayload,
  SequencedPostGetPayload,
  SequencedPostIdCheckPayload,
  SequencedPostListPayload,
  SequencedPostPublishPayload,
} from '../base/payload/sequenced';
import {QuestPostBody} from './elements';

export type QuestPostListPayload = SequencedPostListPayload

export type QuestPostPublishPayload = SequencedPostPublishPayload & Omit<QuestPostBody, 'seqId'>;

export type QuestPostEditPayload = SequencedPostEditPayload & QuestPostBody

export type QuestPostGetPayload = SequencedPostGetPayload

export type QuestPostIdCheckPayload = SequencedPostIdCheckPayload
