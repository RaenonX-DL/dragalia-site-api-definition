import {PostMetaPayload} from '../base/payload/common';

export type CharacterSkill = {
  name: string,
  info: string,
  rotations: string,
  tips: string,
}

export type AnalysisBody = Omit<PostMetaPayload, 'googleUid'> & {
  unitId: number,
  summary: string,
  summon: string,
  passives: string,
  normalAttacks: string,
  videos: string,
  story: string,
  keywords: string,
}
