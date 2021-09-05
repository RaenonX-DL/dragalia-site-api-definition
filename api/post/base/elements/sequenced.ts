import {OptionalSequenced, Sequenced} from '../../../base/elements';
import {PostInfo, PostMeta} from './common';


export type SequencedPost = Sequenced & {
  title: string,
}

export type SequencedPostInfo = PostInfo & SequencedPost

export type SequencedPostMeta = PostMeta & SequencedPost

export type OptionalSequencedPostMeta = Omit<SequencedPostMeta, 'seqId'> & OptionalSequenced
