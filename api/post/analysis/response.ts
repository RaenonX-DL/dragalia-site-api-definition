import {BaseResponse} from '../../base/response';
import {UnitType} from '../../other/unit';
import {UserIsAdminResponse} from '../../userControl/response';
import {
  PostEditSuccessResponse,
  PostGetSuccessResponse,
  PostIdCheckResponse,
  PostPublishSuccessResponse,
  PostUnitNoTitle,
} from '../base/response';
import {CharacterSkill} from './payload';

export type AnalysisLookupEntry = PostUnitNoTitle & {
  type: UnitType,
  unitId: number,
}

export type AnalysisLookupAnalyses = { [UnitID in number]: AnalysisLookupEntry }

export type AnalysisLookupResponse = BaseResponse &
  UserIsAdminResponse & {
  analyses: AnalysisLookupAnalyses
}

export type CharaAnalysisPublishSuccessResponse = PostPublishSuccessResponse

export type DragonAnalysisPublishSuccessResponse = PostPublishSuccessResponse

export type AnalysisGetContent = {
  type: UnitType,
  summary: string,
  summonResult: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string
}

export type AnalysisGetSuccessResponse = PostGetSuccessResponse & AnalysisGetContent

export type CharacterAnalysisGetContent = AnalysisGetContent & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type CharacterAnalysis = AnalysisGetSuccessResponse & CharacterAnalysisGetContent

export type DragonAnalysisGetContent = AnalysisGetContent & {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export type DragonAnalysis = AnalysisGetSuccessResponse & DragonAnalysisGetContent

export type AnalysisEditSuccessResponse = PostEditSuccessResponse

export type AnalysisIdCheckResponse = PostIdCheckResponse

export type AnalysisResponse = CharacterAnalysis | DragonAnalysis
