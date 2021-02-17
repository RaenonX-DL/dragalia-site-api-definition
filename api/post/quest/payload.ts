import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export type QuestPostListPayload = PostListPayload & {
}

export type QuestPostPublishPayload = SinglePostPayload & {
  title: string,
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}

export type QuestPostEditPayload = QuestPostPublishPayload & PostModifyPayload & {
}

export type QuestPostGetPayload = SinglePostPayload & {
  incCount?: boolean
}

export type QuestPostIdCheckPayload = SinglePostPayload & {
}
