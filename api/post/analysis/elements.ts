import {UnitType} from '../../other/unit';
import {PostMetaPayload} from '../base/payload/common';

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string,
}

export type AnalysisMeta = Omit<PostMetaPayload, 'googleUid'> & {
  type: UnitType,
  unitId: number,
}

export type AnalysisBody = AnalysisMeta & {
  summary: string,
  summonResult: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string,
}
