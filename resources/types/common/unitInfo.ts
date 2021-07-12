import {UnitType} from '../../../api/other/unit';
import {MultiLangText} from './text';

export type UnitInfoDataBase = {
  type: UnitType,
  name: MultiLangText,
  iconName: string,
  id: number,
  element: number,
  rarity: number,
  cvEn: MultiLangText,
  cvJp: MultiLangText,
  releaseEpoch: number,
}
