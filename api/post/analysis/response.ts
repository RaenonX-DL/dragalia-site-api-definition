import {PostEditResponse, PostGetResponse, PostIdCheckResponse, PostPublishResponse} from '../base/response/common';
import {AnalysisBody, CharaAnalysisBody, DragonAnalysisBody} from './elements';


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
