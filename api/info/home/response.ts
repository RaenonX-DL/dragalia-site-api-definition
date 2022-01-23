import {BaseResponse} from '../../base/response';
import {PostType} from '../../post/types';
import {HomepageData} from './elements';


export type HomepageLandingResponse = BaseResponse & {
  data: HomepageData,
  subscribed: {
    post: {[type in PostType]: boolean},
    announcement: boolean,
  },
};
