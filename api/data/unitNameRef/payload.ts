import {RequestPayloadHasLang} from '../../base/payload';
import {UnitNameRefManageResponse} from './response';


export type UnitNameRefPayload = RequestPayloadHasLang

export type UnitNameRefManagePayload = RequestPayloadHasLang

export type UnitNameRefUpdatePayload = RequestPayloadHasLang & {
  refs: UnitNameRefManageResponse['refs'],
}
