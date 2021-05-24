import {
  SequencedPostEditPayload,
  SequencedPostGetPayload,
  SequencedPostIdCheckPayload,
  SequencedPostListPayload,
  SequencedPostPublishPayload,
} from '../base/payload/sequenced';
import {QuestPostBody} from './elements';

export type QuestPostListPayload = SequencedPostListPayload

export type QuestPostPublishPayload = SequencedPostPublishPayload & QuestPostBody;

export type QuestPostEditPayload = SequencedPostEditPayload & QuestPostPublishPayload

export type QuestPostGetPayload = SequencedPostGetPayload

export type QuestPostIdCheckPayload = SequencedPostIdCheckPayload
