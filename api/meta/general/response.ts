import {BaseResponse} from '../../base/response';
import {AlertEntry} from '../elements/alert';

export type PageMetaResponse = BaseResponse & {
  isAdmin: boolean,
  showAds: boolean,
  params: { [key in string]: string | number },
  alerts: Array<AlertEntry>,
}
