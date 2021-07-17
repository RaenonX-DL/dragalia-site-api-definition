import {CharaInfoData} from './charaInfo';
import {ExAbilitiesEntry} from './common/exAbility';


export type CharaExAbilityDataEntry = ExAbilitiesEntry & {
  chara: CharaInfoData,
}
