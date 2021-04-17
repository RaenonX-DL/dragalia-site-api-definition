import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';
import {PostGetPayload} from '../base/payload';

export type AnalysisListPayload = PostListPayload

export type AnalysisPayload = SinglePostPayload & {
  name: string,
  summary: string,
  summon: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string,
}

export type AnalysisPublishPayload = AnalysisPayload

export type AnalysisGetPayload = PostGetPayload

export type AnalysisIdCheckPayload = SinglePostPayload

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string,
}

export type CharaAnalysisPayload = AnalysisPayload & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string,
}

export type CharaAnalysisPublishPayload = CharaAnalysisPayload

export type CharaAnalysisEditPayload = PostModifyPayload & CharaAnalysisPublishPayload

export type DragonAnalysisPayload = AnalysisPayload & {
  ultimate: string,
  notes: string,
  suitableCharacters: string,
}

export type DragonAnalysisPublishPayload = DragonAnalysisPayload

export type DragonAnalysisEditPayload = PostModifyPayload & DragonAnalysisPublishPayload
