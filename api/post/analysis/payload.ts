import {PostListPayload, PostModifyPayload, SinglePostPayload} from '../../base/payload';

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string
}

interface AnalysisPostPublishPayload extends SinglePostPayload {
  name: string,
  summary: string,
  summon: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string
}

export interface CharaAnalysisPostPublishPayload extends AnalysisPostPublishPayload {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export interface DragonAnalysisPostPublishPayload extends AnalysisPostPublishPayload {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export interface AnalysisPostListPayload extends PostListPayload {
}

export interface AnalysisPostGetPayload extends SinglePostPayload {
  incCount: boolean
}

export interface CharaAnalysisPostEditPayload extends PostModifyPayload, CharaAnalysisPostPublishPayload {
}

export interface DragonAnalysisPostEditPayload extends PostModifyPayload, DragonAnalysisPostPublishPayload {
}

export interface AnalysisPostIdCheckPayload extends SinglePostPayload {
}
