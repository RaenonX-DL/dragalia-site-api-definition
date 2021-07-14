import {UnitType} from '../../api/other/unit';
import {MultiLangText} from './common/text';


export type SimpleUnitInfoEntry = {
  name: MultiLangText,
  type: UnitType,
  icon: string,
}

export type SimpleUnitInfo = Record<string, SimpleUnitInfoEntry> // Key is the unit ID
