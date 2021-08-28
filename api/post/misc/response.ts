import {PostIdCheckResponse} from '../base/response/common';
import {
  SequencedPostEditResponse,
  SequencedPostGetResponse,
  SequencedPostPublishResponse,
} from '../base/response/sequenced';
import {MiscPostBody} from './elements';


export type MiscPostPublishResponse = SequencedPostPublishResponse

export type MiscPostEditResponse = SequencedPostEditResponse

export type MiscPostGetResponse = SequencedPostGetResponse & MiscPostBody

export type MiscPostIdCheckResponse = PostIdCheckResponse
