import {BaseResponse} from '../../base/response';
import {HomepageData} from './elements';


export type HomepageLandingResponse = BaseResponse & {
  data: HomepageData,
};
