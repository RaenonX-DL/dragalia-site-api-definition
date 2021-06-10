import {RequestPayloadBase} from '../base/payload';

export type UserLoginPayload = RequestPayloadBase & {
  email: string
}
