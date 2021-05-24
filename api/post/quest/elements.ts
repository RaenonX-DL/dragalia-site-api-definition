import {SequencedPostMeta} from '../base/elements/sequenced';

export type PositionalInfo = {
  position: string,
  builds: string,
  rotations: string,
  tips: string,
}

export type QuestPostBody = SequencedPostMeta & {
  general: string,
  video: string,
  positional: Array<PositionalInfo>,
  addendum: string
}
