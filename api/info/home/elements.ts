import {PostInfo} from '../../post/base/elements/common';
import {PostType} from '../../post/types';
import {GAPeriodicCountryUserData, GAPeriodicTotalUserData} from '../stats/elements';


export type PostInfoEntry = {
  title: string,
  type: PostType,
  pid: number,
  info: PostInfo,
};

export type HomepageData = {
  posts: {[type in PostType]: PostInfoEntry[]},
  stats: {
    user: {
      perCountry: GAPeriodicCountryUserData,
      period: GAPeriodicTotalUserData,
    },
    lastFetchedEpoch: number,
  },
};
