import {RequestPayloadHasLang} from '../../base/payload';


export type SiteAnnouncementPayload = RequestPayloadHasLang & {
  title: string,
  markdownBase64: string,
};
