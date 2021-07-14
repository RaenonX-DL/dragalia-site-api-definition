import {MultiLangText} from './common/text';


export type SimpleUnitInfoEntry = {
  name: MultiLangText,
  icon: string,
}

export type SimpleUnitInfo = Record<string, SimpleUnitInfoEntry> // Key is the unit ID
