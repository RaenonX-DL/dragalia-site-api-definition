import {SupportedLanguages} from '../../api/other/lang';
import {UnitType} from '../../api/other/unit';
import {UnitInfoDataBase} from './common/unitInfo';

export type UnitInfoData = UnitInfoDataBase & {
  type: UnitType
}

export type UnitInfoMap<K> = Map<K, UnitInfoData>

export type FuncGetUnitName = (unitId: number, lang: SupportedLanguages) => string | undefined
