import {ExAbilitiesEntry} from '../common/exAbility';
import {MultiLangText} from '../common/text';
import {AttackingSkillData} from '../skillAtk';
import {CharaInfoDataAdvanced} from './chara';
import {DragonInfoDataAdvanced} from './dragon';


export type OfficialSkillInfo = {
  iconPath: string,
  name: MultiLangText,
  description: MultiLangText,
}

export type SkillInfo = {
  official: Array<OfficialSkillInfo>,
  atkSkills: Array<AttackingSkillData>,
}

export type OfficialAbilityInfo = {
  iconPath: string,
  description: MultiLangText,
}

export type AbilityInfo = {
  passive: Array<OfficialAbilityInfo>,
  coAbility?: {
    global: OfficialAbilityInfo,
    chained: OfficialAbilityInfo,
    parsed: ExAbilitiesEntry,
  }
}

export type InfoDataAdvanced = CharaInfoDataAdvanced | DragonInfoDataAdvanced
