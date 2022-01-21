import {PostType} from '../../../post/types';


export type SubscriptionKeyConstName =
  'ALL_QUEST' |
  'ALL_ANALYSIS' |
  'ALL_MISC' |
  'ALL_TIER' |
  'ANNOUNCEMENT';

export type SubscriptionKeyConst = {
  type: 'const',
  name: SubscriptionKeyConstName,
};

export type SubscriptionKeyPost = {
  type: 'post',
  postType: PostType,
  id: number,
};

export type SubscriptionKey = SubscriptionKeyConst | SubscriptionKeyPost;
