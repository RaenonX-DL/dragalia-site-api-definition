import {BaseResponse} from '../../base/response';
import {UnitType} from '../../other/unit';
import {UserIsAdminResponse} from '../../userControl/response';
import {PostInfo} from '../base/elements/common';
import {PostEditResponse, PostGetResponse, PostIdCheckResponse, PostPublishResponse} from '../base/response/common';
import {AnalysisBody, CharaAnalysisBody, DragonAnalysisBody} from './elements';

export type AnalysisLookupEntry = PostInfo & {
  type: UnitType,
  unitId: number,
}

export type AnalysisLookupAnalyses = { [UnitID in number]: AnalysisLookupEntry }

export type AnalysisLookupResponse = BaseResponse & UserIsAdminResponse & {
  analyses: AnalysisLookupAnalyses
}

export type AnalysisLookupLandingResponse = BaseResponse & UserIsAdminResponse & {
  analyses: Array<AnalysisLookupEntry>,
}

export type AnalysisPublishResponse = PostPublishResponse & {
  unitId: number,
}

export type AnalysisGetResponse = PostGetResponse & AnalysisBody

export type CharaAnalysisGetResponse = AnalysisGetResponse & CharaAnalysisBody

export type DragonAnalysisGetResponse = AnalysisGetResponse & DragonAnalysisBody

export type AnalysisEditResponse = PostEditResponse & {
  unitId: number,
}

export type AnalysisIdCheckResponse = PostIdCheckResponse

export type AnalysisResponse = CharaAnalysisGetResponse | DragonAnalysisGetResponse
