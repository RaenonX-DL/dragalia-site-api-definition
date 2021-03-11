import {RequestPayloadBase} from '../base/payload';

export type UserLoginPayload = RequestPayloadBase & {
  googleEmail: string
}

export type UserShowAdsPayload = RequestPayloadBase;
