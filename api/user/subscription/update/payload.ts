import {RequestPayloadBase} from '../../../base/payload';


export type SubscriptionUpdatePayload = RequestPayloadBase & {
  subKeysBase64: string,
};
