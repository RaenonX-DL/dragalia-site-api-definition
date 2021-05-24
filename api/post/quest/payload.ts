import {
  SequencedPostEditPayload,
  SequencedPostGetPayload,
  SequencedPostIdCheckPayload,
  SequencedPostListPayload,
  SequencedPostMetaPayload,
  SequencedPostPublishPayload,
} from '../base/payload/sequenced';
import {PositionalInfo} from './elements';

export type QuestPostListPayload = SequencedPostListPayload

export type QuestPostBody = SequencedPostMetaPayload & {
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}

export type QuestPostPublishPayload = SequencedPostPublishPayload & QuestPostBody;

export type QuestPostEditPayload = SequencedPostEditPayload & QuestPostPublishPayload

export type QuestPostGetPayload = SequencedPostGetPayload

export type QuestPostIdCheckPayload = SequencedPostIdCheckPayload
