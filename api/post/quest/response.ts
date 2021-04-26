import {
  PostGetSuccessResponse,
  PostIdCheckResponse,
  PostListEntry,
  PostListResponse,
  PostUpdateSuccessResponse,
} from '../base/response';
import {PositionalInfo} from './payload';


export type QuestPostListResponse = PostListResponse<QuestPostListEntry>

export type QuestPostListEntry = PostListEntry

export type QuestPostPublishSuccessResponse = PostUpdateSuccessResponse

export type QuestPostGetContent = {
  title: string,
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string,
}

export type QuestPostGetSuccessResponse = PostGetSuccessResponse & QuestPostGetContent

export type QuestPostEditSuccessResponse = PostUpdateSuccessResponse

export type QuestPostIdCheckResponse = PostIdCheckResponse
