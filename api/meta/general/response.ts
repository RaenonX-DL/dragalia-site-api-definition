import {BaseResponse} from '../../base/response';

export type PageMetaResponse = BaseResponse & {
  isAdmin: boolean,
  showAds: boolean,
  params: { [key in string]: string },
}
