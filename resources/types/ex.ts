import {CharaInfoData} from './charaInfo';
import {AbilityVariantEffectUnitData} from './common/effectAbility';


export type CharaExAbilityDataEntry = {
  chara: CharaInfoData,
  ex: Array<AbilityVariantEffectUnitData>,
  chainedEx: Array<AbilityVariantEffectUnitData>,
}
