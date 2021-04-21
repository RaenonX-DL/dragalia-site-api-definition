import {PostEditPayload, PostListPayload, PostMetaPayload} from '../../base/payload';
import {PostGetPayload, PostIdCheckPayload} from '../base/payload';

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export type QuestPostListPayload = PostListPayload

export type QuestPostPayload = PostMetaPayload & {
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}

export type QuestPostPublishPayload = QuestPostPayload;

export type QuestPostEditPayload = QuestPostPublishPayload & PostEditPayload

export type QuestPostGetPayload = PostGetPayload

export type QuestPostIdCheckPayload = PostIdCheckPayload
