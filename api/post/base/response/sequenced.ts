import {BaseResponse, SequencedResponse} from '../../../base/response';
import {UserIsAdminResponse} from '../../../userControl/response';
import {SequencedPostMeta} from '../elements/sequenced';
import {PostEditResponse, PostGetResponse, PostPublishResponse} from './common';

export type SequencedPostEditResponse = SequencedResponse & PostEditResponse

export type SequencedPostPublishResponse = SequencedResponse & PostPublishResponse

export type SequencedPostListResponse<E extends SequencedPostMeta = SequencedPostMeta> = BaseResponse &
  UserIsAdminResponse & {
  startIdx: number,
  postCount: number,
  posts: Array<E>
}

export type SequencedPostGetResponse = PostGetResponse & SequencedPostMeta
