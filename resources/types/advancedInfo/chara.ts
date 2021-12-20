import {UnitType} from '../../../api/other/unit';
import {CharaInfoData} from '../charaInfo';
import {AbilityInfo, SkillInfo} from './common';


export type CharaAbilityInfo = AbilityInfo;

export type CharaInfoDataAdvanced = {
  type: UnitType.CHARACTER,
  basic: CharaInfoData,
  skill: SkillInfo,
  ability: CharaAbilityInfo,
};
