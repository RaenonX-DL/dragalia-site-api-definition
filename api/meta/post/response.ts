import {PageMetaResponse} from '../general/response';

export type AnalysisMetaParams = {
  name: string,
  summary: string,
}

export type QuestMetaParams = {
  title: string,
}

export type PostMetaParams = AnalysisMetaParams | QuestMetaParams

export type PostPageMetaResponse = PageMetaResponse & {
  params: PostMetaParams,
}
