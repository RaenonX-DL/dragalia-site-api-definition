import {BaseResponse} from '../../base/response';
import {UnitType} from '../../other/unit';
import {UserIsAdminResponse} from '../../userControl/response';
import {PostMeta} from '../base/elements/common';
import {PostEditResponse, PostIdCheckResponse, PostPublishResponse} from '../base/response/common';
import {SequencedPostGetResponse} from '../base/response/sequenced';
import {CharacterSkill} from './payload';

export type AnalysisLookupEntry = PostMeta & {
  type: UnitType,
  unitId: number,
}

export type AnalysisLookupAnalyses = { [UnitID in number]: AnalysisLookupEntry }

export type AnalysisLookupResponse = BaseResponse &
  UserIsAdminResponse & {
  analyses: AnalysisLookupAnalyses
}

export type CharaAnalysisPublishResponse = PostPublishResponse

export type DragonAnalysisPublishResponse = PostPublishResponse

export type AnalysisCommonContent = {
  type: UnitType,
  summary: string,
  summonResult: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string
}

export type AnalysisGetResponse = SequencedPostGetResponse & AnalysisCommonContent

export type CharaAnalysisContent = AnalysisCommonContent & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type CharaAnalysisGetResponse = AnalysisGetResponse & CharaAnalysisContent

export type DragonAnalysisContent = AnalysisCommonContent & {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export type DragonAnalysisGetResponse = AnalysisGetResponse & DragonAnalysisContent

export type AnalysisEditResponse = PostEditResponse

export type AnalysisIdCheckResponse = PostIdCheckResponse

export type AnalysisResponse = CharaAnalysisGetResponse | DragonAnalysisGetResponse
