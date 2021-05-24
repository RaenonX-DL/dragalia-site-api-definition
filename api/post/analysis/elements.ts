import {UnitType} from '../../other/unit';
import {PostMetaPayload} from '../base/payload/common';

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string,
}

export type AnalysisBody = Omit<PostMetaPayload, 'googleUid'> & {
  type: UnitType,
  unitId: number,
  summary: string,
  summonResult: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string,
}
