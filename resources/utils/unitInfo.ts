import {UnitType} from '../../api/other/unit';
import {CharaInfo} from '../types/charaInfo';
import {DragonInfo} from '../types/dragonInfo';
import {UnitInfoData, UnitInfoMap} from '../types/unitInfo';


export const toUnitInfoMap = <K extends number | string>(
  charaInfo: CharaInfo,
  dragonInfo: DragonInfo,
  getKey: (info: UnitInfoData) => K,
): UnitInfoMap<K> => {
  const data: Array<UnitInfoData> = [];

  data.push(...charaInfo.map((data) => ({...data, type: UnitType.CHARACTER})));
  data.push(...dragonInfo.map((data) => ({...data, type: UnitType.DRAGON})));

  return new Map(data.map((info) => [getKey(info), info]));
};
