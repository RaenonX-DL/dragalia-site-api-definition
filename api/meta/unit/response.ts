import {PageMetaResponse} from '../general/response';


export type UnitMetaParams = {
  unitName: string,
}

export type UnitPageMetaResponse = PageMetaResponse & {
  params: UnitMetaParams,
}
