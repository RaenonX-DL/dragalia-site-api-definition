import {RequestPayloadHasLang} from '../../../base/payload';
import {SupportedLanguages} from '../../../other/lang';

export type PostInfo = {
  lang: SupportedLanguages,
  viewCount: number,
  modifiedEpoch: number,
  publishedEpoch: number,
}

export type PostMeta = Omit<RequestPayloadHasLang, 'uid'>

export type PostEditNote = {
  timestampEpoch: number,
  note: string
}

export type PostBodyBase = PostInfo & {
  editNotes: Array<PostEditNote>,
  isAltLang: boolean,
  otherLangs: Array<SupportedLanguages>
}
