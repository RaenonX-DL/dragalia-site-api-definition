import {SupportedLanguages} from '../../../other/lang';

export type PostMeta = {
  lang: SupportedLanguages,
  viewCount: number,
  modifiedEpoch: number,
  publishedEpoch: number,
}

export type PostEditNote = {
  timestampEpoch: number,
  note: string
}
