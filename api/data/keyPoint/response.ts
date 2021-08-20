import {BaseResponse} from '../../base/response';
import {KeyPointInfo} from './elements';


export type KeyPointInfoResponse = BaseResponse & {
  info: KeyPointInfo,
}
