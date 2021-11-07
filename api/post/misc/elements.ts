import {SequencedPostMeta} from '../base/elements/sequenced';


export type MiscPostSection = {
  title: string,
  content: string,
};

export type MiscPostBody = SequencedPostMeta & {
  sections: Array<MiscPostSection>,
};
