import {RequestPayloadHasLang} from '../../base/payload';


export type SiteAnnouncementPayload = RequestPayloadHasLang & {
  markdownBase64: string,
};
