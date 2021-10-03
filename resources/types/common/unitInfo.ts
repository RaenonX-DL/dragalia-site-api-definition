import {UnitType} from '../../../api/other/unit';
import {MultiLangText, MultiLangTextExtended} from './text';


export type UnitInfoDataBase = {
  type: UnitType,
  name: MultiLangTextExtended,
  iconName: string,
  id: number,
  element: number,
  rarity: number,
  cvEn: MultiLangText,
  cvJp: MultiLangText,
  releaseEpoch: number,
}
