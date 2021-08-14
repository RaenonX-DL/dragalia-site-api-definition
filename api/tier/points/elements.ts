export const KeyPointTypeEnum = {
  strength: 'strength',
  weakness: 'weakness',
};

export type KeyPointType = keyof typeof KeyPointTypeEnum

export type KeyPointEntry = {
  type: KeyPointType,
  description: string,
}

export type KeyPointEntryUpdate = KeyPointEntry & {
  id?: string,
}

export type KeyPointEntryFromBack = KeyPointEntry & {
  id: string,
}

export type KeyPointData = { [entryId in string]: KeyPointEntry }
