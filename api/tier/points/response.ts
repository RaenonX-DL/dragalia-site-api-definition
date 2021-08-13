import {BaseResponse} from '../../base/response';
import {KeyPointEntryFromBack} from './elements';


export type KeyPointManageResponse = BaseResponse & {
  points: Array<KeyPointEntryFromBack>
}

export type KeyPointUpdateResponse = BaseResponse
