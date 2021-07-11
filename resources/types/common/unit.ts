import {UnitType} from '../../../api/other/unit';
import {MultiLangText} from './text';


export type UnitData = {
  id: number,
  iconName: string,
  type: UnitType,
  name: MultiLangText,
  element: number,
}
