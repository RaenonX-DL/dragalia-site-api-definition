import {BaseResponse} from '../base/response';

export type UserLoginResponse = BaseResponse;

export type UserShowAdsResponse = BaseResponse & {
  showAds: boolean,
}

export type UserIsAdminResponse = BaseResponse & {
  isAdmin: boolean,
}
