import {SequencedPostMeta} from '../base/elements/sequenced';
import {PostIdCheckResponse} from '../base/response/common';
import {
  SequencedPostEditResponse,
  SequencedPostGetResponse,
  SequencedPostListResponse,
  SequencedPostPublishResponse,
} from '../base/response/sequenced';
import {PositionalInfo} from './elements';


export type QuestPostListEntry = SequencedPostMeta

export type QuestPostListResponse = SequencedPostListResponse<QuestPostListEntry>

export type QuestPostPublishResponse = SequencedPostPublishResponse

export type QuestPostContent = {
  title: string,
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string,
}

export type QuestPostGetResponse = SequencedPostGetResponse & QuestPostContent

export type QuestPostEditResponse = SequencedPostEditResponse

export type QuestPostIdCheckResponse = PostIdCheckResponse
