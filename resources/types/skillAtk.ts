import {CancelUnit} from './common/cancel';
import {SkillDataBase, SkillEntryBase} from './common/skill';


export type BuffCountBoost = {
  each: number,
  inEffect: number,
  limit: number,
};

export type BuffFieldBoost = {
  self: number,
  ally: number,
};

export type AfflictionUnit = {
  statusConditionCode: number,
  statusCode: number,
  statusIcon: string,
  actionTime: number,
  probabilityPct: number,
  duration: number,
  stackable: boolean
};

export type AttackingSkillInfo = SkillDataBase & {
  modsMax: Array<number>,
  crisisMax: Array<number>,
  hitsMax: number,
  afflictions: Array<AfflictionUnit>,
  buffCountBoost: Array<BuffCountBoost>,
  buffZoneBoost: BuffFieldBoost,
  dispelMax: boolean,
  dispelTimingMax: Array<number>,
  hitTimingSecMax: Array<number>,
  cancelActionsMax: Array<CancelUnit>,
};

export type AttackingSkillData = SkillEntryBase & {
  skill: AttackingSkillInfo
};
