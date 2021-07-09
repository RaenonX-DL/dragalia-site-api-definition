import {PageMetaPayload} from '../general/payload';


export type UnitPageMetaPayload = PageMetaPayload & {
  unitIdentifier: number | string,
}
