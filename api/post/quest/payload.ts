import {OptionalSequenced} from '../../base/elements';
import {
  SequencedPostEditPayload,
  SequencedPostGetPayload,
  SequencedPostIdCheckPayload,
  SequencedPostListPayload,
  SequencedPostPublishPayload,
} from '../base/payload/sequenced';
import {QuestPostBody} from './elements';


export type QuestPostListPayload = SequencedPostListPayload;

export type QuestPostPublishPayload =
  SequencedPostPublishPayload
  & Omit<QuestPostBody, 'seqId'>
  & OptionalSequenced;

export type QuestPostEditPayload = SequencedPostEditPayload & QuestPostBody;

export type QuestPostGetPayload = SequencedPostGetPayload;

export type QuestPostIdCheckPayload = SequencedPostIdCheckPayload;
