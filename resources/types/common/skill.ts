import {MultiLangText} from './text';
import {UnitInfoDataBase} from './unitInfo';


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
  unit: UnitInfoDataBase,
  skill: SkillDataBase
}
