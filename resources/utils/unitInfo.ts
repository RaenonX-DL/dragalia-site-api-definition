import {UnitType} from '../../api/other/unit';
import {CharaInfo} from '../types/charaInfo';
import {DragonInfo} from '../types/dragonInfo';
import {UnitInfoData, UnitInfoMap} from '../types/unitInfo';

export const toUnitInfoMap = (charaInfo: CharaInfo, dragonInfo: DragonInfo): UnitInfoMap => {
  const data: Array<UnitInfoData> = [];

  data.push(...charaInfo.map((data) => ({...data, type: UnitType.CHARACTER})));
  data.push(...dragonInfo.map((data) => ({...data, type: UnitType.DRAGON})));

  return new Map(data.map((info) => [info.id, info]));
};
