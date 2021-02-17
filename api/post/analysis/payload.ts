import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string
}

export type AnalysisPostPublishPayload = SinglePostPayload & {
  name: string,
  summary: string,
  summon: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string
}

export type CharaAnalysisPostPublishPayload = AnalysisPostPublishPayload & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type DragonAnalysisPostPublishPayload = AnalysisPostPublishPayload & {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export type AnalysisPostListPayload = PostListPayload & {
}

export type AnalysisPostGetPayload = SinglePostPayload & {
  incCount: boolean
}

export type CharaAnalysisPostEditPayload = PostModifyPayload & CharaAnalysisPostPublishPayload & {
}

export type DragonAnalysisPostEditPayload = PostModifyPayload & DragonAnalysisPostPublishPayload & {
}

export type AnalysisPostIdCheckPayload = SinglePostPayload & {
}
