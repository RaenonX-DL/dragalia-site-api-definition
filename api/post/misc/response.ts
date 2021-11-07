import {SequencedPostInfo} from '../base/elements/sequenced';
import {PostIdCheckResponse} from '../base/response/common';
import {
  SequencedPostEditResponse,
  SequencedPostGetResponse,
  SequencedPostListResponse,
  SequencedPostPublishResponse,
} from '../base/response/sequenced';
import {MiscPostBody} from './elements';


export type MiscPostListEntry = SequencedPostInfo;

export type MiscPostListResponse = SequencedPostListResponse<MiscPostListEntry>;

export type MiscPostPublishResponse = SequencedPostPublishResponse;

export type MiscPostEditResponse = SequencedPostEditResponse;

export type MiscPostGetResponse = SequencedPostGetResponse & MiscPostBody;

export type MiscPostIdCheckResponse = PostIdCheckResponse;
