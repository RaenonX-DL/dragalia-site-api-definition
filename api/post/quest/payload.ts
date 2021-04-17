import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';
import {PostGetPayload} from '../base/payload';

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export type QuestPostListPayload = PostListPayload

export type QuestPostPayload = SinglePostPayload & {
  title: string,
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}

export type QuestPostPublishPayload = QuestPostPayload;

export type QuestPostEditPayload = QuestPostPublishPayload & PostModifyPayload & {
}

export type QuestPostGetPayload = PostGetPayload

export type QuestPostIdCheckPayload = SinglePostPayload & {
}
