import {RequestPayloadBase} from '../base/payload';

export interface UserLoginPayload extends RequestPayloadBase {
  googleEmail: string
}
