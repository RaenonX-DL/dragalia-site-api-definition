import {BaseResponse} from '../../base/response';
import {KeyPointData, KeyPointEntryFromBack} from './elements';


export type KeyPointGetResponse = BaseResponse & {
  data: KeyPointData,
};

export type KeyPointManageResponse = BaseResponse & {
  points: Array<KeyPointEntryFromBack>
};

export type KeyPointUpdateResponse = BaseResponse;
