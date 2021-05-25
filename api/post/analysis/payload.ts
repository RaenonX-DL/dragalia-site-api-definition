import {RequestPayloadBase, RequestPayloadHasLang} from '../../base/payload';
import {PostEditPayload, PostGetPayload, PostIdCheckPayload, PostPublishPayload} from '../base/payload/common';
import {AnalysisBody, AnalysisMeta, CharaAnalysisBody, DragonAnalysisBody} from './elements';

export type AnalysisGetPayload = PostGetPayload & AnalysisMeta

export type AnalysisIdCheckPayload = PostIdCheckPayload & AnalysisMeta

export type AnalysisLookupPayload = RequestPayloadHasLang

export type AnalysisPublishPayload = PostPublishPayload & AnalysisBody

export type AnalysisEditPayload = PostEditPayload & AnalysisBody

export type CharaAnalysisPayload = RequestPayloadBase & CharaAnalysisBody

export type DragonAnalysisPayload = RequestPayloadBase & DragonAnalysisBody

export type CharaAnalysisPublishPayload = AnalysisPublishPayload & CharaAnalysisPayload

export type CharaAnalysisEditPayload = AnalysisEditPayload & CharaAnalysisPublishPayload

export type DragonAnalysisPublishPayload = AnalysisPublishPayload & DragonAnalysisPayload

export type DragonAnalysisEditPayload = AnalysisEditPayload & DragonAnalysisPublishPayload
