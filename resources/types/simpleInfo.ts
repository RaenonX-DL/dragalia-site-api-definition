import {UnitType} from '../../api/other/unit';
import {MultiLangTextExtended} from './common/text';


export type SimpleUnitInfoEntry = {
  name: MultiLangTextExtended,
  type: UnitType,
  icon: string,
};

export type SimpleUnitInfo = Record<string, SimpleUnitInfoEntry>; // Key is the unit ID
