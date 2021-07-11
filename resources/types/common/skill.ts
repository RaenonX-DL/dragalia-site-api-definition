import {CharaInfoData} from '../charaInfo';
import {MultiLangText} from './text';


export type SkillDataBase = {
  identifiers: Array<string>,
  internalId: number,
  name: MultiLangText,
  spMax: number,
  spGradualPctMax: number,
  sharable: boolean,
  ssCost: number,
  ssSp: number
}

export type SkillEntryBase = {
  uniqueHash: string,
  condition: Array<number>,
  chara: CharaInfoData,
  skill: SkillDataBase
}
