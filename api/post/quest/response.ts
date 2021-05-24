import {SequencedPostInfo} from '../base/elements/sequenced';
import {PostIdCheckResponse} from '../base/response/common';
import {
  SequencedPostEditResponse,
  SequencedPostGetResponse,
  SequencedPostListResponse,
  SequencedPostPublishResponse,
} from '../base/response/sequenced';
import {QuestPostBody} from './elements';


export type QuestPostListEntry = SequencedPostInfo

export type QuestPostListResponse = SequencedPostListResponse<QuestPostListEntry>

export type QuestPostPublishResponse = SequencedPostPublishResponse

export type QuestPostGetResponse = SequencedPostGetResponse & QuestPostBody

export type QuestPostEditResponse = SequencedPostEditResponse

export type QuestPostIdCheckResponse = PostIdCheckResponse
