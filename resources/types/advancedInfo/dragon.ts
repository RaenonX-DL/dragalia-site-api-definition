import {UnitType} from '../../../api/other/unit';
import {DragonInfoData} from '../dragonInfo';
import {AbilityInfo, SkillInfo} from './common';


export type DragonAbilityInfo = AbilityInfo & {
  coAbility: never,
}

export type DragonInfoDataAdvanced = {
  type: UnitType.DRAGON,
  basic: DragonInfoData,
  skill: SkillInfo,
  ability: DragonAbilityInfo,
}
