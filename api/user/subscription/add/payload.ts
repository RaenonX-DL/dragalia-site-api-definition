import {RequestPayloadBase} from '../../../base/payload';


export type SubscriptionAddPayload = RequestPayloadBase & {
  subKeyBase64: string,
};
