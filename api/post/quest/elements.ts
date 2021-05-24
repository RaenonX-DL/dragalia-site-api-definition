import {SequencedPostMetaPayload} from '../base/payload/sequenced';

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export type QuestPostBody = Omit<SequencedPostMetaPayload, 'googleUid'> & {
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}
