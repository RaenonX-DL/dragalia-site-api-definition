import {RequestPayloadHasLang} from '../../base/payload';
import {UnitTierNote} from './elements';


export type UnitTierNoteGetPayload = RequestPayloadHasLang;

export type UnitTierNoteSinglePayload = RequestPayloadHasLang & {
  unitId: number,
};

export type UnitTierNoteEditPayload = UnitTierNoteSinglePayload;

export type UnitTierNoteUpdatePayload = RequestPayloadHasLang & {
  unitId: number,
  data: Omit<UnitTierNote, 'lastUpdateEpoch'>,
  sendUpdateEmail: boolean,
};
