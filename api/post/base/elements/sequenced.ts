import {SequencedResponse} from '../../../base/response';
import {PostMeta} from './common';

export type SequencedPost = SequencedResponse & {
  title: string,
}

export type SequencedPostMeta = PostMeta & SequencedPost
