import {UnitType} from '../../other/unit';
import {
  PostEditSuccessResponse,
  PostGetSuccessResponse,
  PostIdCheckResponse,
  PostListEntry,
  PostListResponse,
  PostPublishSuccessResponse,
} from '../base/response';
import {CharacterSkill} from './payload';

export type AnalysisListResponse = PostListResponse<AnalysisListEntry>

export type AnalysisListEntry = PostListEntry & {
  type: UnitType,
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
