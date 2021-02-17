import {
  PostEditSuccessResponse,
  PostGetSuccessResponse,
  PostIdCheckResponse,
  PostListEntry,
  PostListResponse,
  PostPublishSuccessResponse,
} from '../base/response';
import {CharacterSkill} from './payload';

export enum AnalysisPostType {
  CHARACTER = 1,
  DRAGON = 2
}

export type AnalysisPostListResponse = PostListResponse & {
  posts: Array<AnalysisPostListEntry>
}

export type AnalysisPostListEntry = PostListEntry & {
  type: AnalysisPostType,
  unitName: string,
}

export type CharaAnalysisPublishSuccessResponse = PostPublishSuccessResponse & {
}

export type DragonAnalysisPublishSuccessResponse = PostPublishSuccessResponse & {
}

export type AnalysisPostGetSuccessResponse = PostGetSuccessResponse & {
  type: number,
  name: string,
  summary: string,
  summonResult: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string
}

export type CharacterAnalysisPost = AnalysisPostGetSuccessResponse & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type DragonAnalysisPost = AnalysisPostGetSuccessResponse & {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export type AnalysisPostEditSuccessResponse = PostEditSuccessResponse & unknown

export type AnalysisPostIdCheckResponse = PostIdCheckResponse & unknown
