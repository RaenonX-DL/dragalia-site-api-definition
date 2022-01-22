import {BaseResponse} from '../../../base/response';


export type SubscriptionGetResponse = BaseResponse & {
  subscriptionKeysBase64: string,
};
