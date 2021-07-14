import {MultiLangText} from './common/text';


export type SimpleUnitInfoEntry = {
  name: MultiLangText
}

export type SimpleUnitInfo = Record<string, SimpleUnitInfoEntry> // Key is the unit ID
