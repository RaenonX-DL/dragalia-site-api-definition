import {BaseResponse} from '../../base/response';
import {UnitType} from '../../other/unit';
import {UserIsAdminResponse} from '../../userControl/response';
import {PostMeta} from '../base/elements/common';
import {PostEditResponse, PostIdCheckResponse, PostPublishResponse} from '../base/response/common';
import {SequencedPostGetResponse} from '../base/response/sequenced';
import {AnalysisBody, CharacterSkill} from './elements';

export type AnalysisLookupEntry = PostMeta & {
  type: UnitType,
  unitId: number,
}

export type AnalysisLookupAnalyses = { [UnitID in number]: AnalysisLookupEntry }

export type AnalysisLookupResponse = BaseResponse &
  UserIsAdminResponse & {
  analyses: AnalysisLookupAnalyses
}

export type AnalysisPublishResponse = PostPublishResponse & {
  unitId: number,
}

export type AnalysisGetResponse = SequencedPostGetResponse & AnalysisBody

export type CharaAnalysisContent = AnalysisBody & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string
}

export type CharaAnalysisGetResponse = AnalysisGetResponse & CharaAnalysisContent

export type DragonAnalysisContent = AnalysisBody & {
  ultimate: string,
  notes: string,
  suitableCharacters: string
}

export type DragonAnalysisGetResponse = AnalysisGetResponse & DragonAnalysisContent

export type AnalysisEditResponse = PostEditResponse & {
  unitId: number,
}

export type AnalysisIdCheckResponse = PostIdCheckResponse

export type AnalysisResponse = CharaAnalysisGetResponse | DragonAnalysisGetResponse
