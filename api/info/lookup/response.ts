import {BaseResponse} from '../../base/response';
import {UnitType} from '../../other/unit';
import {PostInfo} from '../../post/base/elements/common';


export type UnitInfoLookupEntry = PostInfo & {
  type: UnitType,
  unitId: number,
};

export type UnitInfoLookupAnalyses = {[UnitID in number]: UnitInfoLookupEntry};

export type UnitInfoLookupResponse = BaseResponse & {
  analyses: UnitInfoLookupAnalyses
};

export type UnitInfoLookupLandingResponse = BaseResponse & {
  analyses: Array<UnitInfoLookupEntry>,
  userSubscribed: boolean,
};
