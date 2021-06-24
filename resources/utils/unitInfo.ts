import {UnitNameRefData} from '../../api/data/unitNameRef/elements';
import {SupportedLanguages} from '../../api/other/lang';
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

export const toUnitInfoNameMap = (
  unitInfoIdMap: UnitInfoMap<number>,
  lang: SupportedLanguages,
  unitNameRef: UnitNameRefData,
): UnitInfoMap<string> => {
  const ret = new Map<string, UnitInfoData>();

  for (const unitInfo of unitInfoIdMap.values()) {
    ret.set(unitInfo.name[lang], unitInfo);
  }

  Object.entries(unitNameRef).forEach(([name, unitId]) => {
    const unitInfo = unitInfoIdMap.get(unitId);
    if (!unitInfo) {
      return;
    }
    ret.set(name, unitInfo);
  });

  return ret;
};
