import {BaseResponse} from '../../base/response';
import {UserIsAdminResponse, UserShowAdsResponse} from '../../userControl/response';

export type PageMetaResponse = BaseResponse & UserShowAdsResponse & UserIsAdminResponse & {
  params: { [key in string]: string },
}
