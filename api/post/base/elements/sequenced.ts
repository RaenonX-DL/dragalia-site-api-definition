import {SequencedResponse} from '../../../base/response';
import {PostInfo} from './common';

export type SequencedPost = SequencedResponse & {
  title: string,
}

export type SequencedPostMeta = PostInfo & SequencedPost
