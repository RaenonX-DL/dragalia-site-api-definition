export type Ranking = 'S' | 'A' | 'B' | 'C';

export const RankingScore: {[ranking in Ranking]: number} = {
  S: 4,
  A: 3,
  B: 2,
  C: 1,
};

// This is exactly the displaying layout in tier list page
export const Dimension = {
  conSolo: 'conSolo', conAi: 'conAi', conCoop: 'conCoop',
  normalSolo: 'normalSolo', normalAi: 'normalAi', normalCoop: 'normalCoop',
  sharedSkill: 'sharedSkill',
};

export type DimensionKey = keyof typeof Dimension;

export type TierNote = {
  isCompDependent: boolean,
  ranking: Ranking,
  note: string,
};

export type UnitTierNote = {
  points: Array<string>,
  tier: {[dim in DimensionKey]?: TierNote},
  lastUpdateEpoch: number,
};

export type UnitTierData = {[unitId in number]: UnitTierNote};
