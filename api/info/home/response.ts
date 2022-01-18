import {BaseResponse} from '../../base/response';
import {PostType} from '../../post/types';
import {HomepageData} from './elements';


export type HomepageLandingResponse = BaseResponse & {
  data: HomepageData,
  userSubscribed: {[type in PostType]: boolean},
};
