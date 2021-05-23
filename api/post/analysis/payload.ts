import {PostEditPayload, PostIdentifierPayload, RequestPayloadHasLang} from '../../base/payload';
import {PostGetPayload, PostIdCheckPayload} from '../base/payload';

export type AnalysisLookupPayload = RequestPayloadHasLang

export type AnalysisPayload = PostIdentifierPayload & {
  unitId: number,
  summary: string,
  summon: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string,
}

export type AnalysisPublishPayload = AnalysisPayload

export type AnalysisEditPayload = AnalysisPublishPayload & PostEditPayload

export type AnalysisGetPayload = PostGetPayload

export type AnalysisIdCheckPayload = PostIdCheckPayload

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

export type CharaAnalysisPublishPayload = AnalysisPublishPayload & CharaAnalysisPayload

export type CharaAnalysisEditPayload = AnalysisEditPayload & CharaAnalysisPublishPayload

export type DragonAnalysisPayload = AnalysisPayload & {
  ultimate: string,
  notes: string,
  suitableCharacters: string,
}

export type DragonAnalysisPublishPayload = AnalysisPublishPayload & DragonAnalysisPayload

export type DragonAnalysisEditPayload = AnalysisEditPayload & DragonAnalysisPublishPayload
