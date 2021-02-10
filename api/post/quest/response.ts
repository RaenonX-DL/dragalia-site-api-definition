import {
  PostGetSuccessResponse,
  PostIdCheckResponse,
  PostListEntry,
  PostListResponse,
  PostUpdateSuccessResponse,
} from '../base/response';
import {PositionalInfo} from './payload';


export interface QuestPostListResponse extends PostListResponse {
  posts: Array<QuestPostListEntry>
}

export interface QuestPostListEntry extends PostListEntry {
  title: string,
}

export interface QuestPostPublishSuccessResponse extends PostUpdateSuccessResponse {
}

export interface QuestPostGetSuccessResponse extends PostGetSuccessResponse {
  title: string,
  general: string,
  video: string,
  info: Array<PositionalInfo>,
  addendum: string,
}

export interface QuestPostEditSuccessResponse extends PostUpdateSuccessResponse {
}

export interface QuestPostIdCheckResponse extends PostIdCheckResponse {
}
