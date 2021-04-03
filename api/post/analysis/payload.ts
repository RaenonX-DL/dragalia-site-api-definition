import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';

export type AnalysisListPayload = PostListPayload

export type AnalysisPublishPayload = SinglePostPayload & {
  name: string,
  summary: string,
  summon: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string
}

export type AnalysisGetPayload = SinglePostPayload & {
  incCount: boolean
}

export type AnalysisIdCheckPayload = SinglePostPayload

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string
}

export type CharaAnalysisPayload = AnalysisPublishPayload & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type CharaAnalysisPublishPayload = CharaAnalysisPayload

export type CharaAnalysisEditPayload = PostModifyPayload & CharaAnalysisPublishPayload

export type DragonAnalysisPayload = AnalysisPublishPayload & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type DragonAnalysisPublishPayload = DragonAnalysisPayload

export type DragonAnalysisEditPayload = PostModifyPayload & DragonAnalysisPublishPayload
