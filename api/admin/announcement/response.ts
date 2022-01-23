import {EmailSendResult} from '../../base/elements';
import {BaseResponse} from '../../base/response';


export type SiteAnnouncementResponse = BaseResponse & {
  result: EmailSendResult,
};
