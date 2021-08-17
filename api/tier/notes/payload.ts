import {RequestPayloadHasLang} from '../../base/payload';
import {UnitTierNote} from './elements';


export type UnitTierNoteGetPayload = RequestPayloadHasLang

export type UnitTierNoteEditPayload = RequestPayloadHasLang & {
  unitId: number,
}

export type UnitTierNoteUpdatePayload = RequestPayloadHasLang & {
  unitId: number,
  data: Omit<UnitTierNote, 'lastUpdateEpoch'>,
}
