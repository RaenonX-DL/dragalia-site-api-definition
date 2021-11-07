import {OptionalSequenced} from '../../base/elements';
import {
  SequencedPostEditPayload,
  SequencedPostGetPayload,
  SequencedPostIdCheckPayload,
  SequencedPostListPayload,
  SequencedPostPublishPayload,
} from '../base/payload/sequenced';
import {MiscPostBody} from './elements';


export type MiscPostListPayload = SequencedPostListPayload;

export type MiscPostPublishPayload =
  SequencedPostPublishPayload
  & Omit<MiscPostBody, 'seqId'>
  & OptionalSequenced;

export type MiscPostEditPayload = SequencedPostEditPayload & MiscPostBody;

export type MiscPostGetPayload = SequencedPostGetPayload;

export type MiscPostIdCheckPayload = SequencedPostIdCheckPayload;
