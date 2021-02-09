// region Base classes

export type RequestPayloadBase = {
  googleUid: string
}

interface PostListPayload extends RequestPayloadBase {
  langCode: string,
  start: number,
  limit: number
}

interface SinglePostPayload extends RequestPayloadBase {
  seqId?: number,
  lang?: string
}

interface PostModifyPayload extends SinglePostPayload {
  modifyNote: string
}

// endregion


// region Payload - user control

export interface UserLoginPayload extends RequestPayloadBase {
  googleEmail: string
}

// endregion


// region Payload - quest post

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export interface QuestPostListPayload extends PostListPayload {
}

export interface QuestPostPublishPayload extends SinglePostPayload {
  title: string,
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}

export interface QuestPostEditPayload extends QuestPostPublishPayload, PostModifyPayload {
}

export interface QuestPostGetPayload extends SinglePostPayload {
  incCount?: boolean
}

export interface QuestPostIdCheckPayload extends SinglePostPayload {
}

// endregion


// region Payload - analysis post

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

// endregion
