import {PageMetaResponse} from '../general/response';


export type TierKeyPointParams = {
  title: string,
}

export type DataMetaParams = TierKeyPointParams

export type DataPageMetaResponse = PageMetaResponse & {
  params: DataMetaParams,
}
