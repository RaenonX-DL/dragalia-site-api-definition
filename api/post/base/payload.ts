import {PostIdentifierPayload} from '../../base/payload';

export type PostGetPayload = PostIdentifierPayload & {
  seqId: number,
  incCount?: boolean
}

export type PostIdCheckPayload = PostIdentifierPayload
