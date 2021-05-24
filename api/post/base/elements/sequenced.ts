import {SequencedPayload} from '../../../base/payload';
import {SequencedResponse} from '../../../base/response';
import {PostInfo, PostMeta} from './common';

export type SequencedPost = SequencedResponse & {
  title: string,
}

export type SequencedPostInfo = PostInfo & SequencedPost

export type SequencedPostMeta = PostMeta & SequencedPayload & {
  title: string,
}
