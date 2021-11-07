import {RequestPayloadHasLang} from '../../base/payload';
import {KeyPointEntryUpdate} from './elements';


export type KeyPointGetPayload = RequestPayloadHasLang;

export type KeyPointManagePayload = RequestPayloadHasLang;

export type KeyPointUpdatePayload = RequestPayloadHasLang & {
  points: Array<KeyPointEntryUpdate>
};
