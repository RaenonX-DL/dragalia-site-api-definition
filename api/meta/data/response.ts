import {PageMetaResponse} from '../general/response';


export type TierKeyPointParams = {
  title: string,
};

export type DatamineParams = {
  versionCode: string,
};

export type DataMetaParams = TierKeyPointParams | DatamineParams;

export type DataPageMetaResponse = PageMetaResponse & {
  params: DataMetaParams,
};
