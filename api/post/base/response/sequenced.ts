import {Sequenced} from '../../../base/elements';
import {BaseResponse} from '../../../base/response';
import {SequencedPostInfo} from '../elements/sequenced';
import {PostEditResponse, PostGetResponse, PostPublishResponse} from './common';


export type SequencedPostEditResponse = Sequenced & PostEditResponse;

export type SequencedPostPublishResponse = Sequenced & PostPublishResponse;

export type SequencedPostListResponse<E extends SequencedPostInfo = SequencedPostInfo> = BaseResponse & {
  posts: Array<E>
  userSubscribed: boolean,
};

export type SequencedPostGetResponse = PostGetResponse & SequencedPostInfo;
