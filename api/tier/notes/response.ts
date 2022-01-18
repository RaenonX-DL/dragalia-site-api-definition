import {BaseResponse} from '../../base/response';
import {UnitTierData, UnitTierNote} from './elements';


export type UnitTierNoteGetResponse = BaseResponse & {
  data: UnitTierData,
  userSubscribed: boolean,
};

export type UnitTierNoteSingleResponse = BaseResponse & {
  // `null` if the requested unit does not have an existing tier note
  data: UnitTierNote | null,
};

export type UnitTierNoteEditResponse = UnitTierNoteSingleResponse;

export type UnitTierNoteUpdateResponse = BaseResponse;
