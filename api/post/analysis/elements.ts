import {UnitType} from '../../other/unit';
import {PostMeta} from '../base/elements/common';

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string,
}

export type AnalysisMeta = PostMeta & {
  unitId: number,
}

export type AnalysisBody = AnalysisMeta & {
  type: UnitType,
  summary: string,
  summonResult: string,
  passives: string,
  normalAttacks: string,
  videos: string,
}

export type CharaAnalysisBody = AnalysisBody & {
  forceStrikes: string,
  skills: Array<CharacterSkill>,
  tipsBuilds: string,
}

export type DragonAnalysisBody = AnalysisBody & {
  ultimate: string,
  notes: string,
  suitableCharacters: string,
}
