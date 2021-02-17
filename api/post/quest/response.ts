import {
  PostGetSuccessResponse,
  PostIdCheckResponse,
  PostListEntry,
  PostListResponse,
  PostUpdateSuccessResponse,
} from '../base/response';
import {PositionalInfo} from './payload';


export type QuestPostListResponse = PostListResponse & {
  posts: Array<QuestPostListEntry>
}

export type QuestPostListEntry = PostListEntry & {
  title: string,
}

export type QuestPostPublishSuccessResponse = PostUpdateSuccessResponse & {
}

export type QuestPostGetSuccessResponse = PostGetSuccessResponse & {
  title: string,
  general: string,
  video: string,
  info: Array<PositionalInfo>,
  addendum: string,
}

export type QuestPostEditSuccessResponse = PostUpdateSuccessResponse & {
}

export type QuestPostIdCheckResponse = PostIdCheckResponse & {
}
