import {RequestPayloadHasLang} from '../../base/payload';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload, PostPublishPayload} from '../base/payload/common';
import {AnalysisBody, CharacterSkill} from './elements';

export type AnalysisLookupPayload = RequestPayloadHasLang

export type AnalysisPublishPayload = PostPublishPayload & AnalysisBody

export type AnalysisEditPayload = PostEditPayload & AnalysisBody

export type AnalysisGetPayload = PostGetPayload

export type AnalysisIdCheckPayload = PostIdCheckPayload & {
  unitId: number,
}

export type CharaAnalysisPayload = AnalysisBody & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string,
}

export type CharaAnalysisPublishPayload = AnalysisPublishPayload & CharaAnalysisPayload

export type CharaAnalysisEditPayload = AnalysisEditPayload & CharaAnalysisPublishPayload

export type DragonAnalysisPayload = AnalysisBody & {
  ultimate: string,
  notes: string,
  suitableCharacters: string,
}

export type DragonAnalysisPublishPayload = AnalysisPublishPayload & DragonAnalysisPayload

export type DragonAnalysisEditPayload = AnalysisEditPayload & DragonAnalysisPublishPayload
