import {PageMetaResponse} from '../general/response';


export type UnitMetaParams = {
  unitName: string,
  unitId: number,
}

export type UnitPageMetaResponse = Omit<PageMetaResponse, 'params'> & {
  params: UnitMetaParams,
}
