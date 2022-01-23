import {RequestPayloadHasLang} from '../../base/payload';


export type SiteAnnouncementPayload = RequestPayloadHasLang & {
  title: string,
  markdown: string,
};
