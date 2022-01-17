import {RequestPayloadBase} from '../../../base/payload';


export type SubscriptionRemovePayload = RequestPayloadBase & {
  subKeyBase64: string,
};
