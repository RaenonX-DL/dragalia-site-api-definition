import {ConditionEnumEntry, EnumEntry} from '../enum';

export type ConditionEnumMap = Record<string, ConditionEnumEntry>;

export type CategorizedConditionEnums = {
  afflictions: Array<EnumEntry>,
  elements: Array<EnumEntry>,
}

export type BuffParamEnums = {
  unit: Array<EnumEntry>,
}

export type ElementEnums = {
  elemental: Array<EnumEntry>,
}

export type WeaponTypeEnums = {
  weapon: Array<EnumEntry>,
}

export type ExBuffParams = {
  exBuffParam: Array<EnumEntry>,
  chainedExBuffParam: Array<EnumEntry>,
}
