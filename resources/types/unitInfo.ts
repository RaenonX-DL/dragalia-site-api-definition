import {UnitType} from '../../api/other/unit';
import {UnitInfoDataBase} from './common/unitInfo';

export type UnitInfoData = UnitInfoDataBase & {
  type: UnitType
}

export type UnitInfoMap = Map<number, UnitInfoData>
