import {BaseResponse} from '../../base/response';
import {UnitNameRefData, UnitNameRefEntry} from './elements';


export type UnitNameRefResponse = BaseResponse & {
  data: UnitNameRefData,
}

export type UnitNameRefManageResponse = BaseResponse & {
  refs: Array<UnitNameRefEntry>,
}
