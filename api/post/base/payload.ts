import {SinglePostPayload} from '../../base/payload';

export type PostGetPayload = SinglePostPayload & {
  seqId: number,
  incCount?: boolean
}
