import {CharacterSkill} from './payload';
import {
  PostEditSuccessResponse,
  PostGetSuccessResponse, PostIdCheckResponse,
  PostListEntry,
  PostListResponse,
  PostPublishSuccessResponse,
} from '../base/response';

export enum AnalysisPostType {
  CHARACTER = 1,
  DRAGON = 2
}

export interface AnalysisPostListResponse extends PostListResponse {
  posts: Array<AnalysisPostListEntry>
}

export interface AnalysisPostListEntry extends PostListEntry {
  type: AnalysisPostType,
  unitName: string,
}

export interface CharaAnalysisPublishSuccessResponse extends PostPublishSuccessResponse {
}

export interface DragonAnalysisPublishSuccessResponse extends PostPublishSuccessResponse {
}

export interface AnalysisPostGetSuccessResponse extends PostGetSuccessResponse {
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

export interface CharacterAnalysisPost extends AnalysisPostGetSuccessResponse {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export interface DragonAnalysisPost extends AnalysisPostGetSuccessResponse {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export interface AnalysisPostEditSuccessResponse extends PostEditSuccessResponse {}

export interface AnalysisPostIdCheckResponse extends PostIdCheckResponse {}
