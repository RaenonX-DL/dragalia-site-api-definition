import {PostInfo} from '../../post/base/elements/common';
import {PostType} from '../../post/types';
import {GAPeriodicActiveUserData} from '../stats/periodicActive';
import {GAPeriodicCountryUserData} from '../stats/periodicCountry';
import {GAPeriodicLangUserData} from '../stats/periodicLang';


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
      perLang: GAPeriodicLangUserData,
      active: GAPeriodicActiveUserData,
    },
    lastFetchedEpoch: number,
  },
};
