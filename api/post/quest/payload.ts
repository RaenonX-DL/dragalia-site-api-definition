import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export interface QuestPostListPayload extends PostListPayload {
}

export interface QuestPostPublishPayload extends SinglePostPayload {
  title: string,
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}

export interface QuestPostEditPayload extends QuestPostPublishPayload, PostModifyPayload {
}

export interface QuestPostGetPayload extends SinglePostPayload {
  incCount?: boolean
}

export interface QuestPostIdCheckPayload extends SinglePostPayload {
}
